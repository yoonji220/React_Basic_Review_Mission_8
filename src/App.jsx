import "./App.css";
import StudyList from "./components/StudyList";
import reactData from "./data/data.json";

function App() {
  return (
    <main>
      <header>
        <p>React Basic Review Mission 8</p>
        <h1>React Hooks 학습 목록 관리</h1>
        <p>useState, useMemo, useCallback, useRef를 활용한 복습 미션입니다.</p>
      </header>

      <section>
        <h2>학습 목록</h2>
        <StudyList items={reactData} />
      </section>
    </main>
  );
}

export default App;
