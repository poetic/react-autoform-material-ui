let demo_schemas = {};
sessionCollection = new Mongo.Collection('sessioncollection');
sessionCollection.find().observe({
  added: renderer,
  removed:renderer,
  changed: renderer,
})

demo_schemas.sessionSchema = new SimpleSchema({
  session_text: {
    type: String,
    label: 'Name'
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "E-mail address"
  },
  Date: {
    type: String,
    autoform: {
      type: "date"
    }
  },
  Time: {
    type: String,
    autoform: {
      type: "time"
    }
  },
  Select: {
    type: String,
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


sessionCollection.attachSchema(demo_schemas.sessionSchema);

Template['demo'].helpers({

  session_collection() {
    // Returns the session collection
    return sessionCollection;
  }
})

Template['demo'].rendered = function() {
  renderer();

}

function renderer() {
  let html = '';
  sessionCollection.find().forEach(
    function(doc){
      html += '<pre>Got ' + doc['email'] +' for ' + doc['session_text'] + ' at ' + doc['Time'] +'</pre>';
    })

    $('#schema_struct').html(html);
}




const hooksObj = {

  // Called when any submit operation succeeds
  onSubmit(formType, result) {
    this.event.preventDefault(); //Prevent default form submission
    sessionCollection.insert(result.$set)

    let formId = AutoForm.getFormId();
    $('#'+formId)[0].reset();//clear form
  },

};
AutoForm.addHooks('session_form', hooksObj);
