import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="text-bg-primary container-fluid pb-5">
      <h3 className="m-3 ms-3 fs-3">Contact Me</h3>
      <div className="container-fluid ms-2 me-2 justify-content-start">
        <p className="from-bottom delay-1">
          If you'd like to get in touch with me you can email me at{" "}
          <a
            href="mailto:alexmajors0613@gmail.com"
            className="link-secondary link-underline link-underline-opacity"
          >
            alexmajors0613@gmail.com
          </a>
          . You can also fill out the form below, and I'll get back to you as
          soon as I can.
        </p>
        <div className=" row justify-content-start">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
