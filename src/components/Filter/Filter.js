import react from "react";
import "./Filter.css";

function Filter(props) {
  const selectHandler = (e) => {
    props.onFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Yıllara Göre Filtre</label>
        <select value={props.filteredYear} onChange={selectHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
