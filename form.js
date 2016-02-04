class PictureForm extends React.Component {
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
  }

  handleChange(e) {
    var o = {};
    o[e.target.id] = e.target.value;
    this.setState(o);
  }

  render() {
    return (
      <div className="row" >
        <div className="col-md-6" id="form-panel">

          <form action="get" post="#">

            <div className="form-group">
              <label for="image">Image file:</label>
              <input type="text" name="filename" id="filename" className="form-control" onChange={ (event) => this.handleChange(event) } />
            </div>

            <div className="form-group">
              <label for="alt">Image alt:</label>
              <input type="text" name="alt" id="alt" className="form-control" onChange={ (event) => this.handleChange(event) } />
            </div>

            <div className="form-group">
              <label for="caption">Main page caption:</label>
              <input type="text" name="caption" id="caption" className="form-control" onChange={ (event) => this.handleChange(event) } />
            </div>

            <div className="form-group">
              <label for="title">Image title:</label>
              <input type="text" name="title" id="title" className="form-control" onChange={ (event) => this.handleChange(event) } />
            </div>

            <div className="form-group">
              <label for="description">Image description:</label>
              <textarea name="description" id="description" className="form-control" rows="10" onChange={ (event) => this.handleChange(event) } ></textarea>
            </div>

            <div className="form-group">
              <label for="month">Month:</label>
              <select name="month" id="month" className="form-control">
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>

            <input type="button" value="Clear" className="btn btn-default" />

          </form>

        </div>

        <PictureYaml filename={ this.state.filename }
                     title={ this.state.title }
                     caption={ this.state.caption }
                     description={ this.state.description }
                     alt={ this.state.alt }
                     month={ this.state.month } />
      </div>
    );
  }
}

class PictureYaml extends React.Component {
  render() {
    return (
      <div className="col-md-6" id="yaml-panel">
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

ReactDOM.render(
  <PictureForm />,
  document.getElementById('app')
);
