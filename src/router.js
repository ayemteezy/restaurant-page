let viewContainer = null;
let routes = [];

/**
 * Matches the current URL pathname against the dynamically provided routes
 */
function handleRouting() {
  if (!viewContainer) return;

  const currentPath = window.location.pathname;

  // Find the route that matches the current path, or fallback to the root path '/'
  const matchedRoute =
    routes.find((route) => route.path === currentPath) ||
    routes.find((route) => route.path === "/");

  if (!matchedRoute) {
    console.error(`No route found for path: ${currentPath}`);
    return;
  }

  // Wipe the screen clean and inject the component
  viewContainer.innerHTML = "";
  const pageElement = matchedRoute.component();
  viewContainer.appendChild(pageElement);
}

export const router = {
  /**
   * Initializes the router setup dynamically
   * @param {HTMLElement} container - The DOM wrapper where views load
   * @param {Array} routesArray - Your dynamic routes array configuration
   */
  init(container, routesArray) {
    viewContainer = container;
    routes = routesArray;

    // Listen for browser back/forward navigation
    window.addEventListener("popstate", handleRouting);

    // Initial page load evaluation
    handleRouting();
  },

  /**
   * Modern replacement for navigateTo. Push a new route to browser history.
   * @param {string} path - Target path e.g., '/menu'
   */
  push(path) {
    if (window.location.pathname === path) return; // Prevent redundant routing actions
    window.history.pushState(null, null, path);
    handleRouting();
  },

  /**
   * Navigates back one step in the history stack
   */
  back() {
    window.history.back();
  },

  /**
   * Getter method to easily retrieve the current location path string
   */
  get currentPath() {
    return window.location.pathname;
  },
};
