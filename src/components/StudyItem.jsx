function StudyItem({ item, isFavorite, onToggleFavorite }) {
  const { id, title, desc, category, level } = item;

  return (
    <li>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>
        분류: {category} / 난이도: {level}
      </p>

      <button type="button" onClick={() => onToggleFavorite(id)}>
        {isFavorite ? "★ 즐겨찾기 해제" : "☆ 즐겨찾기"}
      </button>
    </li>
  );
}

export default StudyItem;
