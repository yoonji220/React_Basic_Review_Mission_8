import { memo } from "react";

function StudyItem({ item, isFavorite, onToggleFavorite }) {
  const { id, title, desc, category, level } = item;

  console.log(`${title} 렌더링`);

  return (
    <li className={`study-item ${isFavorite ? "favorite" : ""}`}>
      <div className="study-item-header">
        <h3>{title}</h3>
        <span className="level-badge">{level}</span>
      </div>

      <p className="study-desc">{desc}</p>
      <p className="study-meta">분류: {category}</p>

      <button
        type="button"
        className="favorite-button"
        onClick={() => onToggleFavorite(id)}
      >
        {isFavorite ? "★ 즐겨찾기 해제" : "☆ 즐겨찾기"}
      </button>
    </li>
  );
}

export default memo(StudyItem);
