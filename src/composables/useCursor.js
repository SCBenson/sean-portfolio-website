// composables/useCursor.js - WORKING VERSION
import { onMounted, onUnmounted } from "vue";

export function useCursor() {
  let cursor = null;
  let originalBackground = null;

  const createCursor = () => {
    cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    // Store the original background of the wrapper, not body
    const wrapper = document.querySelector(".full-page-wrapper");
    if (wrapper) {
      originalBackground =
        wrapper.style.background || "rgb(var(--v-theme-primary))";
      console.log("Original background stored:", originalBackground);
    }
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

      const isSmallAppleBtn =
        target.classList.contains("small-apple-btn") ||
        target.closest(".small-apple-btn");

      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.classList.contains("v-btn") ||
        target.closest(".v-btn") ||
        target.style.cursor === "pointer";

      if (isSmallAppleBtn) {
        console.log("Small apple button detected!", target);
        cursor.classList.add("hover");
        changeBackgroundToImage(target);
      } else if (isClickable) {
        cursor.classList.add("hover");
        resetBackground();
      } else {
        cursor.classList.remove("hover");
        resetBackground();
      }
    }
  };

  const changeBackgroundToImage = (element) => {
    const buttonText = element.textContent || element.innerText;
    console.log("Button text:", buttonText);

    if (buttonText.includes("Business Languages")) {
      // Apply ONE background image to the wrapper (the main container)
      const wrapper = document.querySelector(".full-page-wrapper");
      if (wrapper) {
        wrapper.style.setProperty(
          "background",
          'url("/images/hero-background.webp") center/cover no-repeat',
          "important"
        );
        console.log("Background image applied to wrapper");
      }

      // Make the Header TRANSPARENT so the background shows through
      const header = document.querySelector(".v-app-bar");
      if (header) {
        header.style.setProperty(
          "background-color",
          "transparent",
          "important"
        );
        header.style.setProperty("background", "none", "important");
        console.log("Header made transparent");
      }

      // Make the nav-container and v-list TRANSPARENT
      const navContainer = document.querySelector(".nav-container");
      if (navContainer) {
        navContainer.style.setProperty(
          "background-color",
          "transparent",
          "important"
        );
        navContainer.style.setProperty("background", "none", "important");
        console.log("Nav container made transparent");
      }

      const vList = document.querySelector(".nav-container .v-list");
      if (vList) {
        vList.style.setProperty("background-color", "transparent", "important");
        vList.style.setProperty("background", "none", "important");
        console.log("V-list made transparent");
      }
    }
  };

  const resetBackground = () => {
    // Reset wrapper background to original color
    const wrapper = document.querySelector(".full-page-wrapper");
    if (wrapper) {
      wrapper.style.setProperty(
        "background-color",
        "rgb(var(--v-theme-primary))",
        "important"
      );
      wrapper.style.removeProperty("background-image");
      wrapper.style.removeProperty("background");
      console.log("Wrapper background reset");
    }

    // Reset header back to its original primary color (not transparent)
    const header = document.querySelector(".v-app-bar");
    if (header) {
      header.style.removeProperty("background");
      header.style.removeProperty("background-color");
      // Restore original header color
      header.style.setProperty(
        "background-color",
        "rgb(var(--v-theme-primary))",
        "important"
      );
      console.log("Header background reset to primary color");
    }

    // Reset nav-container back to original state
    const navContainer = document.querySelector(".nav-container");
    if (navContainer) {
      navContainer.style.removeProperty("background");
      navContainer.style.removeProperty("background-color");
      console.log("Nav container reset");
    }

    // Reset v-list back to original primary color
    const vList = document.querySelector(".nav-container .v-list");
    if (vList) {
      vList.style.removeProperty("background");
      vList.style.removeProperty("background-color");
      // Restore original v-list color (as set in About.vue)
      vList.style.setProperty(
        "background-color",
        "rgb(var(--v-theme-primary))",
        "important"
      );
      console.log("V-list background reset to primary color");
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
    resetBackground();
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
    document.removeEventListener("mousemove", moveCursor);
    document.removeEventListener("mousemove", addHoverEffect);
    document.removeEventListener("mousedown", addClickEffect);
    document.removeEventListener("mouseleave", hideCursor);
    document.removeEventListener("mouseenter", showCursor);

    resetBackground();

    if (cursor && cursor.parentNode) {
      cursor.parentNode.removeChild(cursor);
    }
  });
}
