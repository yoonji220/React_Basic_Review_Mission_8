function LevelFilter({ levels, level, onChangeLevel }) {
  return (
    <div className="button-wrap">
      {levels.map(name => (
        <button
          key={name}
          type="button"
          className={level === name ? "active" : ""}
          onClick={() => onChangeLevel(name)}
        >
          {name === "all" ? "전체 난이도" : name}
        </button>
      ))}
    </div>
  );
}

export default LevelFilter;
