import type { Metadata } from 'next';
import LegalPage from '@/components/layout/LegalPage';
import { site } from '@/content/site';

export const metadata: Metadata = { title: 'Privacy Policy', alternates: { canonical: '/privacy' } };

// Plain-language notice covering what this site actually does today.
// Have it reviewed by a lawyer for your jurisdiction before launch.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="16 October 2026">
      <p>
        This policy explains what information {site.name} collects through this website and how we use it.{' '}
        {site.name} is currently in early access; this website is used to collect early-access requests.
      </p>

      <h2>What we collect</h2>
      <p>When you submit the early-access form, we collect:</p>
      <ul>
        <li>your name, work email address and company name</li>
        <li>your team size</li>
        <li>anything you choose to write in the message field</li>
      </ul>
      <p>We do not use advertising trackers or analytics cookies on this website.</p>

      <h2>How we use it</h2>
      <p>
        We use your details only to contact you about early access to {site.name} and to understand which
        features to build first. We do not sell your information or share it for marketing.
      </p>

      <h2>Service providers</h2>
      <p>
        We rely on a hosting provider to run this website and an email provider to deliver form submissions
        to our team. They process your information only on our behalf.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep your details only for as long as needed to manage early access. You can ask us to delete them
        at any time.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask to see, correct or delete the information we hold about you
        {site.email ? (
          <>
            {' '}by emailing <a href={`mailto:${site.email}`}>{site.email}</a>.
          </>
        ) : (
          <> by replying to any email we send you.</>
        )}
      </p>

      <h2>Changes</h2>
      <p>If we change this policy, we will update the date at the top of this page.</p>
    </LegalPage>
  );
}
