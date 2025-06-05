const Contact = () => {
  return (
    <div className="h-screen pb-4  mt-[80%] ">
      <h1 className="text-center  text-3xl font-bold p-2 [text-shadow:4px_6px_10px_rgba(145,44,240,1)] text-white my-6">
        CONTACT ME
      </h1>
      <form className="border border-white m-auto text-white flex flex-col  w-1/3 text-2xl p-4 rounded-lg shadow-xl/30  ">
        <span className="my-1">
          Name <input className="border border-white w-full my-1" type="text" />
        </span>

        <span className="my-1">
          {" "}
          Email{" "}
          <input className="border border-white w-full my-1" type="email" />
        </span>
        <span className="my-1">
          Message{" "}
          <textarea
            rows={6}
            className="border border-white w-full my-1"
          ></textarea>
        </span>
        <button className="w-full rounded border border-purple-900 bg-purple-600 text-white">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
