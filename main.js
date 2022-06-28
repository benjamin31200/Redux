const getButton = [
  document.getElementById("counter-render"),
  document.getElementById("button-increment"),
  document.getElementById("button-decrement"),
  document.getElementById("button-increment10"),
  document.getElementById("button-decrement10"),
  document.getElementById("reset"),
];
const [counterRender, ...otherButton] = getButton;
const [
  incrementButton,
  decrementButton,
  incrementButton10,
  decrementButton10,
  reset,
] = otherButton;
const actions = [
  { type: "INCREMENT" },
  { type: "DECREMENT" },
  { type: "INCREMENT10" },
  { type: "DECREMENT10" },
  { type: "RESET" },
];
const [
  incrementAction,
  decrementAction,
  incrementAction10,
  decrementAction10,
  resetAction,
] = actions;

let initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT10":
      return state + 10;
    case "DECREMENT10":
      return state - 10;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const { createStore } = Redux;
const store = createStore(counterReducer);
const render = () => {
  counterRender.innerText = store.getState();
};
render();
const dispatch = (para1, para2) => {
  para1.addEventListener("click", () => store.dispatch(para2));
};
dispatch(incrementButton, incrementAction);
dispatch(decrementButton, decrementAction);
dispatch(incrementButton10, incrementAction10);
dispatch(decrementButton10, decrementAction10);
dispatch(reset, resetAction);
store.subscribe(render);
