import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.x',
  'react-dom': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');

const React = require('react');
const ReactDOM = require('react-dom');

rmui.stylableTime = React.createClass({
  componentDidMount(){
    let self = this;
    let stylableTime = ReactDOM.findDOMNode(this.refs.stylableTime);

    $(stylableTime).on('change',function(e) {
      let {target} = e;
      const { onChange } = self.props;
      let value  = {
        value: target.value
      }
      _.isFunction(onChange) ? onChange(target,value) : null;
    })
  },

  render() {
    let timeValue = this.props.value;

    return (
      <input
        type="time"
        ref='stylableTime'
        defaultValue={timeValue}
        className='muiTimeStylable'
        />
    );
  }
});
