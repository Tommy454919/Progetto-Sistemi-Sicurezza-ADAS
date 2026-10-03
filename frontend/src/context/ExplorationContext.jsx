import { createContext, useContext, useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "adas_explored";
const ExplorationContext = createContext(null);

export const ExplorationProvider = ({ children }) => {
  const [explored, setExplored] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(explored));
    } catch {
      /* ignore */
    }
  }, [explored]);

  const markExplored = useCallback((key) => {
    setExplored((prev) => (prev.includes(key) ? prev : [...prev, key]));
  }, []);

  const isExplored = useCallback((key) => explored.includes(key), [explored]);

  const reset = useCallback(() => setExplored([]), []);

  return (
    <ExplorationContext.Provider value={{ explored, markExplored, isExplored, reset }}>
      {children}
    </ExplorationContext.Provider>
  );
};

export const useExploration = () => {
  const ctx = useContext(ExplorationContext);
  if (!ctx) throw new Error("useExploration deve essere usato dentro ExplorationProvider");
  return ctx;
};
