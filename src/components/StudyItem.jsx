function StudyItem({ item }) {
  const { title, desc, category, level } = item;

  return (
    <li>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>
        분류: {category} / 난이도: {level}
      </p>
    </li>
  );
}

export default StudyItem;
