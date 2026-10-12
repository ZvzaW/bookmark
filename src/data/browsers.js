import chromeLogo from "../assets/images/logo-chrome.svg?url";
import firefoxLogo from "../assets/images/logo-firefox.svg?url";
import operaLogo from "../assets/images/logo-opera.svg?url";

export const browsers = [
  {
    name: "Chrome",
    minVersion: 62,
    logo: { src: chromeLogo, width: 102, height: 100 },
    href: "https://chromewebstore.google.com",
  },
  {
    name: "Firefox",
    minVersion: 55,
    logo: { src: firefoxLogo, width: 105, height: 100 },
    href: "https://addons.mozilla.org",
  },
  {
    name: "Opera",
    minVersion: 46,
    logo: { src: operaLogo, width: 96, height: 100 },
    href: "https://addons.opera.com",
  },
];
