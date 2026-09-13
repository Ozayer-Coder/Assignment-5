import { FaStar } from "react-icons/fa";
import type { ITechnology } from "../types/technology";

export interface TechnologyCardProps {
  technology: ITechnology;
  handleAddToStack: (technology: ITechnology) => void;
  isAdded: boolean;
}

export default function TechnologyCard({
  technology,
  handleAddToStack,
  isAdded,
}: TechnologyCardProps) {
  return (
    <div className="flex flex-col p-5 mx-3 border rounded-2xl border-[#F1F5F9]">
      <div className="flex flex-col gap-1.5 pb-4">
        <div className="flex justify-between ">
          <img className="max-h-12" src={technology.icon} alt="" />
          <div className="badge badge-soft badge-primary">
            {technology.badge}
          </div>
        </div>
        <h2 className="pt-1.5 font-bold text-lg text-[#0F172A]">
          {technology.name}
        </h2>
        <p className="text-[12px] text-[#64748B]">{technology.description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center ">
          <div className="badge badge-ghost text-[#475569] text-[11px]">
            {technology.category}
          </div>
          <p className="text-[#64748B] font-medium text-[11px]">
            {technology.difficulty}
          </p>
          <p className="flex items-center gap-1">
            <FaStar className="text-[#FBBF24]" />
            {technology.rating}
          </p>
        </div>
        <button
          onClick={() => handleAddToStack(technology)}
          className={`btn ${isAdded ? "btn  text-pink-700" : " rounded-lg bg-[#0A0F1D] text-white"} p-2.5 font-medium text-[12px]`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}
