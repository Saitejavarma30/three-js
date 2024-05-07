import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

interface ButtonProps {
  type?: "outline" | "filled";
  title: string;
  handleClick?: () => void;
  customStyles?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  type,
  title,
  handleClick,
  customStyles,
}) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    <button
      style={generateStyle(type)}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
