"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import BearLottie from "@/components/lotties/bearLottie.json";

export const PlayerWrapper = () => {
  return (
    <div className="w-full text-center space-y-3 h-full">
      <h1 className="text-4xl text-[#aa2f2f] py-4">
        Happy National Girlfriend Day, My Love.
      </h1>
      <h3 className="inline text-3xl">&#128048;</h3>
      <h3 className="inline text-3xl">&#128158;</h3>
      <h3 className="inline text-3xl">&#128059;</h3>
      <Player
        autoplay
        loop
        src={BearLottie}
        className="max-w-[20rem] bg-red h-[20rem]"
      />
    </div>
  );
};
