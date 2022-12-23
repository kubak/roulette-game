import { useState, useEffect } from "react";
import RouletteWheel from "./RouletteWheel";
import Button from "../ui/Button";
import WinningNumber from "./WinningNumber";

const winConditions = [
  { outcome: 0, winningNum: null },
  { outcome: 1, winningNum: 10 },
  { outcome: 2, winningNum: 3 },
  { outcome: 3, winningNum: 9 },
  { outcome: 4, winningNum: 2 },
  { outcome: 5, winningNum: 8 },
  { outcome: 6, winningNum: 1 },
  { outcome: 7, winningNum: 14 },
  { outcome: 8, winningNum: 7 },
  { outcome: 9, winningNum: 13 },
  { outcome: 10, winningNum: 6 },
  { outcome: 11, winningNum: 12 },
  { outcome: 12, winningNum: 5 },
  { outcome: 13, winningNum: 11 },
  { outcome: 14, winningNum: 0 },
  { outcome: 15, winningNum: 4 },
];

const outcomeToPositionOnTheWheel = (entry: number) => {
  const positionsOnTheWheel = 24;
  return Math.ceil(entry / positionsOnTheWheel);
};

const determineWinningNumber = (outcome: number) => {
  const positionOnTheWheel = outcomeToPositionOnTheWheel(outcome);
  const winningEntry = winConditions.find(
    (entry) => positionOnTheWheel === entry.outcome
  );
  return winningEntry!.winningNum;
};

const WheelComplete = () => {
  const [isWheelSpinning, setIsWheelSpinning] = useState(false);
  const [winningNumber, setWinningNumber] = useState<number | null>(null);
  const [outcome, setOutcome] = useState<number>(0);

  useEffect(() => {
    setWinningNumber(determineWinningNumber(outcome));
  }, [outcome]);

  const handleClick = () => {
    setIsWheelSpinning(true);
  };
  return (
    <div className="flex items-end justify-center gap-10 relative">
      <div className="flex flex-col items-center relative">
        <div className="pb-1 border-solid border-t-[#2E332D] border-t-[20px] border-x-transparent border-x-8 border-b-0"></div>
        <RouletteWheel
          isWheelSpinning={isWheelSpinning}
          setIsWheelSpinning={setIsWheelSpinning}
          setOutcome={setOutcome}
        />
        {(winningNumber === 0 || winningNumber) && (
          <WinningNumber winningNumber={winningNumber} />
        )}
      </div>
      <Button
        onClick={handleClick}
        text="spin the wheel"
        className="text-2xl text-white disabled:bg-[#cecece]"
        disabled={isWheelSpinning}
      />
    </div>
  );
};

export default WheelComplete;
