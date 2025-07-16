import { useEffect } from "react";

export default function useActiveTOCLink() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "introduction",
        "week1",
        "week2",
        "week3",
        "week4",
        "practice",
        "resources",
      ];
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 100 >= el.offsetTop) {
          current = id;
        }
      }
      document.querySelectorAll(".toc-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
} 