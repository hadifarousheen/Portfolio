import { useEffect, useState, useRef } from "react";
import {
  imagelinks,
  languageslinks,
  frameworklinks,
} from "../constants/imageurls";

const Skills = () => {
  const myDivRef = useRef(null);

  const [cards, setCards] = useState([]);
  const [langcards, setLangCards] = useState([]);
  const [frameworkcards, setframeworkcards] = useState([]);
  const[frameworktext,setframeworktext]=useState("");
  const[languagetext,setlanguagetext]=useState("");
  const[technologytext,settechnologytext]=useState("");
  useEffect(() => {
    let interval1, interval2, interval3,frameworktimer,languagetimer,technologiestimer;
    let i = 0;
    let j = 0;
    let k = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            interval1 = setInterval(() => {
              setCards((prev) => {
                if (i < imagelinks.length) {
                  const newCard = imagelinks[i];
                  i++;
                  return [...prev, newCard];
                } else {
                  clearInterval(interval1);
                  return prev;
                }
              });
            }, 1000);

            interval2 = setInterval(() => {
              setLangCards((prev) => {
                if (j < languageslinks.length) {
                  const newCard = languageslinks[j];
                  j++;
                  return [...prev, newCard];
                } else {
                  clearInterval(interval2);
                  return prev;
                }
              });
            }, 1000);

            interval3 = setInterval(() => {
              setframeworkcards((prev) => {
                if (k < frameworklinks.length) {
                  const newCard = frameworklinks[k];
                  k++;
                  return [...prev, newCard];
                } else {
                  clearInterval(interval3);
                  return prev;
                }
              });
            }, 1000);
            frameworktimer=setTimeout(()=>{
              setframeworktext("Frameworks");
            },1000);
            languagetimer=setTimeout(()=>{
              setlanguagetext("Languages")
            },1000);
            technologiestimer=setTimeout(()=>{
              settechnologytext("Technologies")
            },1000)
          } else {
            console.log("Div is out of view");
            
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (myDivRef.current) {
      observer.observe(myDivRef.current);
    }

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(frameworktimer);
      clearInterval(languagetimer);
      clearInterval(technologiestimer)
      if (myDivRef.current) {
        observer.unobserve(myDivRef.current);
      }
    };
  }, []); 

  return (
    <div ref={myDivRef} className="h-fit md:h-screen ">
      <h1 className="text-center text-2xl md:text-4xl font-bold p-2 [text-shadow:4px_6px_10px_rgba(145,44,240,1)] text-white">
        SKILLS
      </h1>

      <div className=" flex flex-wrap w-2/3  gap-5 m-auto p-4">
        <h2 className="text-lg md:text-2xl font-bold text-center my-auto mr-auto [text-shadow:4px_6px_10px_rgba(145,44,240,1)]">
          {technologytext}
        </h2>
        {cards.map((card) => (
          <img className="h-20 w-20 md:h-40 md:w-40 rounded-lg hover:rotate-45" src={card} />
        ))}
      </div>

      <div className=" flex flex-wrap w-2/3 items-center justify-center gap-5 m-auto p-4">
        <h2 className="text-lg md:text-2xl font-bold my-auto text-center mr-auto [text-shadow:4px_6px_10px_rgba(145,44,240,1)]">
     {languagetext}
        </h2>
        {langcards.map((card) => (
          <img className="h-20 w-20 md:h-40 md:w-40 rounded-lg hover:rotate-45" src={card} />
        ))}
      </div>

      <div className="flex flex-wrap  w-2/3  m-auto gap-5 items-center justify-center p-4  ">
        <h2 className="text-lg md:text-2xl font-bold my-auto text-center mr-auto [text-shadow:4px_6px_10px_rgba(145,44,240,1)]">
          {frameworktext}
        </h2>

        {frameworkcards.map((card) => (
          <img className="h-20 w-20 md:h-40 md:w-40 rounded-lg hover:rotate-45" src={card} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
