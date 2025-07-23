import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="h-fit  pb-4 md:pb-4 ">
      <h1 className="text-center text-2xl md:text-4xl font-bold p-2 [text-shadow:4px_6px_10px_rgba(145,44,240,1)] text-white my-6">
        CONTACT ME
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="border border-white m-auto text-white flex flex-col md:w-1/3 text-xl md:text-2xl p-4 rounded-lg shadow-xl/30"
      >
        <span className="my-1">
          Name
          <input
            name="user_name"
            className="border border-white w-full my-1 rounded-lg"
            type="text"
            required
          />
        </span>
        <span className="my-1">
          Email
          <input
            name="user_email"
            className="border border-white w-full my-1 rounded-lg"
            type="email"
            required
          />
        </span>
        <span className="my-1">
          Message
          <textarea
            name="message"
            rows={6}
            className="border border-white w-full my-1 rounded-lg"
            required
          ></textarea>
        </span>
        <button
          type="submit"
          className="w-full rounded border border-purple-900 bg-purple-600 text-white hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
