import React, {
  useState,
  ReactNode,
  useEffect,
  createContext,
  useContext,
} from 'react';

type WindowSize = Readonly<{
  width: number;
  heigt: number;
}>;

const getSize = () => ({
  width: window.innerWidth,
  heigt: window.innerHeight,
});

export const WindowSizeContext = createContext<WindowSize>(getSize());

type Props = {
  children: ReactNode;
};

export const WindowSizeContextProvider = ({ children }: Props): JSX.Element => {
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [setSize]);

  return (
    <WindowSizeContext.Provider value={size}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useWindowSize = (): WindowSize => useContext(WindowSizeContext);
