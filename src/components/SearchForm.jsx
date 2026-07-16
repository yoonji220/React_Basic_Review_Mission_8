function SearchForm({ keyword, onChangeKeyword, searchInputRef }) {
  return (
    <div>
      <input
        ref={searchInputRef}
        type="text"
        value={keyword}
        onChange={onChangeKeyword}
        placeholder="학습 항목 검색"
      />
    </div>
  );
}

export default SearchForm;
