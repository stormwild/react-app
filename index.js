// const app = document.getElementById('app');

// const el = document.createElement('div');
// el.className = 'orange';
// el.innerText = 'Hello'

// app.appendChild(el);

class Hello extends React.Component {
  render() {
    return React.createElement(
      "h1",
      { className: "orange" },
      "Hello From Pluralsight and React: " + this.props.time
    );
  }
}

ReactDOM.render(
  React.createElement(Hello, { time: new Date().toLocaleDateString() }, null),
  document.getElementById("app")
);
