import { useState } from "react";
import "./dropdown.css";
export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [checkedInfo, setCheckedInfo] = useState({ checkedItems: [] });
  const colorArray = [
    { id: 1, name: "red" },
    { id: 2, name: "yellow" },
    { id: 3, name: "blue" },
    { id: 4, name: "green" },
  ];

  const setMenu = () => {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  };
  const handleCheckBoxChange = (e) => {
    const { value, checked } = e.target;
    const { checkedItems } = checkedInfo;
    if (checked) {
      setCheckedInfo({ checkedItems: [...checkedItems, value] });
    } else {
      setCheckedInfo({ checkedItems: checkedItems.filter((e) => e !== value) });
    }
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        {checkedInfo.checkedItems.map((item) => (
          <>
            <h6>{item}</h6>
            <button className="cancelButton">x</button>
          </>
        ))}
      </div>
      <button style={{ width: "200px" }} onClick={setMenu}>
        select
      </button>
      <ul className={showMenu ? "dropdown-data-show" : "dropdown-data-hide"}>
        {colorArray.map((item) => (
          <li>
            <input
              type="checkbox"
              id={item.id}
              value={item.name}
              name={item.name}
              onChange={handleCheckBoxChange}
            />
            <label>{item.name}</label>
          </li>
        ))}
      </ul>
    </>
  );
}
