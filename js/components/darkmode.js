/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  "use strict";

  // Retrieve the stored theme from localStorage
  const getStoredTheme = () => localStorage.getItem("theme");
  // Set the theme in localStorage
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

  // Determine the preferred theme based on system settings or stored preference
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  // Set the theme based on the preference or system settings
  const setTheme = (theme) => {
    if (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };

  // Initialize the theme based on user preference
  setTheme(getPreferredTheme());

  // Display the active theme
  const showActiveTheme = (theme) => {
    const activeThemeIcon = document.querySelector(".theme-icon-active ");
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
    const iconOfActiveBtn = btnToActive.querySelector("i").dataset.themeIcon;

    // Remove the 'active' class from all theme toggler buttons
    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
    });

    // Add the 'active' class to the currently selected theme toggler button
    btnToActive.classList.add("active");
    // Switch the icon to reflect the active theme
    activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconActive);
    activeThemeIcon.classList.add(iconOfActiveBtn);
    activeThemeIcon.dataset.iconActive = iconOfActiveBtn;
  };

  // Listen for changes in system color scheme preference
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    const storedTheme = getStoredTheme();
    if (storedTheme !== "light" || storedTheme !== "dark") {
      setTheme(getPreferredTheme());
    }
  });

  // Set the active theme on page load
  window.addEventListener("DOMContentLoaded", () => {
    showActiveTheme(getPreferredTheme());

    // Listen for clicks on theme toggler buttons
    document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const theme = toggle.getAttribute("data-bs-theme-value");
        // Store the selected theme in localStorage
        setStoredTheme(theme);
        // Set the selected theme
        setTheme(theme);
        // Show the active theme
        showActiveTheme(theme);
      });
    });
  });
})();
