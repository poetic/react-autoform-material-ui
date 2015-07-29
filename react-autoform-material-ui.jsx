ThemeManager = new mui.Styles.ThemeManager();
injectTapEventPlugin();

//Hooks Object defined here. Thanks Autoform but we'll take it from here
const hooksObject = {

  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
      Object.keys(Session.keys).forEach(function(key){ Session.set(key, ''); })
  },

  // Called when any submit operation fails
  onError: function(formType, error) {
   Object.keys(Session.keys).forEach(function(key){ Session.set(key, ''); })
    let formId = AutoForm.getFormId();
    error.invalidKeys.map(function(key,index) {
    (index==0) ? Session.set(formId+key.name,error.message) : Session.set(formId+key.name,key.type);
    })
  },

};
AutoForm.addHooks(null, hooksObject);

