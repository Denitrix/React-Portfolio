import { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

export default function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, or message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    } else if (name === "") {
      setErrorMessage("Name is required");
    } else if (message === "") {
      setErrorMessage("Message is required");
    } else {
      alert(`Thank you for submitting your message.`);
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setName("");
      setMessage("");
      setEmail("");
    }
  };

  return (
    <div className="container col-6 m-0">
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name:
          </label>
          <input
            value={name}
            name="name"
            id="name"
            onChange={handleInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address:
          </label>
          <input
            value={email}
            name="email"
            id="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">
            Message:
          </label>
          <textarea
            value={message}
            name="message"
            id="message"
            onChange={handleInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
