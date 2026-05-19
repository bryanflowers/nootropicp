import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy policy",
  description: "Privacy policy for Nootropic Peptides — what data we collect, what we don't, and how we handle it.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <Container>
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Legal", href: "/legal/disclaimer" }, { label: "Privacy" }]} />
      <Section eyebrow="Legal" title="Privacy policy">
        <div className="prose max-w-3xl text-slate-700 dark:prose-invert dark:text-slate-300">
          <p>
            This site collects only the minimum data needed to operate. We do not run third-party
            advertising trackers, we do not sell or share personal data, and we do not require an
            account to read the content.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Server logs.</strong> Standard server-side request logs (IP, user-agent,
              requested path, timestamp) for security and capacity monitoring. Retained for a short
              period and not used for marketing.
            </li>
            <li>
              <strong>Newsletter subscription (optional).</strong> If you choose to subscribe, we
              store your email address in our Supabase database for the sole purpose of sending the
              newsletter. You can unsubscribe at any time via the link in any sent email.
            </li>
          </ul>

          <h2>Outbound supplier-link logging</h2>
          <p>
            When you click one of the supplier links on a peptide page (the "Sourcing for laboratory
            research" cards linking to PeptideBarn.co.uk or PeptideAuthority.co.uk), your click
            passes through an internal redirect on this site before reaching the supplier. The
            redirect records a row in our analytics database with: which supplier was clicked,
            which peptide page the click came from, the browser family (Chrome, Firefox, etc),
            and a one-way hash of your IP address combined with a daily-rotating salt. The raw IP
            is not stored; the hash is not linkable across days. We use these counts to understand
            which peptide pages drive research-sourcing interest. The redirect then forwards you
            to the supplier with UTM parameters identifying our site as the referrer. If you would
            rather not be counted, do not click the supplier links — the supplier domains can be
            reached directly from your browser without going through us.
          </p>

          <h2>What we don't collect</h2>
          <ul>
            <li>No third-party advertising trackers or pixels.</li>
            <li>No cross-site tracking cookies.</li>
            <li>No personally identifying analytics beyond aggregate page-view counts.</li>
            <li>No raw IP addresses; the supplier-click logger stores only a salted hash.</li>
          </ul>

          <h2>Your rights (UK GDPR)</h2>
          <p>
            UK residents have the right to access, correct, or delete personal data held about them.
            Newsletter subscribers can unsubscribe and request data deletion at any time. Contact
            requests can be sent via the contact details on the site.
          </p>

          <h2>Cookies</h2>
          <p>
            The site uses a small number of strictly functional cookies (theme preference,
            disclaimer-banner dismissal). It does not set any advertising or cross-site tracking
            cookies.
          </p>
        </div>
      </Section>
    </Container>
  );
}
