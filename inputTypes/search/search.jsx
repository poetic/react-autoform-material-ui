AutoForm.addInputType("search", {
  template: "afInputSearch_reactAutoformMaterialUi",
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

Template['afInputSearch_reactAutoformMaterialUi'].helpers({
  atts() {
    let atts = this.atts;

    return atts;
  },

  search() {

    return Search;
  }
})
<FontIcon className="muidocs-icon-action-home" />