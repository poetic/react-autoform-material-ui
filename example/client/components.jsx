Components = new Mongo.Collection("components");


Schemas = {};

Schemas.ComponentForm = new SimpleSchema({
  Text: {
    type: String,
label: "Text Input"
  },
  BooleanRadios: {
    type: String,
    optional: true,
    autoform: {
      trueLabel:'Custom label!',
      type: "boolean-radios"
  
    }
  },
  SelectRadio: {
    type: String,
    optional: true,
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "2013", value: 2013},
          {label: "2014", value: 2014},
          {label: "2015", value: 2015}
        ];
      }
    }
  },
  Button: {
    type: String,
    optional: true,
    autoform: {
      label: "Button",
      type: "button"
    }
  },
  Date: {
    type: String,
    optional: true,
    autoform: {
       type: "date"
    }
  },
  Email: {
    type: String,
    autoform: {
      label: "Email",
        type: "email"
    }
  },
  Number: {
    type: String,
    optional: true,
    autoform: {
        type: "number",
      afFieldInput: {
        label: "Number"
      }
    }
  },
  Password: {
    type: String,
    optional: false,
    autoform: {
      type: "password",
      afFieldInput: {
        
      }
    }
  },
  RadioButton: {
    type: String,
    optional: true,
    autoform: {
      type: "radio",
      afFieldInput: {
        
      }
    }
  },
  Range: {
    type: String,
    optional: true,
    autoform: {
      type: "range",
      afFieldInput: {
        
      }
    }
  },
  Reset: {
    type: String,
    optional: true,
    autoform: {
       type: "reset",
      afFieldInput: {
       
      }
    }
  },
  SelectMultiple: {
    type: String,
    optional: true,
    autoform: {
      type: "select-multiple",
      options: function () {
        return [
          {label: "multiple!", value: 2013},
          {label: "2014", value: 2014},
          {label: "2015", value: 2015}
        ];
      }
    }
  },
  TextArea: {
    type: String,
    optional: true,
    autoform: {
       type: "textarea",
      afFieldInput: {
       
      }
    }
  },
  Time: {
    type: String,
    optional: true,
    autoform: {
      type: "time"
  }
},
  Select: {
    type: String,
    optional: true,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "2013", value: 2013},
          {label: "2014", value: 2014},
          {label: "2015", value: 2015}
        ];
      }
    }
  }
});

Components.attachSchema(Schemas.ComponentForm);
