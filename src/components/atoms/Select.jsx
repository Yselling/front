import React from "react";

const Select = ({ elements, id, value, onChange }) => {
    return (
        <select
            id={id}
            value={value}
            onChange={onChange}
            className="border border-indigo-300 text-black bg-white rounded-md px-3 py-1 focus:outline-none focus:ring focus:border-indigo-500"
        >
            {elements.map((element) => (
                <option 
                    key={element.id} 
                    value={element.id}
                >
                    {element.name}
                </option>
            ))}
        </select>
    );
};

export default Select;
