type FilterChipProps = {
  children: React.ReactNode;
  isActive?: boolean;
  isSmall?: boolean;
  iconSrc?: string;
  onClick: () => void;
};

export const FilterChip = ({
  children,
  isActive = false,
  isSmall = false,
  iconSrc,
  onClick,
}: FilterChipProps) => {
  return (
    <button
      type="button"
      className={`sidebar-filters__chip ${
        isActive ? "sidebar-filters__chip--active" : ""
      } ${isSmall ? "sidebar-filters__chip--small" : ""}`}
      onClick={onClick}
    >
      {iconSrc && (
        <img src={iconSrc} alt="" className="sidebar-filters__chip-icon" />
      )}
      {children}
    </button>
  );
};
