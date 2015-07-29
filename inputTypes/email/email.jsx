AutoForm.addInputType("email", {
  template: "afInputEmail_reactAutoformMaterialUi",
  contextAdjust: function (context) {
    if (typeof context.atts.maxlength === "undefined" && typeof context.max === "number") {
      context.atts.maxlength = context.max;
    }

    return context;
  },
  valueOut() {
    debugger;
    return this.val();
  }
});


const { TextField } = mui;
const Email = React.createClass({

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

      <TextField
        floatingLabelText={this.props.atts.label}
        errorText={Session.get(this.props.atts.err)} 
        id={this.props.atts.id} name={this.props.atts.id}
       data-schema-key={this.props.atts.dsk} />

    );
  }
});

Template['afInputEmail_reactAutoformMaterialUi'].helpers({
  Email(){
    return Email;
  },
  atts() {   
    let atts = new ReactAutoformUtility(this.atts);
    return atts;
  }
});