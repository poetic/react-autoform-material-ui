Contacts = new Mongo.Collection("Contacts");
 if (Meteor.isServer) 
  {
    AutoForm.setDefaultTemplate('reactAutoformMaterialUi');
  }
Schemas = {};

Schemas.ContactForm = new SimpleSchema({
  textTest: {
    type: String,
    label: "Text Test",
    max: 1000,
    custom: function(){
      return "something";
    }
  },
  boolRadioTest: {
    type: String,
    optional: true,
    autoform: {
      trueLabel: "true!",
      afFieldInput: {
        type: "boolean-radios"
      }
    }
  },
  boolSelectTest:{
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "boolean-select"
      }
      
    }
  },
  selectRadioTest: {
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
  boolCheck: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "boolean-checkbox"
      }
    }
  },
  testBtn: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "button"
      },
      label: false
    }
  },
  date: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "date"
      }
    }
  },
  cedit: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "contenteditable"
      }
    }
  },
  datetimelocal: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "datetime-local"
      }
    }
  },
  email_test: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "email"
      }
    }
  },
  fileTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "file"
      }
    }
  },
  monthTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "month"
      }
    }
  },
  numberTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "number"
      }
    }
  },
  passwordTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "password"
      }
    }
  },
  radioTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "radio"
      }
    }
  },
  rangeTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "range"
      }
    }
  },
  resetTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "reset"
      }
    }
  },
  // searchTest: {
  //   type: String,
  //   optional: true,
  //   autoform: {
  //     afFieldInput: {
  //       type: "search"
  //     }
  //   }
  // },
  // selectRadioTest: {
  //       type: String,
  //   optional: true,
  //   autoform: {
  //     type: "select-radio",
  //     options: function () {
  //       return [
  //         {label: "2013", value: 2013},
  //         {label: "2014", value: 2014},
  //         {label: "2015", value: 2015}
  //       ];
  //     }
  //   }
  // },
  // selectRadioInlineTest: {
  //   type: String,
  //   optional: true,
  //   autoform: {
  //     type: "select-radio-inline",
  //     options: function () {
  //       return [
  //         {label: "2013", value: 2013},
  //         {label: "2014", value: 2014},
  //         {label: "2015", value: 2015}
  //       ];
  //     }
  //   }
  // },
  // select_checboxTest: {
  //   type: String,
  //   optional: true,
  //   autoform: {
  //     type: "select-checkbox",
  //     options: function () {
  //       return [
  //         {label: "2013", value: 2013},
  //         {label: "2014", value: 2014},
  //         {label: "2015", value: 2015}
  //       ];
  //     }
  //   }
  // },
  // select_checboxTest_inline: {
  //   type: String,
  //   optional: true,
  //   autoform: {
  //     type: "select-checkbox-inline",
  //     options: function () {
  //       return [
  //         {label: "2013", value: 2013},
  //         {label: "2014", value: 2014},
  //         {label: "2015", value: 2015}
  //       ];
  //     }
  //   }
  // },
  selectMultipleTest: {
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
  telTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "tel"
      }
    }
  },
  textAreaTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "textarea"
      }
    }
  },
  timeTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "time"
      }
    }
  },
  urlTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "url"
      }
    }
  },
  weekTest: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "week"
      }
    }
  },
  selectTest: {
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
Contacts.attachSchema(Schemas.ContactForm);




