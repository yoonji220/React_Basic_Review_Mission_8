import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import StudyList from "./components/StudyList";
import reactData from "./data/data.json";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [favoriteIds, setFavoriteIds] = useState([]);

  const handleChangeKeyword = e => {
    setKeyword(e.target.value);
  };

  const handleChangeCategory = value => {
    setCategory(value);
  };

  const handleToggleFavorite = id => {
    setFavoriteIds(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id],
    );
  };

  const filteredData = reactData.filter(item => {
    const matchKeyword = item.title
      .toLowerCase()
      .includes(keyword.toLowerCase());

    const matchCategory = category === "all" || item.category === category;

    return matchKeyword && matchCategory;
  });

  const categories = ["all", ...new Set(reactData.map(item => item.category))];

  return (
    <main>
      <header>
        <p>React Basic Review Mission 8</p>
        <h1>React Hooks 학습 목록 관리</h1>
        <p>useState, useMemo, useCallback, useRef를 활용한 복습 미션입니다.</p>
      </header>

      <section>
        <h2>학습 항목 검색</h2>

        <SearchForm keyword={keyword} onChangeKeyword={handleChangeKeyword} />
      </section>

      <CategoryFilter
        categories={categories}
        category={category}
        onChangeCategory={handleChangeCategory}
      />

      <section>
        <h2>학습 목록</h2>
        <StudyList
          items={filteredData}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
        />
      </section>
    </main>
  );
}

export default App;
