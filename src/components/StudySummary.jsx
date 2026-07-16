function StudySummary({ summary }) {
  const { total, visible, favorite } = summary;

  return (
    <div>
      <p>전체 항목: {total}개</p>
      <p>현재 표시: {visible}개</p>
      <p>즐겨찾기: {favorite}개</p>
    </div>
  );
}

export default StudySummary;
