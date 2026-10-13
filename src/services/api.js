/**
 * TerraLens API Client
 * Binds the frontend interface to the FastAPI backend multi-agent pipeline.
 * Features truthful backend connectivity detection and fallback to verified demonstration cases.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

/**
 * Checks if the backend FastAPI service is reachable and reports its health.
 */
export async function checkBackendHealth() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(`${API_BASE_URL}/health`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return { isOnline: true, data };
  } catch (err) {
    return { isOnline: false, error: err.message };
  }
}

/**
 * Submits a corporate sustainability claim to the FastAPI multi-agent pipeline.
 * When backend is available, executes live agents (Extraction, Research, Verification, Synthesis, Blockchain).
 * When offline, gracefully falls back to deterministic client evaluation labeled as demonstration.
 */
export async function submitClaimInvestigation(submission) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(`${API_BASE_URL}/audit/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        company_name: submission.companyName || submission.company_name,
        claim_text: submission.claimText || submission.claim_text,
        reporting_period: submission.reportingPeriod || submission.reporting_period || '2024',
        claim_type: submission.claimType || submission.claim_type || 'renewable_electricity',
        report_url: submission.reportUrl || submission.report_url || null
      }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return { success: true, report: data, isLiveBackend: true };
    }
    const errText = await res.text();
    throw new Error(`Backend response: ${res.status} - ${errText}`);
  } catch (err) {
    console.info('Backend unavailable or errored; using deterministic evaluation fallback:', err.message);
    return { success: false, error: err.message, isLiveBackend: false };
  }
}

/**
 * Retrieves chronological audit history from backend or local seed store.
 */
export async function fetchAuditHistory(company = null, status = null) {
  try {
    const params = new URLSearchParams();
    if (company) params.append('company', company);
    if (status) params.append('status', status);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(`${API_BASE_URL}/audits/history?${params.toString()}`, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return { success: true, audits: data, isLiveBackend: true };
    }
    throw new Error(`HTTP ${res.status}`);
  } catch (err) {
    return { success: false, error: err.message, isLiveBackend: false };
  }
}

/**
 * Verifies a candidate evidence bundle hash against on-chain registration.
 */
export async function verifyAuditHash(auditId, candidateHash) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const res = await fetch(`${API_BASE_URL}/blockchain/verify-hash`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ audit_id: auditId, candidate_hash: candidateHash }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      return await res.json();
    }
    throw new Error(`HTTP ${res.status}`);
  } catch {
    return null;
  }
}

/**
 * Looks up registered company records in EPA GPP and EIA registries.
 */
export async function lookupCompanyRegistry(company) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(`${API_BASE_URL}/registry/company-lookup?company=${encodeURIComponent(company)}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      return await res.json();
    }
  } catch {
    // fallback
  }
  return null;
}
