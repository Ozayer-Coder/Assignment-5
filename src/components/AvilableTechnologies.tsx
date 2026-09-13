import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

export interface AvilableTechnologiesProps {
  technologies: ITechnology[];
  
  handleAddToStack: (technology: ITechnology) => void;
}

export default function AvilableTechnologies({
  technologies,
  handleAddToStack,
}: AvilableTechnologiesProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {technologies.map((technology) => {
        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            handleAddToStack={handleAddToStack}
          ></TechnologyCard>
        );
      })}
    </div>
  );
}
