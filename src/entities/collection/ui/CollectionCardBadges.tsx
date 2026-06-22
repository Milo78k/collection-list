import type { CollectionSpecialization } from "@/entities/collection/model/collection";

type CollectionCardBadgesProps = {
  specializations: CollectionSpecialization[];
};

const VISIBLE_BADGES_COUNT = 3;

export const CollectionCardBadges = ({
  specializations,
}: CollectionCardBadgesProps) => {
  const visibleSpecializations = specializations.slice(0, VISIBLE_BADGES_COUNT);

  if (!visibleSpecializations.length) return null;

  return (
    <div className="collection-card__badges">
      {visibleSpecializations.map((item) => (
        <span key={item.id} className="collection-card__badge">
          {item.title}
        </span>
      ))}
    </div>
  );
};
