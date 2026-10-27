// Shared by the contact form (client) and /api/contact (server) so both enforce identical rules.

export const teamSizes = ['1–10', '11–50', '51–200', '201–1,000', '1,000+'] as const;

export type ContactInput = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
};

/** Hidden form field; real visitors never fill it, so any value marks the submission as a bot. */
export const HONEYPOT_FIELD = 'website';

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(input: Partial<Record<keyof ContactInput, unknown>>): ContactErrors {
  const errors: ContactErrors = {};
  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

  const name = str(input.name);
  const email = str(input.email);
  const company = str(input.company);
  const teamSize = str(input.teamSize);
  const message = str(input.message);

  if (name.length < 2) errors.name = 'Please enter your full name.';
  else if (name.length > 100) errors.name = 'Name is too long.';
  if (!EMAIL_RE.test(email) || email.length > 254) errors.email = 'Please enter a valid work email.';
  if (company.length < 2) errors.company = 'Please enter your company name.';
  else if (company.length > 120) errors.company = 'Company name is too long.';
  if (!(teamSizes as readonly string[]).includes(teamSize)) errors.teamSize = 'Please choose a team size.';
  if (message.length > 2000) errors.message = 'Message must be under 2,000 characters.';

  return errors;
}
