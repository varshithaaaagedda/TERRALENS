from enum import Enum
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field, HttpUrl
from datetime import datetime

class VerificationStatus(str, Enum):
    SUPPORTED = "Supported"
    CONTRADICTED = "Contradicted"
    INSUFFICIENT_EVIDENCE = "Insufficient Evidence"

class ClaimSubmissionRequest(BaseModel):
    company_name: str = Field(..., description="Target corporate entity name", min_length=2, max_length=120)
    claim_text: str = Field(..., description="Exact environmental/sustainability claim made by the company", min_length=10)
    reporting_period: str = Field(..., description="Reporting timeframe or baseline period e.g. 2024", min_length=2, max_length=50)
    claim_type: str = Field(default="renewable_electricity", description="Investigation category (e.g. renewable_electricity)")
    report_url: Optional[str] = Field(default=None, description="Optional public URL to source corporate sustainability report")

class StructuredClaim(BaseModel):
    claim_id: str
    target_metric: str = Field(..., description="Quantified commitment or target e.g. 100% renewable electricity")
    scope_boundary: str = Field(..., description="Organizational or operational boundary e.g. Global Scope 2, US Data Centers")
    claimed_percentage: Optional[float] = None
    claimed_volume_mwh: Optional[float] = None
    timeframe: str
    hedging_language_detected: bool = False
    hedge_phrases: List[str] = []

class EvidenceItem(BaseModel):
    id: str
    source_name: str
    source_url: str
    retrieval_timestamp: str
    dataset_type: str  # OFFICIAL_REGISTRY, SATELLITE_TELEMETRY, DISCLOSURE_AUDIT, BENCHMARK
    finding: str
    reported_metric: Optional[str] = None
    verified_metric: Optional[str] = None
    reliability_score: int = Field(..., ge=0, le=100)
    is_synthetic: bool = False
    synthetic_label: Optional[str] = None

class AuditVerificationResult(BaseModel):
    status: VerificationStatus
    confidence_score: int = Field(..., ge=0, le=100)
    discrepancy_delta: Optional[str] = None
    primary_mechanism: str
    regulatory_implication: str
    reasoning_summary: str
    limitations_and_caveats: List[str]

class BlockchainProof(BaseModel):
    network: str
    contract_address: str
    audit_id_bytes32: str
    evidence_bundle_hash: str  # Keccak256 / SHA-256 fingerprint of canonical evidence items
    tx_hash: Optional[str] = None
    block_number: Optional[int] = None
    timestamp: str
    explorer_url: Optional[str] = None
    status: str = "CONFIRMED"
    revision: int = 1

class AuditReport(BaseModel):
    audit_id: str
    company_name: str
    original_claim: str
    reporting_period: str
    report_url: Optional[str] = None
    claim_type: str = "renewable_electricity"
    created_at: str
    structured_claim: StructuredClaim
    evidence_items: List[EvidenceItem]
    verification: AuditVerificationResult
    blockchain_proof: BlockchainProof
    revision: int = 1
    amendment_reason: Optional[str] = None

class AuditAmendmentRequest(BaseModel):
    audit_id: str
    amendment_reason: str = Field(..., min_length=10)
    corrected_status: VerificationStatus
    additional_evidence: Optional[List[EvidenceItem]] = None

class LiveInvestigationStage(BaseModel):
    stage_id: str
    stage_name: str
    agent_name: str
    status: str  # PENDING, RUNNING, COMPLETED, FAILED
    progress_percentage: int
    activity_log: List[str] = []
    completed_checks: List[str] = []
    evidence_found_count: int = 0
