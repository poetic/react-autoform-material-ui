rmui.stylableTime = React.createClass({
  getInitialState(){
    let index = this.props.selectedIndex
    return {
      selectedIndex: index
    }
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
  },

  render() {
    let {value} = this.props;
    let timeValue = value || '';

    if(timeValue) {
      let timeObject = timeValue.split(':');

      //This step ensures there is a valid time format
      let hour = '0' + timeObject[0];
      hour = hour.slice(hour.length-2);
      let minute = '0' + timeObject[1];
      minute = minute.slice(minute.length-2);

      timeValue = hour +':'+ minute;
    }

    return (
      <input
        type="time"
        defaultValue={timeValue}
        className='muiTimeStylable'
        />
    );
  }
});
