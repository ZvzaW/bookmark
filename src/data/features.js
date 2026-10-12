import illustrationTab1 from "../assets/images/illustration-features-tab-1.svg?url";
import illustrationTab2 from "../assets/images/illustration-features-tab-2.svg?url";
import illustrationTab3 from "../assets/images/illustration-features-tab-3.svg?url";

export const features = [
  {
    id: "bookmarking",
    label: "Simple Bookmarking",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: { src: illustrationTab1, width: 536, height: 346 },
  },
  {
    id: "searching",
    label: "Speedy Searching",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: { src: illustrationTab2, width: 478, height: 416 },
  },
  {
    id: "sharing",
    label: "Easy Sharing",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: { src: illustrationTab3, width: 440, height: 380 },
  },
];
