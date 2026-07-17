import styles from "./information.module.css";
import createTitle from "../title";

import createLink from "@/components/common/link";

const scheds = [
  { day: "Tuesday - Thursday", time: "5:00 PM - 11:00 PM" },
  { day: "Friday - Saturday", time: "5:00 PM - 12:00 AM" },
  { day: "Sunday", time: "5:00 PM - 10:00 PM" },
  {
    day: "Monday",
    time: "Closed",
  },
];

const socials = [
  { name: "Instagram" },
  { name: "Facebook" },
  { name: "Twitter" },
];

export default function createInformation() {
  const container = document.createElement("div");
  container.className = styles.container;

  const title = createTitle({
    subtitle: "information",
    label: "Contact Details",
  });

  const content = document.createElement("div");
  content.className = styles.content;

  // Address Section
  const address = document.createElement("div");
  address.className = styles.informationContainer;
  const addressTitle = document.createElement("h4");
  addressTitle.className = styles.title;
  addressTitle.textContent = "address";
  const addressBody = document.createElement("p");
  addressBody.innerHTML = `123 Riverside Boulevard<br/>
  New York, NY 10021<br/>
  United States`;

  address.append(addressTitle, addressBody);

  // Phone Section
  const phone = document.createElement("div");
  phone.className = styles.informationContainer;
  const phoneTitle = document.createElement("h4");
  phoneTitle.className = styles.title;
  phoneTitle.textContent = "phone";
  const phoneBody = createLink({}, "+1 (555) 123-4567");

  phone.append(phoneTitle, phoneBody);

  const email = document.createElement("div");
  email.className = styles.informationContainer;
  const emailTitle = document.createElement("h4");
  emailTitle.className = styles.title;
  emailTitle.textContent = "email";
  const emailBody = createLink({}, "info@meridian.com");

  email.append(emailTitle, emailBody);

  const separator = document.createElement("hr");
  separator.className = styles.separator;

  // Schedule Section
  const hours = document.createElement("div");
  hours.className = styles.informationContainer;
  const hoursTitle = document.createElement("h4");
  hoursTitle.className = styles.title;
  hoursTitle.textContent = "hours";
  const schedContainer = document.createElement("div");
  schedContainer.className = styles.schedContainer;
  scheds.forEach((sched) => {
    const schedBody = document.createElement("p");
    schedBody.innerHTML = /*html*/ `<strong>
      ${sched.day}:
    </strong> ${sched.time}`;

    schedContainer.append(schedBody);
  });

  hours.append(hoursTitle, schedContainer);

  const schedSeparator = document.createElement("hr");
  schedSeparator.className = styles.separator;

  // Schedule Section
  const social = document.createElement("div");
  social.className = styles.informationContainer;
  const socialTitle = document.createElement("h4");
  socialTitle.className = styles.title;
  socialTitle.textContent = "follow";
  const socialContainer = document.createElement("div");
  socialContainer.className = styles.socialContainer;
  socials.forEach((social) => {
    const socialBody = createLink({}, social.name);

    socialContainer.append(socialBody);
  });

  social.append(socialTitle, socialContainer);

  content.append(
    address,
    phone,
    email,
    separator,
    hours,
    schedSeparator,
    social,
  );

  container.append(title, content);
  return container;
}
