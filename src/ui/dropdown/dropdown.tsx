import { type FC, useState, useRef, useCallback, useEffect } from 'react';

import { Portal } from '@/components/portal/portal';
import { Icon } from '@/ui/icon/icon';

import styles from './dropdown.module.scss';

interface IDropDown {
  label: string;
  placeholder: string;
  items: string[];
  handleFilter: (option: string) => void;
}

export const DropDown: FC<IDropDown> = ({
  items,
  handleFilter,
  label,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [currValue, setCurrValue] = useState(placeholder);

  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleSetPlaceholder = useCallback((value: string) => {
    setCurrValue(value);
  }, []);

  useEffect(() => {
    if (dropDownRef.current) {
      const { top, left, height } = dropDownRef.current.getBoundingClientRect();
      setOffsetTop(top + height + 4);
      setOffsetLeft(left);
    }
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !dropDownRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => setIsOpen(false);

    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('click', handleClick);
      window.addEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <div>
      <span className={styles.label}>{label}</span>
      <div
        className={`${styles.select} ${isOpen && styles.select_active}`}
        onClick={() => setIsOpen((prev) => !prev)}
        ref={dropDownRef}
      >
        {currValue}
        <span className={`${styles.icon} ${isOpen && styles.iconActive}`}>
          <Icon type="arrow" size={20} />
        </span>
      </div>
      {isOpen && (
        <Portal>
          <ul
            className={styles.list}
            style={{ top: offsetTop, left: offsetLeft }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  handleFilter(item);
                  handleSetPlaceholder(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </Portal>
      )}
    </div>
  );
};
