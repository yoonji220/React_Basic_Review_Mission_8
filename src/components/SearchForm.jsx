function SearchForm({ keyword, onChangeKeyword, searchInputRef }) {
  return (
    <div className="search-form">
      <input
        ref={searchInputRef}
        type="text"
        value={keyword}
        onChange={onChangeKeyword}
        placeholder="학습 항목 검색"
      />

      <button type="button" onClick={() => searchInputRef.current?.focus()}>
        검색창으로 이동
      </button>
    </div>
  );
}

export default SearchForm;
