import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [enabled, setEnabled] = useState(
    localStorage.getItem("dark") === "true"
  );

  enabled
    ? localStorage.setItem("dark", "true")
    : localStorage.setItem("dark", "false");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;
    enabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
