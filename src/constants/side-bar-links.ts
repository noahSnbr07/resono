import { admin, mail, report, settings } from "@/assets/assets";

const sideBarLinks = [
   { id: 0, title: "settings", icon: settings, href: "/settings" },
   { id: 1, title: "articles", icon: mail, href: "/articles" },
   { id: 2, title: "issues", icon: report, href: "/issues" },
   { id: 3, title: "admin", icon: admin, href: "/admin" },
];

export default sideBarLinks;