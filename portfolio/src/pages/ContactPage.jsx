import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="text-bg-primary container-fluid">
      <h3 className="m-3 ms-3 fs-3">Contact Me</h3>
      <div className="row container-fluid ms-2 me-2">
        <p className="from-bottom delay-1">
          If you'd like to get in touch with me you can email me at{" "}
          <a href="mailto:alexmajors0613@gmail.com">alexmajors0613@gmail.com</a>
          . You can also fill out the form below, and I'll get back to you as
          soon as I can.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
