export type VerificationStatus = 'Supported' | 'Contradicted' | 'Insufficient Evidence';

export interface StructuredClaim {
  claim_id: string;
  target_metric: string;
  scope_boundary: string;
  claimed_percentage: number | null;
  claimed_volume_mwh: number | null;
  timeframe: string;
  hedging_language_detected: boolean;
  hedge_phrases: string[];
}

export interface EvidenceItem {
  id: string;
  source_name: string;
  source_url: string;
  retrieval_timestamp: string;
  dataset_type: string;
  finding: string;
  reported_metric: string | null;
  verified_metric: string | null;
  reliability_score: number;
  is_synthetic: boolean;
  synthetic_label?: string | null;
}

export interface AuditVerificationResult {
  status: VerificationStatus;
  confidence_score: number;
  discrepancy_delta: string | null;
  primary_mechanism: string;
  regulatory_implication: string;
  reasoning_summary: string;
  limitations_and_caveats: string[];
}

export interface BlockchainProof {
  network: string;
  contract_address: string;
  audit_id_bytes32: string;
  evidence_bundle_hash: string;
  tx_hash: string | null;
  block_number: number | null;
  timestamp: string;
  explorer_url: string | null;
  status: string;
  revision: number;
}

export interface AuditReport {
  audit_id: string;
  company_name: string;
  original_claim: string;
  reporting_period: string;
  report_url?: string | null;
  claim_type: string;
  created_at: string;
  structured_claim: StructuredClaim;
  evidence_items: EvidenceItem[];
  verification: AuditVerificationResult;
  blockchain_proof: BlockchainProof;
  revision: number;
  amendment_reason?: string | null;
}

export interface ClaimSubmissionRequest {
  company_name: string;
  claim_text: string;
  reporting_period: string;
  claim_type?: string;
  report_url?: string;
}

export interface InvestigationStage {
  id: string;
  name: string;
  agentRole: string;
  description: string;
  status: 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED';
  activityLogs: string[];
  completedChecks: string[];
}
