class PictureYaml extends React.Component {
  render() {
    return (
      <div class="col-md-6" id="yaml-panel">
        <pre>
         <code>
            &nbsp;&nbsp;-<br />
            &nbsp;&nbsp;&nbsp;&nbsp;image: { this.props.filename }<br />
            &nbsp;&nbsp;&nbsp;&nbsp;image_title: { this.props.title }<br />
            &nbsp;&nbsp;&nbsp;&nbsp;caption: { this.props.caption }<br />
            &nbsp;&nbsp;&nbsp;&nbsp;description: { this.props.description }<br />
            &nbsp;&nbsp;&nbsp;&nbsp;alt: { this.props.alt }<br />
            &nbsp;&nbsp;&nbsp;&nbsp;month: { this.props.month }<br />
          </code>
        </pre>
      </div>
    );
  }
}
