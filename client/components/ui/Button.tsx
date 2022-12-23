import { FC } from "react";

type ButtonColor = "red" | "green" | "grey" | "black";

type Props = {
  text: string;
  color?: ButtonColor;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const buttonColor = (color: ButtonColor) => {
  switch (color) {
    case "green":
      return "bg-[#23B216] hover:bg-[#23B216]/90";
    case "red":
      return "bg-[#DE1A1A] hover:bg-[#DE1A1A]/90";
    case "black":
      return "bg-[#2E332D] hover:bg-[#2E332D]/90";
    case "grey":
      return "bg-[#E9E9E9] hover:bg-[#E9E9E9]/90";
  }
};

const Button: FC<Props> = ({
  text,
  color = "green",
  className = "",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`p-4 pt-[14px] pb-[18px] font-bold rounded-2xl shadow-xl
      ${buttonColor(color)}
      ${className}`}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
