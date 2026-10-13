// Google Forms linked from the site. Change a URL here, not in the pages.
export const INTAKE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSc_ylDI_aMSrqHHN_F4wNT817MIHbhihusGALdWb3JS-HDG9w/viewform';
export const TESTIMONIAL_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSflkxLReqE9nZfEoUxT8tiSxpXME2cXsMWOt-ev6bAQqFjf8w/viewform';

// "Which plan are you considering?" question on the intake form.
// `plan` must match the form's option text exactly.
const PLAN_ENTRY = 'entry.798733617';

export const intakeFormFor = (plan: 'Home Essentials' | 'Home Complete' | 'Home Concierge' | 'Business / Office IT') =>
  `${INTAKE_FORM_URL}?usp=pp_url&${PLAN_ENTRY}=${encodeURIComponent(plan)}`;
