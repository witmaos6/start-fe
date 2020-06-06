import todoModel from "./todo-model";
import { render } from "./html-render";

const $inputform = document.querySelector("#input-form");
const $input = document.querySelector("#input");

function init(data) {
  $inputform.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = $input.value;
    if (!text) return;

    $input.value = "";

    data.push({
      ...todoModel,
      text,
      isDone: false,
    });

    render(data);
  });
}

export default {
  init,
};
