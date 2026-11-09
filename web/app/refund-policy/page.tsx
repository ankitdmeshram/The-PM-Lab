import type { Metadata } from "next";
import { site } from "../_content/home";
import { LegalPage, LegalSection } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Refund Policy | The PM Lab",
  description: "Refund policy for The PM Lab project management course.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro={`Please read this policy carefully before enrolling in a course offered by ${site.name}.`}
    >
      <LegalSection title="1. No refunds">
        <p>
          <strong>All course fees paid to {site.name} are non-refundable.</strong> Once your payment is
          successful, we do not offer a refund, in full or in part, for any reason.
        </p>
        <p>This includes, but is not limited to, situations where you:</p>
        <ul>
          <li>change your mind after enrolling;</li>
          <li>miss classes or are unable to attend the course;</li>
          <li>do not complete the course, assignments or capstone project;</li>
          <li>do not meet the requirements for the course completion certificate.</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Before you enroll">
        <p>
          We encourage you to review the curriculum, schedule and course details on our website, and to contact
          us with any questions, before you make a payment. By completing your payment, you confirm that you
          have read and accepted this Refund Policy.
        </p>
      </LegalSection>

      <LegalSection title="3. Duplicate or failed payments">
        <p>
          If you were charged more than once for the same enrollment, or money was deducted but your payment
          failed, contact us with your payment details. Once verified, the extra or failed amount will be
          returned to your original payment method, subject to the payment gateway&apos;s processing time.
        </p>
      </LegalSection>

      <LegalSection title="4. Contact us">
        <p>
          For questions about this policy, email us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">{site.email}</a>{" "}
          or call {site.phone}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
