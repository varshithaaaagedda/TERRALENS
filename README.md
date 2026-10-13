# TerraLens — See Beyond Sustainability Claims.

> **AI-Powered Climate Intelligence & Greenwashing Detection Platform**  
> *Autonomous Multi-Agent Climate Forensics & Tamper-Evident Verification Platform*

---

## 🌍 1. Executive Summary

Corporate sustainability reports frequently assert ambitious commitments—such as *"100% renewable electricity achieved"* or *"50% operational emissions abatement"*. Yet verifying these claims requires sifting through hundreds of pages of disclosures, cross-checking government registries, examining physical generation inventories, and evaluating contractual environmental attribute certificates (EACs).

**TerraLens** is an automated, evidence-based climate intelligence platform that investigates corporate sustainability assertions. Rather than functioning as a generic document summarizer or subjective chatbot, TerraLens deploys specialized, autonomous AI agents to:
1. Extract structured, testable metrics from unstructured sustainability claims.
2. Query official public environmental datasets and government sensor registries.
3. Compare claims against empirical evidence using formal verification logic.
4. Issue transparent, source-attributed audit reports categorized into **Supported**, **Contradicted**, or **Insufficient Evidence**.
5. Commit tamper-evident cryptographic evidence fingerprints to a decentralized blockchain testnet.

---

## ⚖️ 2. Core Verification Principles

- **Evidence-Based Neutrality:** A company is **never** labeled guilty of greenwashing solely because data is missing. Incomplete or ambiguous data strictly resolves to **Insufficient Evidence**.
- **No Hallucinated Citations:** The platform never invents URLs, measurements, or synthetic benchmarks. When external registries lack records, findings are explicitly categorized under documented federal absence checks.
- **The Facility-Specific Sourcing Rule:** TerraLens **does not** assume that a regional electricity grid's average carbon intensity proves the electricity source of an individual factory. Contractual Power Purchase Agreements (PPAs), behind-the-meter generation, and verified EAC retirements are evaluated according to RE100 technical criteria.
- **Append-Only Immutability:** Audit records can be amended or disputed with documented justification, but historical on-chain proofs are never erased.

---

## 🏗️ 3. System Architecture

```
                    ┌─────────────────────────────────────────────────────────────┐
                    │                      TERRALENS FRONTEND                     │
                    │         Next.js 14/15 • TypeScript • Tailwind CSS • Recharts │
                    │     Landing • Dashboard • Live Stepper • Audit Report • History│
                    └──────────────────────────────┬──────────────────────────────┘
                                                   │ REST API / CORS
                                                   ▼
                    ┌─────────────────────────────────────────────────────────────┐
                    │                      FASTAPI BACKEND                        │
                    │               Python 3.12 • Pydantic Validation             │
                    ├─────────────────────────────────────────────────────────────┤
                    │  🤖 AGENT 1: Claim Extraction Agent (NLP & Hedge Detector)   │
                    │  🛰️ AGENT 2: Evidence Research Agent (EPA GPP & EIA Form 860)│
                    │  ⚖️ AGENT 3: Verification Agent (Supported/Contradicted/Gaps)│
                    │  📑 AGENT 4: Audit Synthesis Agent (SHA-256 Digesting)      │
                    └──────────────┬──────────────────────────────┬───────────────┘
                                   │                              │
                                   ▼                              ▼
    ┌──────────────────────────────────────────┐    ┌──────────────────────────────────────────┐
    │       OFFICIAL ENVIRONMENTAL DATASETS     │    │        BLOCKCHAIN TESTNET REGISTRY       │
    │  • EPA Green Power Partnership (GPP)     │    │  • Solidity Smart Contract (0.8.20)      │
    │  • EIA Form 860 Generator Interconnections│    │  • Polygon Amoy / Ethereum Sepolia Testnet│
    │  • RE100 Disclosures & EnergyTag GCs     │    │  • SHA-256 / Keccak256 Proofs            │
    └──────────────────────────────────────────┘    └──────────────────────────────────────────┘
```

---

## 🚀 4. Technology Stack

- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS, Recharts, Lucide Icons.
- **Backend:** Python 3.12, FastAPI, Pydantic v2, Uvicorn, Requests, Httpx, Pytest.
- **AI Investigation:** Google Gemini API (`google-genai` SDK) with deterministic semantic NLP fallback.
- **Blockchain:** Solidity (`TerraLensRegistry.sol`), Hardhat, Ethers.js, Web3.py.
- **Target Testnet:** Polygon Amoy (Chain ID: 80002) / Ethereum Sepolia (Chain ID: 11155111).

---

## 💻 5. Getting Started

### Prerequisites
- Node.js v18+ and npm v10+
- Python 3.10+

### Step 1: Clone and Configure Environment
```bash
git clone https://github.com/your-username/TerraLens.git
cd TerraLens
cp .env.example .env
```

### Step 2: Backend Setup
```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
pytest tests/
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```
API Documentation will be available at `http://localhost:8000/docs`.

### Step 3: Blockchain Smart Contract Testing & Deployment
```bash
cd contracts
npm install
npx hardhat test
npx hardhat run scripts/deploy.js --network localhost
```

### Step 4: Frontend Launch
```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 🧪 6. Testing Suite

The backend includes automated unit and integration tests:
```bash
cd backend
pytest tests/ -v
```
Test cases cover:
- Claim extraction and hedge detection.
- `SUPPORTED` claim matching (e.g., Microsoft Corporation with documented EIA PPA facilities).
- `CONTRADICTED` claim matching (e.g., AeroGlobal claiming 100% renewable power with 85.8% fossil grid billing).
- `INSUFFICIENT_EVIDENCE` fallback for unregistered entities (ensuring no false greenwashing accusations).
- Deterministic SHA-256 evidence bundle hashing.
- REST API endpoint health and history retrieval.

---

## 📜 7. Smart Contract Interface (`TerraLensRegistry.sol`)

- `registerAudit(bytes32 auditId, bytes32 evidenceBundleHash, string companyName, uint8 status)`
- `amendAudit(bytes32 auditId, bytes32 newEvidenceHash, uint8 newStatus, string amendmentReason)`
- `verifyEvidenceHash(bytes32 auditId, bytes32 candidateHash) view returns (bool)`
- `getAudit(bytes32 auditId) view returns (AuditRecord)`
- `getAuditHistoryItem(bytes32 auditId, uint256 index) view returns (AuditRecord)`

---

## 🏆 Platform Capabilities & Compliance Checklist

- [x] Functional, enterprise-ready end-to-end platform.
- [x] Multi-agent autonomous investigation pipeline.
- [x] Initial claim focus: Corporate Renewable Electricity.
- [x] Official public environmental datasets (EPA Green Power Partnership & EIA Form 860).
- [x] Strict triage: Supported, Contradicted, Insufficient Evidence.
- [x] Smart contract with append-only revision handling and tamper detection.
- [x] Private keys kept strictly off-chain with backend controlled authorization.
- [x] Automated test suite and security-hardened input validation.
