import { Link } from "react-router-dom";

import type { Collection } from "@/entities/collection/model/collection";

import { CollectionCardImage } from "./CollectionCardImage";
import { CollectionCardBadges } from "./CollectionCardBadges";
import { CollectionCardMeta } from "./CollectionCardMeta";
import "./CollectionCard.scss";

type CollectionCardProps = {
  collection: Collection;
};

export const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <article className="collection-card">
      <Link
        to={`/collections/${collection.id}`}
        className="collection-card__link"
      >
        <CollectionCardImage collection={collection} />

        <div className="collection-card__content">
          <CollectionCardBadges specializations={collection.specializations} />

          <p className="collection-card__description">
            {collection.description}
          </p>

          <CollectionCardMeta
            isFree={collection.isFree}
            questionsCount={collection.questionsCount}
          />

          <div className="collection-card__specializations">
            {collection.specializations.map((item) => (
              <span key={item.id}>{item.title}</span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};
