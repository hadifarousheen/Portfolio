
const Projects = () => {
  return (
    <div className="h-fit px-2">
      <h1 className="text-center text-2xl md:text-4xl font-bold p-2 [text-shadow:4px_6px_10px_rgba(145,44,240,1)] text-white my-8">
        PROJECTS
      </h1>

   
      <div className="w-full md:w-3/4 md:m-auto flex flex-col md:flex-row gap-4 my-4 md:my-8 rounded-lg shadow-xl/30 shadow-white">
        <div className="rounded-lg shadow-xl/30 shadow-white w-full md:w-1/2 ">
          <div className="aspect-w-16 aspect-h-9 md:aspect-video ">
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.youtube.com/embed/MPRUQB5KEd4?autoplay=1&loop=1&mute=1&playlist=MPRUQB5KEd4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 md:p-6 shadow-xl/30 shadow-white hover:scale-105 rounded-lg">
          <h1 className="text-lg md:text-3xl text-purple-700 font-bold">CookGPT</h1>
          <p className="text-sm md:text-xl mt-2">
            Developed an AI-powered recipe generator that suggests dishes based on keywords like “spicy Chinese” or “Indian chicken”. Shows results in both video and text formats. Uses Firebase for authentication and Groq API for natural language search.
          </p>
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <a href="https://github.com/hadifarousheen/CookGPT" target="_blank" className="text-center md:text-xl border border-purple-950 bg-purple-600 rounded-lg p-2 w-full shadow-sm shadow-purple-600">
              Code
            </a>
            <a href="https://hadifarousheen.github.io/CookGPT/" target="_blank" className="text-center md:text-xl border border-purple-950 bg-purple-600 rounded-lg p-2 w-full shadow-sm shadow-purple-600">
              Live
            </a>
          </div>
        </div>
      </div>

      {[
        {
          title: "Pokemon API",
          video: "x2XirnlZF4o",
          description:
            "Built a React app that fetches data from the Pokémon API and displays it interactively. Includes search, sort, filter, random Pokémon generator, favorites, and comparison.",
          code: "https://github.com/hadifarousheen/Pokemon-API",
          live: "https://hadifarousheen.github.io/Pokemon-API/",
        },
        {
          title: "JITS Library Books Tracker",
          video: "GvLaAzLkXTU",
          description:
            "Web app to track borrowed library books and avoid late fees. Uses Notification API for deadline reminders.",
          code: "https://github.com/hadifarousheen/JITS-Library-Books-Tracker",
          live: "https://hadifarousheen.github.io/JITS-Library-Books-Tracker/",
        },
        {
          title: "Rock-Paper-Scissor-Game",
          video: "QRhv7NM9Rew",
          description:
            "Interactive browser-based Rock-Paper-Scissors game with real-time results and responsive UI using HTML, CSS, and JS.",
          code: "https://github.com/hadifarousheen/Rock-Paper-Scissor-Game",
          live: "https://hadifarousheen.github.io/Rock-Paper-Scissor-Game/",
        },
      ].map((proj, i) => (
        <div
          key={i}
          className="w-full md:w-3/4 md:m-auto flex flex-col md:flex-row gap-4 my-4 rounded-lg shadow-xl/30 shadow-white md:my-8"
        >
          <div className="rounded-lg shadow-xl/30 shadow-white w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 md:aspect-video">
              <iframe
                className="rounded-lg w-full h-full"
                src={`https://www.youtube.com/embed/${proj.video}?autoplay=1&loop=1&mute=1&playlist=${proj.video}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2 md:p-6 shadow-xl/30 shadow-white hover:scale-105 rounded-lg">
            <h1 className="text-lg md:text-3xl text-purple-700 font-bold">{proj.title}</h1>
            <p className="text-sm md:text-xl mt-2">{proj.description}</p>
            <div className="flex flex-col md:flex-row gap-2 mt-4">
              <a href={proj.code} target="_blank" className="text-center md:text-xl border border-purple-950 bg-purple-600 rounded-lg p-2 w-full shadow-sm shadow-purple-600">
                Code
              </a>
              <a href={proj.live} target="_blank" className="text-center md:text-xl border border-purple-950 bg-purple-600 rounded-lg p-2 w-full shadow-sm shadow-purple-600">
                Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

