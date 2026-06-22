type TrainerSetupCounterProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

export const TrainerSetupCounter = ({
  value,
  min = 1,
  max = 50,
  onChange,
}: TrainerSetupCounterProps) => {
  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="trainer-setup-form__counter">
      <button type="button" onClick={decrement} disabled={value <= min}>
        −
      </button>

      <span>{value}</span>

      <button type="button" onClick={increment} disabled={value >= max}>
        +
      </button>
    </div>
  );
};
