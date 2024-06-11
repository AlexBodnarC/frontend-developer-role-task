import { useRadioSelect } from "../../hooks/useRadioSelect";
import { RADIO_SELECTION_BUTTONS } from "./constants";

export const RadioSelectionButtons = () => {
  const { selectedOption, handleRadioChange, handleLabelClick } =
    useRadioSelect();

  return (
    <div className="flex flex-col gap-2 ">
      {RADIO_SELECTION_BUTTONS.map((button) => {
        return (
          <div
            key={button.value}
            className="flex items-center ps-4 border border-gray-200 rounded w-[200px]"
          >
            <input
              type="radio"
              name="option"
              value={button.value}
              checked={selectedOption === button.value}
              onChange={handleRadioChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
            />
            <label
              onClick={handleLabelClick}
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900"
            >
              {button.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};
