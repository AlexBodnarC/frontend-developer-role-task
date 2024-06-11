import { useRef } from "react";

export const useDiscountTextBox = () => {
  const discountInputRef = useRef<HTMLInputElement>(null);

  const handleDiscountChange = () => {
    const value = discountInputRef.current?.value || "";
    validateDiscount(value);
  };

  const generateRandomDiscount = () => {
    const randomDiscount = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();
    discountInputRef.current!.value = randomDiscount;
    validateDiscount(randomDiscount);
  };

  const validateDiscount = (value: string) => {
    const isValidDiscount = /^[A-Z0-9]{8}$/.test(value);
    const inputElement = discountInputRef.current;
    if (inputElement) {
      if (!isValidDiscount) {
        inputElement.style.borderColor = "red";
        inputElement.style.color = "red";
      } else {
        inputElement.style.borderColor = "";
        inputElement.style.color = "";
      }
    }
  };

  return { discountInputRef, handleDiscountChange, generateRandomDiscount };
};
