type FilterGroupProps = {
  title: string;
  children: React.ReactNode;
  showMoreButton?: boolean;
  isExpanded?: boolean;
  onToggleShowMore?: () => void;
};

export const FilterGroup = ({
  title,
  children,
  showMoreButton = false,
  isExpanded = false,
  onToggleShowMore,
}: FilterGroupProps) => {
  return (
    <div className="sidebar-filters__section">
      <h3 className="sidebar-filters__title">{title}</h3>
      <div className="sidebar-filters__chips">{children}</div>

      {showMoreButton && (
        <button
          type="button"
          className="sidebar-filters__show-more"
          onClick={onToggleShowMore}
        >
          {isExpanded ? "Скрыть" : "Посмотреть все"}
        </button>
      )}
    </div>
  );
};
