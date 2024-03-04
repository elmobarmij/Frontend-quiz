import iconHtml from "../assets/iconHtml.svg";
import iconCss from "../assets/iconCss.svg";
import iconJs from "../assets/iconJs.svg";
import iconAccessibility from "../assets/iconAccessibility.svg";

export const options = [
  {
    id: 0,
    alt: "Icon HTML",
    icon: iconHtml,
    text: "HTML",
    bg: "rgb(255, 241, 233)",
  },

  {
    id: 1,
    alt: "Icon CSS",
    icon: iconCss,
    text: "CSS",
    bg: "rgb(224, 253, 239)",
  },
  {
    id: 2,
    alt: "Icon JS",
    icon: iconJs,
    text: "JavaScript",
    bg: "rgb(235, 240, 255)",
  },

  {
    id: 3,
    alt: "Icon Accessibility",
    icon: iconAccessibility,
    text: "Accessibility",
    bg: "rgb(246, 231, 255)",
  },
];

export function convertIndexToLetter(index) {
  let letter = "";
  if (index === 0) letter = "A";
  if (index === 1) letter = "B";
  if (index === 2) letter = "C";
  if (index === 3) letter = "D";
  return letter;
}

export function convertIndexToLogo(index) {
  let logoObj = "";
  if (index === 0) logoObj = options.at(0);
  if (index === 1) logoObj = options.at(1);
  if (index === 2) logoObj = options.at(2);
  if (index === 3) logoObj = options.at(3);
  return logoObj;
}
