// const app = document.getElementById('app');

// const el = document.createElement('div');
// el.className = 'orange';
// el.innerText = 'Hello'

// app.appendChild(el);

const el = React.createElement(
  "div",
  { className: "orange" },
  "Hello From Pluralsight and React"
);

ReactDOM.render(el, document.getElementById("app"));
