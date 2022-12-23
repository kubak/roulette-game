type Props = {
  winningNumber: number;
};

const applyColorClass = (number: number) => {
  if (number > 7) {
    return "text-[#2E332D]";
  }
  if (number > 0) {
    return "text-[#DE1A1A]";
  }
  return "text-[#23B216]";
};

const WinningNumber = ({ winningNumber }: Props) => {
  return (
    <p
      className={`absolute top-1/4 mt-10 font-bold text-8xl ${applyColorClass(
        winningNumber
      )}`}
    >
      {winningNumber}
    </p>
  );
};

export default WinningNumber;
