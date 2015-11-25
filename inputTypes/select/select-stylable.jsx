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
    value = {
      value: value
    }

    this.props.onChange(null,null,value)
  },

  componentDidMount(){
    let self = this
    let stylableSelect = this.refs.stylableSelect.getDOMNode()

    // let defaultStylableOptions = {
    //   minimumResultsForSearch: -1,
    //   width: '100%',
    // }

    // let stylableOptions = _.extend(defaultStylableOptions,this.props.stylableOptions)
    // $(stylableSelect).select2(stylableOptions);

    $(stylableSelect).on('change',function(e) {
      let target = e.target
      let selectedIndex  = target.selectedIndex
      let value  = {
        value: target.value
      }

      self.props.onChange(target,selectedIndex,value)
    })

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
        >
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
