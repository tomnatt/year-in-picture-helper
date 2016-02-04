class PictureForm extends React.Component {
  constructor(props) {
    super(props);

    let p = 'andrew'; // TODO: can I pull this from the form?
    let m = 'january'; // TODO: can I pull this from the form?

    this.state = {
                   photographer: p,
                   filename: this.updateFilename(p, m),
                   title: '',
                   caption: '',
                   description: '',
                   alt: '',
                   month: m
                 };
  }

  handleChange(e) {
    let o = {};
    o[e.target.id] = e.target.value;
    this.setState(o);

    if (e.target.id == 'photographer' || e.target.id == 'month') {
      let photographer = (e.target.id == 'photographer' ? e.target.value : this.state.photographer);
      let month = (e.target.id == 'month' ? e.target.value : this.state.month);
      this.updateFilename(photographer, month);
    }
  }

  updateFilename(p, m) {
    this.setState({ filename: this.lookupMonth(m) + "-" + p + ".jpg" });
  }

  lookupMonth(m) {
    let months = {
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
    return months[m];
  }

  render() {
    return (
      <div className="row" >
        <div className="col-md-6" id="form-panel">

          <form action="get" post="#">

            <div className="form-group">
              <label for="photographer">Photographer:</label>
              <select name="photographer" id="photographer" className="form-control" onChange={ (event) => this.handleChange(event) }>
                <option value="andrew">Andrew</option>
                <option value="dad">Dad</option>
                <option value="dan">Dan</option>
                <option value="ed">Ed</option>
                <option value="gareth">Gareth</option>
                <option value="hon">Honey</option>
                <option value="kirsty">Kirsty</option>
                <option value="lyns">Lyns</option>
                <option value="michael">Michael</option>
                <option value="sheena">Sheena</option>
                <option value="shelley">Shelley</option>
                <option value="tom">Tom</option>
              </select>
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
              <label for="alt">Image alt:</label>
              <input type="text" name="alt" id="alt" className="form-control" onChange={ (event) => this.handleChange(event) } />
            </div>

            <div className="form-group">
              <label for="month">Month:</label>
              <select name="month" id="month" className="form-control" onChange={ (event) => this.handleChange(event) }>
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
