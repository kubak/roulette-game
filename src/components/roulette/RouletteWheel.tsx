import { useState, useEffect } from "react";
import { ReactComponent as Wheel } from "./roulette.svg";

type Props = {
  className?: string;
  isWheelSpinning: boolean;
  setIsWheelSpinning: (val: boolean) => void;
  setOutcome: (val: number) => void;
};

const RouletteWheel = ({
  className = "",
  isWheelSpinning,
  setIsWheelSpinning,
  setOutcome,
}: Props) => {
  const [totalRotation, setTotalRotation] = useState(0);

  const calculateRandomSpinValue = () => {
    const baseRotation = 5000;
    const randomRotation = Math.random() * 360;
    return baseRotation + randomRotation;
  };

  const reduceFullSpins = (input: number) => {
    return input % 360;
  };

  useEffect(() => {
    if (isWheelSpinning) {
      setTotalRotation((prevVal) => prevVal + calculateRandomSpinValue());
    }
  }, [isWheelSpinning]);

  useEffect(() => {
    if (!isWheelSpinning) {
      setOutcome(totalRotation);
    }
  }, [isWheelSpinning, setOutcome, totalRotation]);

  return (
    <div className="overflow-hidden h-[352px] w-[352px]">
      <div
        className={`${
          className ? className + " " : ""
        }w-[350px] flex justify-center items-center`}
        style={
          isWheelSpinning
            ? {
                transform: `rotate(${totalRotation}deg)`,
                transition: "7s all cubic-bezier(0.165, 0.840, 0.440, 1.000)",
              }
            : { transform: `rotate(${totalRotation}deg)` }
        }
        onTransitionEnd={() => {
          setIsWheelSpinning(false);
          setTotalRotation(reduceFullSpins(totalRotation));
        }}
      >
        <Wheel />
      </div>
    </div>
  );
};

export default RouletteWheel;
