AutoForm.addInputType("month", {
  template: "afInputMonth_autoform-material-design-lite",
  valueConverters: {
    "stringArray": function (val) {
      if (typeof val === "string" && val.length > 0) {
        return [val];
      }
      return val;
    }
  }
});