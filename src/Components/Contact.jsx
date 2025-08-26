import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({isDarkMode}) => {
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
    <div className={`h-fit  pb-4 ${!isDarkMode && 'bg-white'} `}>
      <h1 className={`text-center text-2xl md:text-4xl font-bold p-2  [text-shadow:4px_6px_10px_rgba(145,44,240,1)] ${isDarkMode?'text-white':'text-purple-900'} md:p-6 `}>
        CONTACT ME
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`border  m-auto ${isDarkMode?'text-white border-white':'text-black border-black border-2 '}  flex flex-col md:w-1/3 text-xl md:text-2xl p-4 rounded-lg shadow-xl/30`}
      >
        <span className="my-1 font-bold">
          Name
           </span>
          <input
            name="user_name"
            className={`border ${isDarkMode?'border-white':'border-black'}  w-full my-1 rounded-lg px-1`}
            type="text"
            required
          />
        <span className="my-1 font-bold">
          Email
          </span>
          <input
            name="user_email"
            className={`border ${isDarkMode?'border-white':'border-black'} w-full my-1 rounded-lg px-1`}
            type="email"
            required
          />
        <span className="my-1 font-bold">
          Message
          </span>
          <textarea
            name="message"
            rows={6}
            className={`border ${isDarkMode?'border-white':'border-black'}  w-full my-1 rounded-lg px-1`}
            required
          ></textarea>
        <button
          type="submit"
          className={`w-full rounded border border-purple-900 bg-purple-600 ${isDarkMode?'text-white':'text-black'}  hover:bg-purple-700`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
