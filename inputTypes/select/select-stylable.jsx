import React from 'react';
import { RaisedButton } from 'material-ui';

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
    let self = this;
    const stylableSelect = this.refs.stylableSelect;

    $(stylableSelect).on('change',function(e) {
      let target = e.target
      let selectedIndex  = target.selectedIndex
      let value  = {
        value: target.value
      }
      console.log('dome');
      self.props.onChange(target,selectedIndex,value)
    })

  },

  getChildContext() {
    const muiTheme = rmui.getComponentThemes();
    return {
      muiTheme, 
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
          _.map(options, (option, index) => {
            console.log('spmeee');
            return (
              <option 
                key={index}
                selected={ (index === self.state.selectedIndex ) }
                value={option.value}>{option.label}</option>
              ); 
          })
        }
      </select>
    );
  }
});
