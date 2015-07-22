AutoForm.addInputType("contenteditable", {
  template: "afContenteditable_autoform-material-design-lite",
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

Template['afContenteditable_autoform-material-design-lite'].events({
  'blur div[contenteditable=true]': function (event, template) {
    template.$(event.target).change();
  }
});

Template['afContenteditable_autoform-material-design-lite'].helpers({
  getValue: function (value) {
    if(Template.instance().view.isRendered){
      Template.instance().$('[contenteditable]').html(value);
    }
  }
});
