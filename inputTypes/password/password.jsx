AutoForm.addInputType("password", {
  template: "afInputPassword_reactAutoformMaterialUi",
  valueConverters: {
    "stringArray": function (val) {
      if (typeof val === "string" && val.length > 0) {
        return [val];
      }
      return val;
    }
  },
  contextAdjust: function (context) {
    if (typeof context.atts.maxlength === "undefined" && typeof context.max === "number") {
      context.atts.maxlength = context.max;
    }
    return context;
  }
});

const {TextField} = mui;
const Password = React.createClass({
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
    <div>
      <TextField type="password" floatingLabelText={this.props.atts.label}
       errorText={Session.get(this.props.atts.err)}
       id={this.props.atts.id} name={this.props.atts.id}
       data-schema-key={this.props.atts.dsk}/>
    </div>
    );
  }
});
Template["afInputPassword_reactAutoformMaterialUi"].helpers({
  Password: function(){
    return Password;
  },
  atts(){
    let atts = new ReactAutoformUtility(this.atts);
    return atts;
  }
})