"""
Automated Unit Tests for TerraLens Backend
Verifies claim extraction, verification heuristics, evidence hashing, and API endpoints.
"""

import pytest
from app.models.schemas import ClaimSubmissionRequest, VerificationStatus
from app.agents.claim_extraction import extract_structured_claim
from app.agents.evidence_research import collect_independent_evidence
from app.agents.verification import verify_claim_against_evidence
from app.agents.audit_synthesis import compute_evidence_bundle_hash, synthesize_audit_report
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_claim_extraction_and_hedge_detection():
    req = ClaimSubmissionRequest(
        company_name="AeroGlobal",
        claim_text="We are aiming to achieve 100% renewable electricity for our hubs by 2025.",
        reporting_period="2024"
    )
    structured = extract_structured_claim(req)
    assert structured.claimed_percentage == 100.0
    assert structured.hedging_language_detected is True
    assert "aiming to" in structured.hedge_phrases

def test_supported_claim_verification():
    req = ClaimSubmissionRequest(
        company_name="Microsoft Corporation",
        claim_text="Microsoft achieved 100% renewable electricity coverage via contracted PPAs.",
        reporting_period="2024"
    )
    structured = extract_structured_claim(req)
    evidence = collect_independent_evidence(req, structured)
    result = verify_claim_against_evidence(structured, evidence)

    assert result.status == VerificationStatus.SUPPORTED
    assert result.confidence_score >= 90
    assert "PPA" in result.primary_mechanism

def test_contradicted_claim_verification():
    req = ClaimSubmissionRequest(
        company_name="AeroGlobal SkyWays Group",
        claim_text="We operate 100% on zero-carbon clean electricity at all ground operations.",
        reporting_period="2024"
    )
    structured = extract_structured_claim(req)
    evidence = collect_independent_evidence(req, structured)
    result = verify_claim_against_evidence(structured, evidence)

    assert result.status == VerificationStatus.CONTRADICTED
    assert "Discrepancy" in result.primary_mechanism

def test_insufficient_evidence_when_no_data_exists():
    req = ClaimSubmissionRequest(
        company_name="Unknown Unregistered Tech Startup Inc",
        claim_text="Our local server room uses 100% clean solar energy.",
        reporting_period="2024"
    )
    structured = extract_structured_claim(req)
    evidence = collect_independent_evidence(req, structured)
    result = verify_claim_against_evidence(structured, evidence)

    # Must NOT accuse of greenwashing; must return Insufficient Evidence!
    assert result.status == VerificationStatus.INSUFFICIENT_EVIDENCE
    assert "Data Vacuum" in result.discrepancy_delta or "No registered" in result.reasoning_summary

def test_evidence_hash_determinism():
    req = ClaimSubmissionRequest(
        company_name="Microsoft Corporation",
        claim_text="100% renewable power achieved.",
        reporting_period="2024"
    )
    claim = extract_structured_claim(req)
    evidence = collect_independent_evidence(req, claim)
    
    hash1 = compute_evidence_bundle_hash(evidence)
    hash2 = compute_evidence_bundle_hash(evidence)
    assert hash1 == hash2
    assert hash1.startswith("0x")
    assert len(hash1) == 66

def test_api_health_endpoint():
    resp = client.get("/api/health")
    assert resp.status_code == 200
    data = resp.json()
    assert data["status"] == "healthy"
    assert data["agents"]["claim_extractor"] == "READY"

def test_api_history_endpoint():
    resp = client.get("/api/audits/history")
    assert resp.status_code == 200
    data = resp.json()
    assert len(data) >= 3

def test_api_submit_endpoint():
    payload = {
        "company_name": "Alphabet Inc. (Google LLC)",
        "claim_text": "Google matched 100% of our global annual electricity consumption with renewable energy purchases.",
        "reporting_period": "2024"
    }
    resp = client.post("/api/audit/submit", json=payload)
    assert resp.status_code == 200
    data = resp.json()
    assert data["company_name"] == "Alphabet Inc. (Google LLC)"
    assert data["blockchain_proof"]["evidence_bundle_hash"].startswith("0x")
