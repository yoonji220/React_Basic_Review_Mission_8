function StudySummary({ summary }) {
  const { total, visible, favorite } = summary;

  return (
    <section className="summary">
      <div>
        <span>전체 항목</span>
        <strong>{total}개</strong>
      </div>

      <div>
        <span>현재 표시</span>
        <strong>{visible}개</strong>
      </div>

      <div>
        <span>즐겨찾기</span>
        <strong>{favorite}개</strong>
      </div>
    </section>
  );
}

export default StudySummary;
