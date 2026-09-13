import { use, useState } from "react";
import type { ITechnology } from "../types/technology";
import YourStack from "./YourStack";
import AvilableTechnologies from "./AvilableTechnologies";
import { Bounce, toast } from "react-toastify";

export interface TechnologiesProps {
  technologyPromise: Promise<ITechnology[]>;
}

export default function Technologies({ technologyPromise }: TechnologiesProps) {
  const technologies = use(technologyPromise);
  const [selected, setSelected] = useState<ITechnology[]>([]);
  const handleRemoveAll = (): void => {
    setSelected([]);
  };
  const handleRemoveFromStack = (id: string): void => {
    const restSelectedItems = selected.filter(
      (item: ITechnology) => item.id !== id,
    );
    setSelected(restSelectedItems);
  };

  const handleAddToStack = (technology: ITechnology): void => {
    const alreadyAdded = selected.find((item) => item.id === technology.id);
    if (alreadyAdded) {
      toast.warn("Already Added", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      return;
    }
    setSelected([...selected, technology]);
  };
  return (
    <div className="container mx-auto mt-28 flex flex-col gap-10">
      <div>
        <h2 className="font-extrabold text-4xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899]  to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-[16px] text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-9">
          <AvilableTechnologies
            technologies={technologies}
            handleAddToStack={handleAddToStack}
            selected={selected}
          ></AvilableTechnologies>
        </div>
        <div className="col-span-3">
          <YourStack
            selected={selected}
            handleRemoveFromStack={handleRemoveFromStack}
            handleRemoveAll={handleRemoveAll}
          ></YourStack>
        </div>
      </div>
    </div>
  );
}
