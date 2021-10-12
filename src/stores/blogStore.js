import { action, observable } from "mobx";

const cards = observable([
  "你好".repeat(100),
  "哈".repeat(100),
  undefined,
  undefined,
  undefined,
]);

const menus = observable([
  {
    name: "1",
    onClick: (name) => {
      console.log(name);
    },
    children: [
      {
        name: "1-1",
        children: [],
        onClick: (name) => {
          console.log(name);
        },
      },
    ],
  },
  {
    name: "2",
    onClick: (name) => {
      console.log(name);
    },
    children: [],
  },
]);
const content = observable("# Hello world");

export default {
  cards,
  menus,
  content,
};
