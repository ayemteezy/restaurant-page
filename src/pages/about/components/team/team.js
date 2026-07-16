import styles from "./team.module.css";

import createImage from "@/components/common/image";

import chefImg from "@/assets/images/chef.jpg";
import directorImg from "@/assets/images/director.jpg";

const teams = [
  {
    image: chefImg,
    name: "Chef Laurent Beaumont",
    title: "Executive Chef",
    bio: "With over 20 years of experience in Michelin-starred kitchens across Europe, Chef Laurent brings innovative techniques and timeless elegance to every creation.",
  },
  {
    image: directorImg,
    name: "Marie Laurent",
    title: "Restaurant Director",
    bio: "Marie's passion for hospitality ensures every guest experiences warmth and professionalism. Her attention to detail creates the perfect dining environment.",
  },
];

export default function createTeam() {
  const container = document.createElement("div");
  container.className = styles.container;

  const content = document.createElement("div");
  content.classList.add("container", styles.content);

  const header = document.createElement("div");
  header.className = styles.header;

  const sub = document.createElement("h4");
  sub.className = styles.sub;
  sub.textContent = "Meet the Team";

  const title = document.createElement("h2");
  title.className = styles.title;
  title.textContent = "Our Leadership";

  const teamContainer = document.createElement("div");
  teamContainer.className = styles.teamContainer;

  teams.forEach((team) => {
    const teamContent = document.createElement("div");
    teamContent.className = styles.teamContent;

    const img = createImage({ src: team.image, width: "100%", height: 400 });
    img.className = styles.img;
    const teamHeader = document.createElement("div");

    const teamTitle = document.createElement("h4");
    teamTitle.className = styles.teamTitle;
    teamTitle.textContent = team.title;

    const name = document.createElement("h2");
    name.className = styles.name;
    name.textContent = team.name;

    const body = document.createElement("p");
    body.className = styles.body;
    body.textContent = team.bio;

    teamHeader.append(name, teamTitle);

    teamContent.append(img, teamHeader, body);
    teamContainer.append(teamContent);
  });

  header.append(sub, title);
  content.append(header, teamContainer);
  container.append(content);
  return container;
}
