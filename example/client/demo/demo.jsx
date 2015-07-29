let demo_schemas = {};
sessionCollection = new Mongo.Collection('sessioncollection');


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
  Time: {
    type: String,
    autoform: {
      type: "time"
  }
},
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
  onSuccess: function(formType, result) {
     let html = '';
  sessionCollection.find().forEach(
    function(doc){
      html += '<pre>Got ' + doc['email'] +' for ' + doc['session_text'] + ' at ' + doc['Time'] + '</pre>';
    })

  $('#schema_struct').html(html);
  },


};
AutoForm.addHooks('session_form', hooksObj);
