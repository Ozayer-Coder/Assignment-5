import { use } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

export interface TechnologiesProps {
  technologyPromise: Promise<ITechnology[]>;
}

export default function Technologies({ technologyPromise }: TechnologiesProps) {
  const technologies = use(technologyPromise);

  return (
    <div className="container mx-auto mt-28 flex flex-col gap-10">
      <div>
        <h2 className="font-extrabold text-4xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899]  to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[16px] text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {technologies.map((technology: ITechnology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
}
