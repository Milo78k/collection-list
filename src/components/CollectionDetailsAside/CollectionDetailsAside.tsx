import type { Collection } from "@/types/collection";
import closeIcon from "@/assets/icons/Close-button.svg";
import { MentorCard } from "@/components/MentorCard/MentorCard";

import "./CollectionDetailsAside.scss";
import CollectionDetailsSidebar from "@/components/CollectionDetailsSidebar/CollectionDetailsSidebar";

type CollectionDetailsAsideProps = {
  collection: Collection;
  isOpen: boolean;
  onClose: () => void;
};

export const CollectionDetailsAside = ({
  collection,
  isOpen,
  onClose,
}: CollectionDetailsAsideProps) => {
  return (
    <div className="collection-details-aside__column">
      <aside
        className={`collection-details-aside ${
          isOpen ? "collection-details-aside--open" : ""
        }`}
      >
        <button
          type="button"
          className="collection-details-aside__close"
          onClick={onClose}
        >
          <img src={closeIcon} alt="close icon" />
        </button>

        <CollectionDetailsSidebar collection={collection} />
      </aside>

      <div className="collection-details-aside__mentor-desktop">
        <MentorCard />
      </div>
    </div>
  );
};
