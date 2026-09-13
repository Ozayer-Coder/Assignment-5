import { RxCross2 } from "react-icons/rx";
import type { ITechnology } from "../types/technology";

interface IYourStackProps {
  selected: ITechnology[];
}
const YourStack = ({ selected }: IYourStackProps) => {
  return (
    <div>
      <div>
        <h2>Your Stack</h2>
        <p>{selected.length} Technology Selected</p>
        <div>
          {selected.map((selectedItem) => {
            return (
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={selectedItem.icon} alt="" className="max-h-12" />
                  <div className="flex flex-col">
                    <h3 className="text-[10px] font-bold">{selectedItem.name}</h3>
                    <p className="text-[6px] font-bold text-[#94A3B8]">{selectedItem.category}</p>
                  </div>
                </div>
                <button>
                  <RxCross2 className="text-gray-500" />
                </button>
              </div>
            );
          })}
        </div>
        <button>Remove All</button>
      </div>
    </div>
  );
};

export default YourStack;
