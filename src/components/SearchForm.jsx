function SearchForm({ keyword, onChangeKeyword }) {
  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={onChangeKeyword}
        placeholder="학습 항목 검색"
      />
    </div>
  );
}

export default SearchForm;
