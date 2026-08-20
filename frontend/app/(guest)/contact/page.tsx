"use client";

import Container from "@/components/common/Container";
import ContactHeader from "@/components/features/guest/contact/ContactHeader";
import ContactInfos from "@/components/features/guest/contact/ContactInfos";
import ContactForm from "@/components/features/guest/contact/ContactForm";

export default function ContactPage() {
  return (
    <Container>
      <ContactHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 my-8 gap-6">
        <ContactInfos />
        <ContactForm />
      </div>

    </Container>
  );
}
