import type { Metadata } from "next";
import { site } from "../_content/home";
import { LegalPage, LegalSection } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | The PM Lab",
  description: "How The PM Lab collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains what personal information ${site.name} collects, how we use it and the choices you have.`}
    >
      <LegalSection title="1. Information we collect">
        <ul>
          <li>
            <strong>WhatsApp updates form:</strong> your name, WhatsApp number and whether you are a student,
            graduate or working professional.
          </li>
          <li>
            <strong>Enrollment:</strong> details you enter on the payment page, such as your name, email and phone
            number.
          </li>
          <li>
            <strong>Messages:</strong> anything you share when you contact us by WhatsApp, email or phone.
          </li>
        </ul>
        <p>
          We do not collect or store your card, UPI or bank details. Payments are handled entirely by our payment
          partner, Cashfree Payments.
        </p>
      </LegalSection>

      <LegalSection title="2. How we use your information">
        <ul>
          <li>To confirm your enrollment and deliver the course.</li>
          <li>To send class schedules, joining links and course updates.</li>
          <li>To send daily WhatsApp updates, only if you have opted in.</li>
          <li>To answer your questions and provide support.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. WhatsApp updates">
        <p>
          If you sign up for daily updates, we will message you on WhatsApp. You can stop these messages at any
          time by replying STOP or by contacting us.
        </p>
      </LegalSection>

      <LegalSection title="4. Sharing your information">
        <p>We do not sell or rent your personal information. We share it only with services that help us run the course:</p>
        <ul>
          <li>Cashfree Payments, to process your payment;</li>
          <li>WhatsApp, to send you messages;</li>
          <li>Google, where sign-up details are stored in Google Sheets.</li>
        </ul>
        <p>We may also share information when required by law.</p>
      </LegalSection>

      <LegalSection title="5. How long we keep it">
        <p>
          We keep your information only as long as needed for the purposes above, or as required by law. You can
          ask us to delete it at any time.
        </p>
      </LegalSection>

      <LegalSection title="6. Your rights">
        <p>
          You can ask us to access, correct or delete your personal information, or to stop sending you messages.
          Email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">{site.email}</a>{" "}
          and we will respond as soon as possible.
        </p>
      </LegalSection>

      <LegalSection title="7. Changes to this policy">
        <p>We may update this policy from time to time. The latest version will always be available on this page.</p>
      </LegalSection>
    </LegalPage>
  );
}
