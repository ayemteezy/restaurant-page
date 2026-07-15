import createHero from "./components/hero";
import createAbout from "./components/about/about";
import createFeature from "./components/feature/feature";
import createCTA from "./components/cta";

export default function createHomePage() {
  const container = document.createElement("div");

  const hero = createHero();
  const about = createAbout();
  const feature = createFeature();
  const cta = createCTA();

  container.append(hero, about, feature, cta);
  return container;
}
