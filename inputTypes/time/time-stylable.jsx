import checkVersions from '../../check-versions.jsx';

checkVersions();

const React = require('react');
const ReactDOM = require('react-dom');

rmui.stylableTime = React.createClass({
  getInitialState() {
    const { value: timeValue } = this.props;
    return { timeValue }
  },

  componentWillReceiveProps(newProps) {
    const { value: timeValue } = newProps;
    this.setState({ timeValue });
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
    const { disable } = this.props;

    return (
      <input
        type="time"
        disabled={ disable }
        ref='stylableTime'
        value={timeValue}
        className='muiTimeStylable'
        onChange={ this.onChange }
      />
    );
  }
});
