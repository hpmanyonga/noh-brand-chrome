/**
 * Canonical form endpoints for the NOH web estate.
 *
 * All patient intake was consolidated onto ONE universal registration form
 * on 2026-07-06 (NOH General Client Intake Form). Every Book / Register /
 * Enrol CTA on every site must point here — do not link any other intake
 * form. The form serves all services (maternity, gynae, colposcopy) and all
 * sites, and feeds NOMA OS via webhook.
 *
 * Retired intake forms (disabled + redirecting — never link these):
 *   241282567972567 (Patient Registration Solo)
 *   261862948865072 (standalone NOMA Maternity Enrolment)
 *   222113080569046 (Medical Services Enquiry)
 */

export const INTAKE_FORM_URL = "https://form.jotform.com/230362510790550";

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
