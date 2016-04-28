import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.x',
  'react-dom': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');

const React = require('react');
const ReactDOM = require('react-dom');
const { RaisedButton } = require('material-ui');

export default StylableDropDown = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState(){
    const { selectedIndex } = this.props;
    return { selectedIndex };
  },

  getOptions(){
    return this.props.options.map(function(option) {
      return <option>{option}</option>
    }).join(' ');
  },

  _getValue() {
    const stylableSelect = ReactDOM.findDOMNode(this.refs.stylableSelect);
    const value = $(stylableSelect).val();

    this.props.onChange(null,null, { value });
  },

  reportChange(e) {
    const { target } = e;
    const {value , selectedIndex }  = target;
    const options  = {
      value,
    };
    this.props.onChange(target, selectedIndex, options);
    this.setState({ value });
  },

  getChildContext() {
    const muiTheme = rmui.getComponentThemes();
    return {
      muiTheme, 
    };
  },

  render() {
    const defaultOptions = [
      {
        label: 'Yes',
        value: true
      },
      {
        label: 'No',
        value: false
      },
    ];
    const { defaultValue, options = defaultOptions, disable } = this.props;

    return (
      <select
        className='muiSelectStylable'
        ref='stylableSelect'
        onChange={ this.reportChange }
        defaultValue={ defaultValue }
        disabled={ disable }
      >
        {
          _.map(options, (option, index) => {
            return (
              <option 
                key={index}
                value={option.value}>
                {option.label}
              </option>
              ); 
          })
        }
      </select>
    );
  }
});
