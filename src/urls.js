/**
 * Canonical form endpoints for the NOH web estate.
 *
 * TWO-TIER FUNNEL (HP rule 2026-07-11): the universal registration form is a
 * CLINICAL ENROLMENT form — it creates a patient record in NOMA OS. It is for
 * people who have decided to enrol (or clinician-mediated registration), not
 * for cold public traffic. Patient-facing CTAs on public pages lead with the
 * patient call-back EOI ("Ask Us to Call You") instead; registration appears
 * only as a secondary "Ready to enrol?" link and on clinician-facing pages.
 *
 * All clinical enrolment was consolidated onto ONE universal registration
 * form on 2026-07-06 (NOH General Client Intake Form). It serves all services
 * (maternity, gynae, colposcopy) and all sites, and feeds NOMA OS via webhook.
 *
 * Retired intake forms (disabled + redirecting — never link these):
 *   241282567972567 (Patient Registration Solo)
 *   261862948865072 (standalone NOMA Maternity Enrolment)
 *   222113080569046 (Medical Services Enquiry)
 */

export const INTAKE_FORM_URL = "https://form.jotform.com/230362510790550";

/** Patient EOI — "Ask Us to Call You" call-back form. Feeds the CRM lead
 *  pipeline (not NOMA OS). The public front door for patients. */
export const PATIENT_CALLBACK_FORM_URL = "https://form.jotform.com/243391667086062";

/** Provider Expression of Interest — feeds the Provider Recruitment CRM. */
export const EOI_FORM_URL = "https://form.jotform.com/250542120069548";

/**
 * Universal intake URL with source attribution, e.g.
 * intakeUrl("www-coza-home") → .../230362510790550?source=www-coza-home
 */
export function intakeUrl(source) {
  return source
    ? `${INTAKE_FORM_URL}?source=${encodeURIComponent(source)}`
    : INTAKE_FORM_URL;
}

/**
 * Patient call-back EOI URL with source attribution, e.g.
 * callbackUrl("www-coza-home") → .../243391667086062?source=www-coza-home
 */
export function callbackUrl(source) {
  return source
    ? `${PATIENT_CALLBACK_FORM_URL}?source=${encodeURIComponent(source)}`
    : PATIENT_CALLBACK_FORM_URL;
}
