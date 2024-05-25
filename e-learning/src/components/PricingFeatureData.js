import correct from "./assets/icons/correct.svg";
import wrong from "./assets/icons/wrong.svg";

export const free = [
  { feature: "Access to Basic Courses", status: correct },
  { feature: "Yearly Course Updates", status: correct },
  { feature: "Basic Customer Support", status: correct },
  { feature: "Ad-Supported Experience", status: correct },
  { feature: "Daily Course Update", status: correct },
  { feature: "Course Progress Tracking", status: wrong },
  { feature: "Personalized Tutoring", status: wrong },
];

export const paid = [
  { feature: "Unlimited Access to All Courses", status: correct },
  { feature: "Comprehensive Course Progress Tracking", status: correct },
  { feature: "Priority Community Support", status: correct },
  { feature: "Daily Course Updates", status: correct },
  { feature: "Ad-Free Experience", status: correct },
  { feature: "Offline Access", status: correct },
  { feature: "Flexible Billing", status: correct },
];
