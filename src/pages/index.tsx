import GithubCard from "@/components/GithubCard";
import IntroCard from "@/components/IntroCard";
import MailCard from "@/components/MailCard";
import NavBar from "@/components/NavBar";
import SpotifyCard from "@/components/SpotifyCard";
import TimeCard from "@/components/TimeCard";
import ToggleCard from "@/components/ToggleCard";
import TwitterCard from "@/components/TwitterCard";
import { useState } from "react";

function Home() {
  const [section, setSection] = useState("all");

  return (
    <div className="flex flex-col m-6 mb-10 font-dmSans">
      <NavBar setSection={setSection} />
      <div
        className="grid grid-cols-3 gap-2 md:grid-cols-4 
			md:gap-4 mt-5 container mx-auto xl:px-20"
      >
        <IntroCard section={section} />
        <TwitterCard section={section} />
        <ToggleCard section={section} />
        <GithubCard section={section} />
        <SpotifyCard section={section} />
        <MailCard section={section} />
        <TimeCard section={section} />
      </div>
    </div>
  );
}

export default Home;
