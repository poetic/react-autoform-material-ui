AutoForm.addInputType("date", {
  template: "afInputDate_reactAutoformMaterialUi",
  valueIn: function (val) {
    //convert Date to string value
    return (val instanceof Date) ? AutoForm.Utility.dateToDateStringUTC(val) : val;
  },
  valueOut: function () {
    let val = this.val();
    if (AutoForm.Utility.isValidDateString(val)) {
      //Date constructor will interpret val as UTC and create
      //date at mignight in the morning of val date in UTC time zone
      return new Date(val);
    } else {
      return null;
    }
  },
  valueConverters: {
    "string": function (val) {
      return (val instanceof Date) ? AutoForm.Utility.dateToDateStringUTC(val) : val;
    },
    "stringArray": function (val) {
      if (val instanceof Date) {
        return [AutoForm.Utility.dateToDateStringUTC(val)];
      }
      return val;
    },
    "number": function (val) {
      return (val instanceof Date) ? val.getTime() : val;
    },
    "numberArray": function (val) {
      if (val instanceof Date) {
        return [val.getTime()];
      }
      return val;
    },
    "dateArray": function (val) {
      if (val instanceof Date) {
        return [val];
      }
      return val;
    }
  },
  contextAdjust: function (context) {
    if (typeof context.atts.max === "undefined" && context.max instanceof Date) {
      context.atts.max = AutoForm.Utility.dateToDateStringUTC(context.max);
    }
    if (typeof context.atts.min === "undefined" && context.min instanceof Date) {
      context.atts.min = AutoForm.Utility.dateToDateStringUTC(context.min);
    }
    return context;
  }
});

const {DatePicker} = mui;
const DatePickerClass = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <DatePicker errorText={this.props.atts.err} hintText={this.props.atts.name} id={this.props.atts.id} name={this.props.atts.id}
       data-schema-key={this.props.atts.dsk}/>
    );
  }
});
Template["afInputDate_reactAutoformMaterialUi"].helpers({
  DatePicker: function(){
    return DatePickerClass;
  },
  atts: function(){
    let atts = new ReactAutoformUtility(this.atts);
    return atts;
  }
})
