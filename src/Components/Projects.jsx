const Projects = () => {
  return (
    <div className="h-screen ">
      <h1 className="text-center  text-3xl font-bold p-2 [text-shadow:4px_6px_10px_rgba(145,44,240,1)] text-white my-8">
        PROJECTS
      </h1>
      <div className=" w-3/4 m-auto flex my-4 rounded-lg shadow-xl/30 shadow-white">
        <div className="rounded-lg shadow-xl/30 shadow-white">
          <iframe
            className="rounded-lg h-full"
            width="560"
            src="https://www.youtube.com/embed/MPRUQB5KEd4?si=6Xbn579X_494kRmY&loop=1&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6 shadow-xl/30 shadow-white hover:scale-105 rounded-lg">
          <h1 className="text-3xl text-purple-700 font-bold">CookGPT</h1>
          <p className="text-2xl">
            Developed an AI-powered recipe generator web application that
            suggests dishes based on keywords like ”spicy Chinese” or ”Indian
            chicken”. Displays recipes in both video and text formats.
            Integrated Google Firebase for user authentication and Groq API for
            natural language search functionality
          </p>
          <button className="text-xl border border-purple-950 bg-purple-600 rounded-lg p-1 mt-2 w-1/2 shadow-md shadow-purple-600">
            Code
          </button>
          <button className="text-xl border border-purple-950 bg-purple-600 rounded-lg p-1 mt-2 w-1/2 shadow-md shadow-purple-600">
            Live
          </button>
        </div>
      </div>
      <div className=" w-3/4 m-auto flex my-4  rounded-lg shadow-xl/30 shadow-white">
        <div className="rounded-lg shadow-xl/30 shadow-white">
          <iframe
            className="rounded-lg h-full"
            width="560"
            src="https://www.youtube.com/embed/x2XirnlZF4o?si=bsiWY4srUBa3tQZT&loop=1&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6 shadow-xl/30 shadow-white hover:scale-105 rounded-lg">
          <h1 className="text-3xl text-purple-700 font-bold">Pokemon API</h1>
          <p className="text-2xl">
            Built a React application that fetches data from the Pok´emon API
            and displays it interactively.Implemented features like search,
            sort, filter by type, random Pok´ emon generator, add to favorites,
            and comparison between Pok´emon.
          </p>
          <button className="text-xl border border-purple-950 bg-purple-600 rounded-lg p-1 mt-2 w-1/2 shadow-md shadow-purple-600">
            Code
          </button>
          <button className="text-xl border border-purple-950 bg-purple-600 rounded-lg p-1 mt-2 w-1/2 shadow-md shadow-purple-600">
            Live
          </button>
        </div>
      </div>
      <div className=" w-3/4 m-auto flex my-4  rounded-lg shadow-xl/30 shadow-white">
        <div className="rounded-lg shadow-xl/30 shadow-white">
          <iframe
            className="rounded-lg h-full"
            width="560"
            src="https://www.youtube.com/embed/GvLaAzLkXTU?si=MGEpVCZi96qqyrsk&loop=1&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6 shadow-xl/30 shadow-white hover:scale-105 rounded-lg">
          <h1 className="text-3xl text-purple-700 font-bold">
            JITS Library Books Tracker
          </h1>
          <p className="text-2xl">
            Built a web application to help students track books borrowed from
            the library and avoid late submission penalties.Implemented the
            Notification API to send timely reminders to students about book
            return deadlines.
          </p>
          <button className="text-xl border border-purple-950 bg-purple-600 rounded-lg p-1 mt-2 w-1/2 shadow-md shadow-purple-600">
            Code
          </button>
          <button className="text-xl border border-purple-950 bg-purple-600 rounded-lg p-1 mt-2 w-1/2 shadow-md shadow-purple-600">
            Live
          </button>
        </div>
      </div>
      <div className=" w-3/4 m-auto flex my-4  rounded-lg shadow-xl/30 shadow-white">
        <div className="rounded-lg shadow-xl/30 shadow-white">
          <iframe
            className="rounded-lg h-full"
            width="560"
            src="https://www.youtube.com/embed/QRhv7NM9Rew?si=yIWvOsBbXtExBNqU?loop=1&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-6 shadow-xl/30 shadow-white hover:scale-105 rounded-lg">
          <h1 className="text-3xl text-purple-700 font-bold">
            Rock-Paper-Scissor-Game
          </h1>
          <p className="text-2xl">
            Developed an interactive browser-based Rock-Paper-Scissors game with
            dynamic score tracking and real-time result display.Implemented
            responsive UI using CSS and DOM manipulation to handle user inputs
            and game logic in JavaScript.
          </p>
          <button className="text-xl border border-purple-950 bg-purple-600 rounded-lg p-1 mt-2 w-1/2 shadow-md shadow-purple-600">
            Code
          </button>
          <button className="text-xl border border-purple-950 bg-purple-600 rounded-lg p-1 mt-2 w-1/2 shadow-md shadow-purple-600">
            Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
