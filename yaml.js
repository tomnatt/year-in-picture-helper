class Yaml extends React.Component {
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

ReactDOM.render(
  <Yaml />,
  document.getElementById('yaml-panel')
);
