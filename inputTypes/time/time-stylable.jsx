rmui.stylableTime = React.createClass({
  componentDidMount(){
    let self = this;
    let stylableTime = this.refs.stylableTime.getDOMNode();

    $(stylableTime).on('change',function(e) {
      let {target} = e;
      let value  = {
        value: target.value
      }
      self.props.onChange(target,value)
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
