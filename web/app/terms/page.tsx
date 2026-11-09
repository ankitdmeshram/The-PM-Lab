import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../_content/home";
import { LegalPage, LegalSection } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions | The PM Lab",
  description: "Terms and conditions for using The PM Lab website and enrolling in its courses.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={`These terms apply when you use the ${site.name} website or enroll in any of our courses. By using the website or making a payment, you agree to these terms.`}
    >
      <LegalSection title="1. About us">
        <p>
          {site.name} provides live, online project management training. You can reach us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">{site.email}</a>{" "}
          or {site.phone}.
        </p>
      </LegalSection>

      <LegalSection title="2. Enrollment and payment">
        <ul>
          <li>Your enrollment is confirmed only after your payment is successful.</li>
          <li>Payments are processed securely by our payment partner, Cashfree Payments.</li>
          <li>The course fee shown on the website at the time of payment applies to your enrollment.</li>
          <li>
            All fees are non-refundable. See our{" "}
            <Link href="/refund-policy" className="font-semibold text-brand hover:underline">Refund Policy</Link>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Course delivery">
        <ul>
          <li>Classes are delivered live online. You need a stable internet connection and a suitable device.</li>
          <li>
            We may change class dates, timings, instructors or course content when needed. We will inform enrolled
            learners of any important changes in advance.
          </li>
          <li>Joining links and course materials are for your personal use only and must not be shared.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Certificate">
        <p>
          A course completion certificate is issued only to learners who meet the requirements listed on our
          website, including minimum attendance, assignments, the capstone project and the final presentation.
        </p>
      </LegalSection>

      <LegalSection title="5. Your responsibilities">
        <ul>
          <li>Provide accurate information when you sign up or enroll.</li>
          <li>Be respectful to instructors and other learners during classes and in group chats.</li>
          <li>
            Do not record, copy, resell or redistribute our classes, recordings or materials without written
            permission.
          </li>
        </ul>
        <p>We may remove a learner from the course, without a refund, for misconduct or breach of these terms.</p>
      </LegalSection>

      <LegalSection title="6. Intellectual property">
        <p>
          All course content, materials, templates, recordings and website content belong to {site.name} and are
          protected by copyright. You may use them only for your own learning.
        </p>
      </LegalSection>

      <LegalSection title="7. No job guarantee">
        <p>
          Our course is designed to build your project management skills and help you prepare for interviews.
          We do not guarantee employment, interviews, salary levels or any specific career outcome.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of liability">
        <p>
          To the extent permitted by law, {site.name} is not liable for any indirect or consequential loss
          arising from your use of the website or courses. Our total liability is limited to the course fee you
          paid.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to these terms">
        <p>
          We may update these terms from time to time. The latest version will always be available on this page.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing law">
        <p>These terms are governed by the laws of India.</p>
      </LegalSection>
    </LegalPage>
  );
}
