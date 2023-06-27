import {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react';

interface IAccordionContext {
  active: string;
  switchAccordion: (title: string) => void;
}

const AccordionContext = createContext<IAccordionContext>({
  active: '',
  switchAccordion: () => {},
});

export const useAccordion = () => useContext(AccordionContext);

export const AccordionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [active, setActive] = useState('');

  const switchAccordion = useCallback((title: string) => {
    setActive((activeTitle) => (activeTitle === title ? '' : title));
  }, []);

  return (
    <AccordionContext.Provider value={{ active, switchAccordion }}>
      {children}
    </AccordionContext.Provider>
  );
};
