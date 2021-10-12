import { action, autorun, observable } from "mobx";
import { message } from "@/components/Message";

const data = observable({
  count: parseInt(localStorage.getItem("count")) || 0,
});

const increment = action(() => {
  data.count += 1;
  localStorage.setItem("count", data.count);
});

const decrement = action(() => {
  data.count -= 1;
  localStorage.setItem("count", data.count);
});

const clear = action(() => {
  data.count = 0;
  localStorage.clear();
});

// autorun(() => {
//   message.success(data.count);
// });

// setInterval(
//   action(function tick() {
//     data.count += 1;
//   }),
//   1000,
// );

export default {
  data,
  increment,
  decrement,
  clear,
};
