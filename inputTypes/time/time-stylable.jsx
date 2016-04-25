import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.x',
  'react-dom': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');

const React = require('react');
const ReactDOM = require('react-dom');

rmui.stylableTime = React.createClass({
  getInitialState() {
    const { value: timeValue } = this.props;
    return { timeValue }
  },

  componentDidMount(){
    let self = this;
    let stylableTime = ReactDOM.findDOMNode(this.refs.stylableTime);

    $(stylableTime).on('change',function(e) {
    })
  },

  getValue() {
    return this.state.timeValue;
  },

  onChange(e) {
    const { value: timeValue } = e.target;
    const { onChange } = this.props;
    _.isFunction(onChange) ? onChange(e.target, { value: timeValue }) : null;
    this.setState({ timeValue });
  },

  render() {
    const { timeValue } = this.state;

    return (
      <input
        type="time"
        ref='stylableTime'
        value={timeValue}
        className='muiTimeStylable'
        onChange={ this.onChange }
        />
    );
  }
});
