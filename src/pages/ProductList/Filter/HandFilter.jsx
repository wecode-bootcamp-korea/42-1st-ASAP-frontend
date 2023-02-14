import React from 'react';
import { HandFilterData } from '../Data/HandFilterData';
import './HandFilter.scss';

export default function HandFilter({ onChange }) {
  return (
    <div className="filter-box">
      {HandFilterData.map(category => (
        <div className="filter-checkbox" key={category.id}>
          <h3 className="filter-title">{category.category}</h3>
          {category.subcategory.map(subcategory => (
            <div className="checkbox-wrapper" key={subcategory.id}>
              <label className="checkbox">
                <input
                  id={subcategory.title}
                  type="checkbox"
                  onChange={e => onChange(e, category.category)}
                  value={subcategory.title}
                  className="checkbox"
                  name={subcategory.title}
                />
                {subcategory.title}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
