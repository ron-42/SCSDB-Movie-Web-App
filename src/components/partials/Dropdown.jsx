import React from "react";

function Dropdown({ title, options, func }) {
  return (
    <div className="select">
      <select name="format" onChange={func} id="format" defaultValue="0">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
