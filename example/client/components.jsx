Components = new Mongo.Collection("components");
Schemas = {};

Schemas.ComponentForm = new SimpleSchema({
  textTest: {
    type: String,
    max: 1000,
    autoform: {
         label: "Text Input",
         type: 'text'
    }
  },
  boolRadioTest: {
    type: String,
    optional: true,
    autoform: {
      trueLabel: "Custom boolean label!",
      type: "boolean-radios"
  
    }
  },
  boolSelectTest:{
    type: String,
    optional: true,
    autoform: {
      type: "boolean-select"
      
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
  // BooleanRadio: {
  //   type: String,
  //   optional: true,
  //   autoform: {
  //     label: "Boolean Radio Button"
  //     afFieldInput: {
  //       type: "boolean-checkbox"
  //     }
  //   }
  // },
  testBtn: {
    type: String,
    optional: true,
    autoform: {
      label: "Button",
      type: "button"
    }
  },
  date: {
    type: String,
    optional: true,
    autoform: {
       type: "date"
    }
  },
  cedit: {
    type: String,
    optional: true,
    autoform: {
      label:"You can edit this!",
      type: "contenteditable"
    }
  },
  // datetimelocal: {
  //   type: String,
  //   optional: true,
  //   autoform: {
  //     afFieldInput: {
  //       type: "datetime-local"
  //     }
  //   }
  // },
  email_test: {
    type: String,
    autoform: {
        type: "email"
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
  // monthTest: {
  //   type: String,
  //   optional: true,
  //   autoform: {
  //     afFieldInput: {
  //       type: "month"
  //     }
  //   }
  // },
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
    // max:200,
    // min:5,
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
Components.attachSchema(Schemas.ComponentForm);
