export interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Research", path: "#research" },
  { name: "Experience", path: "#experience" },
  { name: "Engagement", path: "#engagement" },
  { name: "Contact", path: "#contact" },
];
