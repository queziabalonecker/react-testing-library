import { useState } from 'react';

export const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className='c-dropdown'>
      <button onClick={() => setIsOpen(true)}>{title}</button>

      {isOpen && (
        <ul>
          {options.map((option) => (
            <li
              role='menuitem'
              key={option}
              onClick={() => handleSelection(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
