import type { Collection } from "@/types/collection";
import filterIconMobile from "@/assets/icons/Icon.svg";

import "./CollectionHero.scss";

type CollectionHeroProps = {
  collection: Collection;
  onOpenAside: () => void;
};

export const CollectionHero = ({
  collection,
  onOpenAside,
}: CollectionHeroProps) => {
  return (
    <div className="collection-hero">
      <div className="collection-hero__image-wrapper">
        {collection.imageSrc ? (
          <img
            src={collection.imageSrc}
            alt={collection.title}
            className="collection-hero__image"
          />
        ) : (
          <div className="collection-hero__image-placeholder">
            {collection.company?.title ?? collection.title}
          </div>
        )}
      </div>

      <div className="collection-hero__content">
        <div className="collection-hero__header">
          <div className="collection-hero__info">
            <h1 className="collection-hero__title">{collection.title}</h1>

            <p className="collection-hero__description">
              {collection.description}
            </p>
          </div>

          <button
            type="button"
            className="collection-hero__actions"
            onClick={onOpenAside}
          >
            <img src={filterIconMobile} alt="Открыть информацию" />
          </button>
        </div>
      </div>
    </div>
  );
};
