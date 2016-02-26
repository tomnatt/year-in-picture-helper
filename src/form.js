class PictureForm extends React.Component {

  componentWillMount() {
    // set the initial photographer and this month
    let p = 'andrew';
    let m = Object.keys(this.months())[new Date().getMonth()];

    // set the state and create initial filename
    this.setState({ photographer: p, month: m });
    this.updateFilename(p, m);
  }

  handleChange(e) {
    let o = {};
    o[e.target.id] = e.target.value;
    this.setState(o);

    if (e.target.id == 'photographer' || e.target.id == 'month') {
      let p = (e.target.id == 'photographer' ? e.target.value : this.state.photographer);
      let m = (e.target.id == 'month' ? e.target.value : this.state.month);
      this.updateFilename(p, m);
    }
  }

  updateFilename(p, m) {
    this.setState({ filename: this.months()[m] + "-" + p + ".jpg" });
  }

  months() {
    return {
             "january": "01",
             "february": "02",
             "march": "03",
             "april": "04",
             "may": "05",
             "june": "06",
             "july": "07",
             "august": "08",
             "september": "09",
             "october": "10",
             "november": "11",
             "december": "12"
           };
  }

  photographers() {
    return [
             "andrew",
             "dad",
             "dan",
             "ed",
             "gareth",
             "hon",
             "kirsty",
             "lyns",
             "michael",
             "sheena",
             "shelley",
             "tom"
           ];
  }

  selectOption(string, index) {
    return <option key={ index } value={ string }>
             { string.charAt(0).toUpperCase() + string.slice(1) }
           </option>;
  }

  clear() {
    this.setState({
                    caption: '',
                    title: '',
                    description: '',
                    alt: ''
                  });
  }

  render() {
    return (
      <div className="row" >
        <div className="col-md-6" id="form-panel">

          <form action="get" post="#">

            <div className="form-group">
              <label htmlFor="photographer">Photographer:</label>
              <select name="photographer" id="photographer" className="form-control" onChange={ (event) => this.handleChange(event) }>
                { this.photographers().map(this.selectOption) }
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="caption">Main page caption:</label>
              <input type="text"
                     name="caption"
                     id="caption"
                     className="form-control"
                     value={ this.state.caption }
                     onChange={ (event) => this.handleChange(event) } />
            </div>

            <div className="form-group">
              <label htmlFor="title">Image title:</label>
              <input type="text"
                     name="title"
                     id="title"
                     className="form-control"
                     value={ this.state.title }
                     onChange={ (event) => this.handleChange(event) } />
            </div>

            <div className="form-group">
              <label htmlFor="description">Image description:</label>
              <textarea name="description"
                        id="description"
                        className="form-control"
                        rows="10"
                        value={ this.state.description }
                        onChange={ (event) => this.handleChange(event) } ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="alt">Image alt:</label>
              <input type="text"
                     name="alt"
                     id="alt"
                     className="form-control"
                     value={ this.state.alt }
                     onChange={ (event) => this.handleChange(event) } />
            </div>

            <div className="form-group">
              <label htmlFor="month">Month:</label>
              <select name="month" id="month" className="form-control" onChange={ (event) => this.handleChange(event) } value={ this.state.month }>
                { Object.keys(this.months()).map(this.selectOption) }
              </select>
            </div>

            <input type="button"
                   value="Clear"
                   className="btn btn-default"
                   onClick={ () => this.clear() } />

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
