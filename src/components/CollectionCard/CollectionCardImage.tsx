import type { Collection } from "@/types/collection";

type CollectionCardImageProps = {
  collection: Collection;
};

const isValidImageSrc = (src?: string | null) => {
  return Boolean(src && (src.startsWith("http") || src.startsWith("/")));
};

export const CollectionCardImage = ({
  collection,
}: CollectionCardImageProps) => {
  const imageSrc = collection.imageSrc;
  const placeholderText = collection.company?.title ?? collection.title;

  return (
    <div className="collection-card__image-wrapper">
      {isValidImageSrc(imageSrc) ? (
        <img
          src={imageSrc ?? undefined}
          alt={collection.title}
          className="collection-card__image"
        />
      ) : (
        <div className="collection-card__image-placeholder">
          {placeholderText}
        </div>
      )}
    </div>
  );
};
