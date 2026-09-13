import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

export interface AvilableTechnologiesProps {
  technologies: ITechnology[];
  selected: ITechnology[];
  handleAddToStack: (technology: ITechnology) => void;
}

export default function AvilableTechnologies({
  technologies,
  handleAddToStack,
  selected,
}: AvilableTechnologiesProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {technologies.map((technology) => {
        const isAdded = !!selected.find((item) => item.id === technology.id);
        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            handleAddToStack={handleAddToStack}
            isAdded={isAdded}
          ></TechnologyCard>
        );
      })}
    </div>
  );
}
