import type { Collection } from "@/entities/collection/model/collection";

import "./CollectionList.scss";
import { CollectionCard } from "@/entities/collection/ui/CollectionCard";

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
