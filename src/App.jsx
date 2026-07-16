import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import StudyList from "./components/StudyList";
import reactData from "./data/data.json";
import CategoryFilter from "./components/CategoryFilter";
import StudySummary from "./components/StudySummary";
import LevelFilter from "./components/LevelFilter";

function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const searchInputRef = useRef(null);
  const renderCount = useRef(0);
  const previousKeywordRef = useRef("");

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  useEffect(() => {
    previousKeywordRef.current = keyword;
  }, [keyword]);

  const handleChangeKeyword = e => {
    setKeyword(e.target.value);
  };

  const handleChangeCategory = value => {
    setCategory(value);
  };

  const handleChangeLevel = value => {
    setLevel(value);
  };

  const handleToggleFavorite = useCallback(id => {
    setFavoriteIds(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id],
    );
  }, []);

  const handleToggleFavoriteOnly = () => {
    setFavoriteOnly(prev => !prev);
  };

  const handleReset = () => {
    setKeyword("");
    setCategory("all");
    setLevel("all");
    setFavoriteOnly(false);

    // searchInputRef.current.value = "";
    searchInputRef.current.focus();
  };

  const filteredData = useMemo(() => {
    return reactData.filter(item => {
      const matchKeyword = item.title
        .toLowerCase()
        .includes(keyword.toLowerCase());

      const matchCategory = category === "all" || item.category === category;
      const matchFavorite = !favoriteOnly || favoriteIds.includes(item.id);
      const matchLevel = level === "all" || item.level === level;

      return matchKeyword && matchCategory && matchLevel && matchFavorite;
    });
  }, [keyword, category, level, favoriteOnly, favoriteIds]);

  const categories = ["all", ...new Set(reactData.map(item => item.category))];
  const levels = ["all", ...new Set(reactData.map(item => item.level))];

  const summary = useMemo(() => {
    return {
      total: reactData.length,
      visible: filteredData.length,
      favorite: favoriteIds.length,
    };
  }, [filteredData, favoriteIds]);

  renderCount.current += 1;

  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">React Basic Review Mission 8</p>
        <h1>React Hooks 학습 목록 관리</h1>
        <p className="header-desc">
          useState, useMemo, useCallback, useRef를 활용한 복습 미션입니다.
        </p>
      </header>

      <section className="control-panel">
        <div className="control-group">
          <h2>학습 항목 검색</h2>

          <SearchForm
            keyword={keyword}
            onChangeKeyword={handleChangeKeyword}
            searchInputRef={searchInputRef}
          />
        </div>

        <div className="control-group">
          <h2>카테고리</h2>

          <CategoryFilter
            categories={categories}
            category={category}
            onChangeCategory={handleChangeCategory}
          />
        </div>

        <div className="control-group">
          <h2>난이도</h2>

          <LevelFilter
            levels={levels}
            level={level}
            onChangeLevel={handleChangeLevel}
          />
        </div>

        <div className="control-actions">
          <button
            type="button"
            className={favoriteOnly ? "active" : ""}
            onClick={handleToggleFavoriteOnly}
          >
            {favoriteOnly ? "전체 항목 보기" : "즐겨찾기만 보기"}
          </button>

          <button type="button" className="reset-button" onClick={handleReset}>
            초기화
          </button>
        </div>
      </section>

      <StudySummary summary={summary} />

      <section className="debug-info">
        <p>현재 검색어: {keyword || "-"}</p>
        <p>이전 검색어: {previousKeywordRef.current || "-"}</p>
        <p>App 렌더링 횟수: {renderCount.current}회</p>
      </section>

      <section className="study-section">
        <h2>학습 목록</h2>

        {filteredData.length === 0 ? (
          <p className="no-result">조건에 맞는 학습 항목이 없습니다.</p>
        ) : (
          <StudyList
            items={filteredData}
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </section>
    </main>
  );
}

export default App;
