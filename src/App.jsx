import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import StudyList from "./components/StudyList";
import reactData from "./data/data.json";

function App() {
  const [keyword, setKeyword] = useState("");

  const handleChangeKeyword = e => {
    setKeyword(e.target.value);
  };

  const filteredData = reactData.filter(item =>
    item.title.toLowerCase().includes(keyword.toLowerCase()),
  );

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

      <section>
        <h2>학습 목록</h2>
        <StudyList items={filteredData} />
      </section>
    </main>
  );
}

export default App;
