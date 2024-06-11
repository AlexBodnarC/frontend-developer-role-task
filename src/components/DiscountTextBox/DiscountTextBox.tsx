import { useDiscountTextBox } from "../../hooks/useDiscountTextBox";
import { Button } from "../Button/Button";

export const DiscountTextBox = () => {
  const { discountInputRef, handleDiscountChange, generateRandomDiscount } =
    useDiscountTextBox();

  return (
    <div className="flex flex-col gap-4">
      <input
        ref={discountInputRef}
        type="text"
        placeholder="Enter discount code"
        onChange={handleDiscountChange}
        className="block w-[200px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
      />
      <Button
        onClick={generateRandomDiscount}
        text="Generate Random Discount"
      />
    </div>
  );
};
