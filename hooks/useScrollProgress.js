import React, { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const currentScrollUpdate = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    //event
    window.addEventListener("scroll", currentScrollUpdate);
    //clear event
    return () => window.removeEventListener("scroll", currentScrollUpdate);
  }, []);

  return completion;
};

export default useScrollProgress;
