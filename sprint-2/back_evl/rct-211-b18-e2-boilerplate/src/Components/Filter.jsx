import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const [searchParams, setSearchParams] = useSearchParams();

  const initialFilterData = searchParams.getAll("category");
  const [category, setCategory] = useState(initialFilterData || []);

  const handleFilterCheckbox = (e) => {
    const newCategory = [...category];

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category) {
      let params = {};
      category && (params.category = category);
      setSearchParams(params);
    }
  }, [category, setSearchParams]);

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input
            type="checkbox"
            value="Analog"
            checked={category.includes("Analog")}
            onChange={handleFilterCheckbox}
          />
          <label>Analog</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Digital"
            checked={category.includes("Digital")}
            onChange={handleFilterCheckbox}
          />
          <label>Digital</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Chronograph"
            checked={category.includes("Chronograph")}
            onChange={handleFilterCheckbox}
          />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
