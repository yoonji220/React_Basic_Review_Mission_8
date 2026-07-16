import StudyItem from "./StudyItem";

function StudyList({ items, favoriteIds, onToggleFavorite }) {
  return (
    <ul className="study-list">
      {items.map(item => (
        <StudyItem
          key={item.id}
          item={item}
          isFavorite={favoriteIds.includes(item.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ul>
  );
}

export default StudyList;
