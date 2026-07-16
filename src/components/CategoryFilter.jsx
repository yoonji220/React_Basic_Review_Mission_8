function CategoryFilter({ categories, category, onChangeCategory }) {
  return (
    <div className="button-wrap">
      {categories.map(name => (
        <button
          key={name}
          type="button"
          className={category === name ? "active" : ""}
          onClick={() => onChangeCategory(name)}
        >
          {name === "all" ? "전체" : name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
