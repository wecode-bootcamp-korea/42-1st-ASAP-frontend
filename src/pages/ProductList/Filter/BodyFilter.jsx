import { BodyFilterData } from '../Data/BodyFilterData';
import './BodyFilter.scss';
export default function BodyFilter({ onChange }) {
  // useEffect(() => {
  //   fetch('http://10.58.52.162:3000/products/body-hand/hand', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setCheckdeValues(data.data);
  //     });
  // }, []);

  return (
    <div className="filter-box">
      {BodyFilterData.map(category => (
        <div className="filter-checkbox" key={category.id}>
          <h3 className="filter-title">{category.category}</h3>
          {category.subcategory.map(subcategory => (
            <div className="checkbox-wrapper" key={subcategory.id}>
              <label className="checkbox">
                <input
                  id={subcategory.title}
                  type="checkbox"
                  onChange={onChange}
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
