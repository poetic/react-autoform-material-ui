AutoForm.addInputType("contenteditable", {
  template: "afContenteditable_reactAutoformMaterialUi",
  valueOut: function () {
    return this.html();
  },
  contextAdjust: function (context) {
    if (typeof context.atts['data-maxlength'] === "undefined" && typeof context.max === "number") {
      context.atts['data-maxlength'] = context.max;
    }
    return context;
  }
});

Template['afContenteditable_reactAutoformMaterialUi'].events({
  'blur div[contenteditable=true]': function (event, template) {
    template.$(event.target).change();
  }
});

Template['afContenteditable_reactAutoformMaterialUi'].helpers({
  getValue(value) {
    if(Template.instance().view.isRendered){
      Template.instance().$('[contenteditable]').html(value);
    }
  },
  atts() {
    let atts =  this.atts;
    atts.label ? atts.label : "";
    return atts;
  }
});
