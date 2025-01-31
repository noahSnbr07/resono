import { admin, mail, report, settings, upload } from "@/assets/assets";

const sideBarLinks = [
   { id: 0, title: "settings", icon: settings, href: "/settings" },
   { id: 1, title: "articles", icon: mail, href: "/articles" },
   { id: 2, title: "report", icon: report, href: "/report" },
   { id: 3, title: "admin", icon: admin, href: "/admin" },
   { id: 4, title: "upload", icon: upload, href: "/upload/find" },
];

export default sideBarLinks;