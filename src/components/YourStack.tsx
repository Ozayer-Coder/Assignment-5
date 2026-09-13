import type { ITechnology } from "../types/technology";
import YoursStackCard from "./YoursStackCard";

interface IYourStackProps {
  selected: ITechnology[];
  handleRemoveFromStack: (id: string) => void;
}
const YourStack = ({ selected, handleRemoveFromStack }: IYourStackProps) => {
  return (
    <div className="border border-[#F1F5F9] rounded-2xl p-5">
      <h2 className="text-[20px] font-bold">Your Stack</h2>
      <p className="text-[12px] text-[#94A3B8]">
        
        {selected.length === 0
          ? "No technologies selected yet."
          : `${selected.length} Technology Selected`}
        
      </p>
      <YoursStackCard selected={selected} handleRemoveFromStack={handleRemoveFromStack}></YoursStackCard>
    </div>
  );
};

export default YourStack;
