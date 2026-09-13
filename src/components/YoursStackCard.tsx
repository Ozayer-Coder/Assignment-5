import { RxCross2 } from "react-icons/rx";
import type { ITechnology } from "../types/technology";
interface IYousrStackCard {
  selected: ITechnology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}
const YoursStackCard = ({
  selected,
  handleRemoveFromStack,
  handleRemoveAll,
}: IYousrStackCard) => {
  if (selected.length === 0) {
    return (
      <div className="p-6 flex justify-center items-center border border-dashed border-[#E2E8F0] rounded-3xl my-4 ">
        <h4 className="text-lg text-[#94A3B8]">Your stack is empty</h4>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1">
      <div className="my-1 flex flex-col gap-2">
        {selected.map((selectedItem) => {
          return (
            <div className="flex justify-between items-center border rounded-2xl border-[#E2E8F0] p-2.5">
              <div className="flex items-center gap-4">
                <img src={selectedItem.icon} alt="" className="max-h-12" />
                <div className="flex flex-col">
                  <h3 className="text-[16px] font-bold">{selectedItem.name}</h3>
                  <p className="text-[10px] font-bold text-[#94A3B8]">
                    {selectedItem.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromStack(selectedItem.id)}
                className="cursor-pointer btn "
              >
                <RxCross2 className="text-gray-500" />
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleRemoveAll}
        className="my-10 border-[0.5px] rounded-lg border-[#ED8C85] text-[20px] font-semibold py-2 text-[#D82C20] btn"
      >
        Remove All
      </button>
    </div>
  );
};

export default YoursStackCard;
