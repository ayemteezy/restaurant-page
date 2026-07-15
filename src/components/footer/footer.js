import styles from "./footer.module.css";

import createLogo from "../common/logo";
import createLink from "../common/link";
import { NAV_ITEMS } from "@/constants/routes";

const scheds = [
  {
    time: "Tue - Thu: 5:00 PM - 11:00 PM",
  },
  {
    time: "Fri - Sat: 5:00 PM - 12:00 AM",
  },
  {
    time: "Sun: 5:00 PM - 10:00 PM",
  },
  {
    time: "Mon: Closed",
  },
];

const contacts = [
  {
    info: `123 Riverside Boulevard
    New York, NY 10021`,
  },
  {
    info: "+1 (555) 123-4567",
    href: "/",
  },
  {
    info: "info@meridian.com",
    href: "mailto:info@meridian.com",
  },
];

const socials = [
  {
    name: "Instagram",
  },
  {
    name: "Facebook",
  },
  {
    name: "Twitter",
  },
];

export default function createFooter() {
  const footer = document.createElement("footer");
  footer.className = styles.footer;

  const container = document.createElement("div");
  container.classList.add("container", styles.container);

  const logoContainer = document.createElement("div");
  const logo = createLogo();
  logo.className = styles.logo;

  const logoSub = document.createElement("p");
  logoSub.className = styles.logoSub;
  logoSub.textContent =
    "Contemporary fine dining crafted with precision and passion. An unforgettable culinary experience awaits.";

  logoContainer.append(logo, logoSub);

  const nav = document.createElement("div");
  nav.className = styles.nav;
  const navTitle = document.createElement("h5");
  navTitle.className = styles.title;
  navTitle.textContent = "navigation";

  const list = document.createElement("ul");
  list.className = styles.list;
  NAV_ITEMS.forEach((item) => {
    const listItem = document.createElement("li");

    const link = createLink({ href: item.path }, item.label);
    link.className = styles.link;
    listItem.append(link);
    list.append(listItem);
  });

  nav.append(navTitle, list);

  const sched = document.createElement("div");
  sched.className = styles.sched;
  const schedTitle = document.createElement("h5");
  schedTitle.className = styles.title;
  schedTitle.textContent = "hours";

  const schedContainer = document.createElement("div");
  schedContainer.className = styles.schedContainer;

  scheds.forEach((info) => {
    const time = document.createElement("p");
    time.className = styles.time;
    time.textContent = info.time;

    schedContainer.append(time);
  });
  sched.append(schedTitle, schedContainer);

  const contact = document.createElement("div");
  contact.className = styles.contact;
  const contactTitle = document.createElement("h5");
  contactTitle.className = styles.title;
  contactTitle.textContent = "contact";

  const contactContainer = document.createElement("div");
  contactContainer.className = styles.contactContainer;

  contacts.forEach((contact) => {
    if (contact.href) {
      const link = createLink({ href: contact.href }, contact.info);
      link.className = styles.link;
      contactContainer.append(link);
    } else {
      const info = document.createElement("p");
      info.className = styles.info;
      info.textContent = contact.info;
      contactContainer.append(info);
    }
  });

  contact.append(contactTitle, contactContainer);

  container.append(logoContainer, nav, sched, contact);

  const copyrightContainer = document.createElement("div");
  copyrightContainer.classList.add("container", styles.copyrightContainer);

  const separator = document.createElement("hr");
  separator.className = styles.separator;

  const copyrightInfo = document.createElement("div");
  copyrightInfo.className = styles.copyrightInfo;
  const copyright = document.createElement("p");
  copyright.textContent = "© 2026 MERIDIAN. All rights reserved.";

  const social = document.createElement("div");
  social.className = styles.social;

  socials.forEach((info) => {
    const link = createLink({}, info.name);
    link.className = styles.link;
    social.append(link);
  });

  copyrightInfo.append(copyright, social);

  copyrightContainer.append(separator, copyrightInfo);

  footer.append(container, copyrightContainer);
  return footer;
}
