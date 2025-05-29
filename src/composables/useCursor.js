// composables/useCursor.js - FIXED VERSION
import { onMounted, onUnmounted } from "vue";

export function useCursor() {
  let cursor = null;

  const createCursor = () => {
    cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);
  };

  const moveCursor = (e) => {
    if (cursor) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    }
  };

  const addHoverEffect = (e) => {
    if (cursor) {
      const target = e.target;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.classList.contains("v-btn") ||
        target.closest(".v-btn") ||
        target.style.cursor === "pointer";

      if (isClickable) {
        cursor.classList.add("hover");
      } else {
        cursor.classList.remove("hover");
      }
    }
  };

  const addClickEffect = () => {
    if (cursor) {
      cursor.classList.add("click");
      setTimeout(() => cursor.classList.remove("click"), 150);
    }
  };

  const hideCursor = () => {
    if (cursor) {
      cursor.style.opacity = "0";
    }
  };

  const showCursor = () => {
    if (cursor) {
      cursor.style.opacity = "1";
    }
  };

  onMounted(() => {
    createCursor();

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousemove", addHoverEffect);
    document.addEventListener("mousedown", addClickEffect);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);
  });

  onUnmounted(() => {
    // FIX: Use removeEventListener instead of addEventListener
    document.removeEventListener("mousemove", moveCursor);
    document.removeEventListener("mousemove", addHoverEffect);
    document.removeEventListener("mousedown", addClickEffect);
    document.removeEventListener("mouseleave", hideCursor);
    document.removeEventListener("mouseenter", showCursor);

    if (cursor && cursor.parentNode) {
      cursor.parentNode.removeChild(cursor);
    }
  });
}
