import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, defaultValue?: T) {
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  function dispatch(newValue: T) {
    setData(newValue);
  }

  return { data, dispatch };
}

export default useLocalStorage;
