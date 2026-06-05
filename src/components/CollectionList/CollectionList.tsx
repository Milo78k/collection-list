import type { Collection } from "@/types/collection";
import { CollectionCard } from "@/components/CollectionCard/CollectionCard";

import "./CollectionList.scss";

type CollectionListProps = {
  collections: Collection[];
};

export const CollectionList = ({ collections }: CollectionListProps) => {
  if (!collections.length) {
    return <p className="collection-list__empty">Коллекции не найдены</p>;
  }

  return (
    <div className="collection-list">
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
};
