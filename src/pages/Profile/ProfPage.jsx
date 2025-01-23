import Skills from "../Profile/Skills";
import pics2 from "../../assets/images/pics2.jpg";

function ProfPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="h-screen w-screen bg-gradient-to-br from-black to-purple-950 text-white flex flex-col-reverse gap-12 justify-center items-center lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-semibold">Hello✌️</h1>
          <h2 className="text-6xl font-bold">I'm Abiodun</h2>
          <p>And I'm a passionate developer 😉</p>
        </div>
        <div>
          <img
            src={pics2}
            alt="Abiodun's Profile Picture"
            className="w-80 h-80 rounded-full border-white"
          />
        </div>
      </div>

      
      <div className="w-full h-screen bg-gradient-to-bl from-black to-purple-950 text-white">
        <h1 className="text-4xl font-semibold text-center py-8 ">My Skills</h1>
        <div className="flex gap-8 flex-wrap justify-center items-center py-3">
          <Skills skill="HTML" />
          <Skills skill="CSS" />
          <Skills skill="JavaScript" />
          <Skills skill="Tailwind" />
          <Skills skill="Bootstrap" />
          <Skills skill="WordPress" />
        </div>
      </div>
    </main>
  );
}

export default ProfPage;
