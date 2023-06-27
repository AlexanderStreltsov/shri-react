import { type FC, type HTMLProps, useRef, useState, useEffect } from 'react';

import styles from './input.module.scss';

interface IInput extends HTMLProps<HTMLInputElement> {
  name: string;
  label: string;
  handleFilter: (str: string) => void;
}

export const Input: FC<IInput> = ({
  name,
  label,
  placeholder,
  handleFilter,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [text, setText] = useState('');

  const handleInput = () => {
    setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
    const value = inputRef.current && inputRef.current.value;
    setText(value || '');
  };

  useEffect(() => {
    setText(text);
    const timeOutId = setTimeout(() => handleFilter(text), 500);
    return () => clearTimeout(timeOutId);
  }, [setText, text, handleFilter]);

  return (
    <label htmlFor={name}>
      <h3 className={styles.label}>{label}</h3>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        ref={inputRef}
        onChange={handleInput}
        value={text}
        className={styles.input}
        type="text"
      />
    </label>
  );
};
