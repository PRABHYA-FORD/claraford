import type { Metadata } from 'next';
import LegalPage from '@/components/layout/LegalPage';
import { site } from '@/content/site';

export const metadata: Metadata = { title: 'Terms of Use', alternates: { canonical: '/terms' } };

// Plain-language terms for a pre-launch website.
// Have them reviewed by a lawyer for your jurisdiction before launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="16 October 2026">
      <p>By using this website you agree to these terms.</p>

      <h2>Pre-release product</h2>
      <p>
        {site.name} is in early access. Features, channels and timelines described on this website are
        planned and may change. Joining the early-access list does not guarantee access by a specific date.
      </p>

      <h2>Pricing</h2>
      <p>
        Early access is free during the beta. We will announce pricing before public launch, and we will not
        charge you without your explicit agreement.
      </p>

      <h2>Use of this website</h2>
      <p>
        Please do not misuse this website, for example by submitting false information, attempting to disrupt
        it, or sending automated requests.
      </p>

      <h2>No warranty</h2>
      <p>
        This website is provided “as is”. To the extent permitted by law, we are not liable for any loss arising
        from your use of it.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms. The date at the top of this page shows when they last changed.</p>
    </LegalPage>
  );
}
