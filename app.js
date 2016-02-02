class Yaml extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                   filename: '',
                   title: '',
                   caption: '',
                   description: '',
                   alt: '',
                   month: ''
                 };

    console.log("thing");
    console.log(document.getElementById("image").getAttribute("name"));
    this.testFunc();
    document.getElementById("image").addEventListener("onChange", this.testFunc);
  }

  testFunc() {
    console.log("foobars");
  }

  updateYaml(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <pre>
       <code>
          &nbsp;&nbsp;-<br />
          &nbsp;&nbsp;&nbsp;&nbsp;image: { this.state.filename }<br />
          &nbsp;&nbsp;&nbsp;&nbsp;image_title: { this.state.title }<br />
          &nbsp;&nbsp;&nbsp;&nbsp;caption: { this.state.caption }<br />
          &nbsp;&nbsp;&nbsp;&nbsp;description: { this.state.description }<br />
          &nbsp;&nbsp;&nbsp;&nbsp;alt: { this.state.alt }<br />
          &nbsp;&nbsp;&nbsp;&nbsp;month: { this.state.month }<br />
        </code>
      </pre>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount(e) {
    e.preventDefault();
    this.setState({ count: ++this.state.count });
  }

  render() {
    return (
      <div>
        <p>Current Count: { this.state.count }</p>
        <a onClick={ (event) => this.incrementCount(event) }>Increment Me</a>
      </div>
    );
  }
}

ReactDOM.render(
  <Yaml />,
  document.getElementById('yaml')
);
