import StudyItem from "./StudyItem";

function StudyList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <StudyItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default StudyList;
