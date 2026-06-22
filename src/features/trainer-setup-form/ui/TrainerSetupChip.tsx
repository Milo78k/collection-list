type TrainerSetupChipProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: string;
};

export const TrainerSetupChip = ({
  label,
  isActive,
  onClick,
  icon,
}: TrainerSetupChipProps) => {
  return (
    <button
      type="button"
      className={`trainer-setup-form__chip ${
        isActive ? "trainer-setup-form__chip--active" : ""
      }`}
      onClick={onClick}
    >
      {" "}
      {icon && <img src={icon} alt="" />}
      <span>{label}</span>
    </button>
  );
};
