// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_USER_ID"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           console.log(error.text);
//           alert("Failed to send message, please try again.");
//         }
//       );

//     e.target.reset();
//   }
//   return (
//     <div className="h-screen pb-4  mt-[80%] ">
//       <h1 className="text-center  text-3xl font-bold p-2 [text-shadow:4px_6px_10px_rgba(145,44,240,1)] text-white my-6">
//         CONTACT ME
//       </h1>
//       <form className="border border-white m-auto text-white flex flex-col  w-1/3 text-2xl p-4 rounded-lg shadow-xl/30  ">
//         <span className="my-1">
//           Name <input className="border border-white w-full my-1 rounded-lg" type="text" />
//         </span>

//         <span className="my-1">
//           {" "}
//           Email{" "}
//           <input className="border border-white w-full my-1 rounded-lg" type="email" />
//         </span>
//         <span className="my-1">
//           Message{" "}
//           <textarea
//             rows={6}
//             className="border border-white w-full my-1 rounded-lg"
//           ></textarea>
//         </span>
//         <button className="w-full rounded border border-purple-900 bg-purple-600 text-white hover:bg-purple-700" onClick={()=>{
//           ContactForm()
//         }}>
//           submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;



import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rluw16z",
        "template_ut4dp48",
        form.current,
        "vWR4jYoTlkSYl5LxM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
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
          Name{" "}
          <input
            name="user_name"
            className="border border-white w-full my-1 rounded-lg"
            type="text"
            required
          />
        </span>

        <span className="my-1">
          Email{" "}
          <input
            name="user_email"
            className="border border-white w-full my-1 rounded-lg"
            type="email"
            required
          />
        </span>

        <span className="my-1">
          Message{" "}
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

