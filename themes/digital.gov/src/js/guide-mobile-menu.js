/**
 * Display horizontal desktop or vertical mobile menu when viewport size changes
 */

// eslint-disable-next-line func-names
(function () {
  const dgGuideMenuBar = document.querySelector(".dg-guide__menu-bar");

  if (!dgGuideMenuBar) return;
  const dgAccordionMobileMenu = document.querySelector(".guide-mobile-menu");
  const dgAccordionContent = dgAccordionMobileMenu.querySelector(
    ".usa-accordion__content"
  );
  const desktopBreakpoint = window.matchMedia("(min-width: 480px)");

  /**
   *  Reset menu based on screen size
   *
   *  @param {MediaQueryList} breakpoint
   */
  function handleResize(breakpoint) {
    if (breakpoint.matches) {
      dgAccordionMobileMenu.classList.add("guide-mobile-menu--hide");
      dgGuideMenuBar.classList.remove("dg-guide__menu-bar--hide");
    } else {
      dgAccordionMobileMenu.classList.remove("guide-mobile-menu--hide");
      dgGuideMenuBar.classList.add("dg-guide__menu-bar--hide");
    }
  }

  /**
   * Update usa-accordion content to hidden on page load
   */
  document.addEventListener("DOMContentLoaded", () => {
    dgAccordionContent.setAttribute("hidden", true);
  });

  /**
   * Initialize guide functions for toggling guide menu
   */
  function initGuideMobileMenu() {
    handleResize(desktopBreakpoint);
    desktopBreakpoint.addEventListener("change", handleResize);
  }

  initGuideMobileMenu();
})();
