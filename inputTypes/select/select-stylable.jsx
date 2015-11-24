rmui.stylableDropDown = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState(){
    let index = this.props.selectedIndex
    return {
      selectedIndex: index
    }
  },

  getOptions(){
    return this.props.options.map(function(option) {
      return <option>{option}</option>
    }).join(' ');
  },

  _getValue() {
    let stylableSelect = this.refs.stylableSelect.getDOMNode()
    let value = $(stylableSelect).val()
    this.props.onChange(null,null,value)
  },

  componentDidMount(){
    let stylableSelect = this.refs.stylableSelect.getDOMNode()

    $(stylableSelect).select2({
      minimumResultsForSearch: -1,
      width: '100px',
    });
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    let defaultOptions = [
      {
        label: 'Yes',
        value: true
      },
      {
        label: 'No',
        value: false
      },
    ]
    let options = this.props.options || defaultOptions
    let self = this

    return (
      <select
        className='muiSelectStylable'
        ref='stylableSelect'
        onChange={this._getValue}>
        {
          _.map(options,function(option, index){
            let selected = (index === self.state.selectedIndex )
            selected = selected ? 'selected' : ''
            let optionComponent =  <option key={index} value={option.value}>{option.label}</option>

            if(selected) {
              optionComponent =  <option key={index} selected value={option.value}>{option.label}</option>
              }
              return optionComponent
          })
        }
      </select>
    );
  }
});
