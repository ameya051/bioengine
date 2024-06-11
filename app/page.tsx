import BlurIn from "@/components/magicui/blur-in";
import GitHubBtn from "@/components/home/cta/GitHubBtn";
import { BioProvider } from "@/context/BioContext";
import UserInput from "@/components/home/UserInput";
import Output from "@/components/home/Output";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative grid  grid-cols-1 slg:grid-cols-2 gap-12  px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:p-24">
      <div className="col-span-full group w-full flx flex-col items-center justify-center space-y-2 sm:space-y-4 mb-4 text-center">
        <a
        className="flex items-center justify-center p-4"
          href="https://www.producthunt.com/posts/bioengine?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bioengine"
          target="_blank"
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=462641&theme=dark"
            alt="BioEngine - Forget&#0032;the&#0032;hassle&#0032;of&#0032;brainstorming&#0032;bios&#0044;&#0032;forever&#0046; | Product Hunt"
            // style={{ width: "250px", height: "54px" }}
            width="200"
            height="24"
          />
        </a>
        <GitHubBtn />
        <BlurIn
          duration={0.5}
          className="font-bold text-4xl md:text-5xl slg:text-6xl lg:text-7xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4"
          word="CRAFT THE PERFECT TWITTER BIO IN SECONDS!"
        />
        <BlurIn
          duration={0.5}
          className="text-sm sm:text-base md:text-lg text-accent"
          word="Just answer a few questions, and we'll generate a bio that
          captures who you are."
        />
      </div>
      <BioProvider>
        <UserInput />
        <Output />
      </BioProvider>
    </main>
  );
}
