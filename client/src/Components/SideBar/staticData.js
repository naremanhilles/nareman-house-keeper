import logout from "./log.png";
import history from "./hes.png";
import home from "./h.png";
import my from "./my.png";

const elements = [
  {
    id: 0,
    text: "الرئيسية",
    link: "/app/home",
    icon: home

  },
  {
    id: 1,
    text: "حجوزاتي",
    link: "/app/mybook",
    icon: my

  },
  {
    id: 2,
    text: "السجل",
    link: "/app/history",
    icon: history

  },
  {
    id: 3,
    text: "خروج",
    icon: logout
  }
];
export default elements;



