ReactAutoformUtility = function(atts){

  try
  {
    this.label =  (AutoForm.getSchemaForField(atts.name).label == null || undefined) ? atts.name : AutoForm.getSchemaForField(atts.name).label ;
  }catch(e)
  {
    console.warn(e);
  }

  this.attributes = atts;
  this.formId = AutoForm.getFormId();
  this.schema = AutoForm.getFormSchema();
  this.id = atts.id;
  this.name = atts.name;
  this.dsk = atts['data-schema-key'];
  this.value = atts.value || '';
  this.validationContext = this.schema.namedContext(this.formId);
  this.err = '';
  this.errorStyle = atts.errorStyle;

if (this.validationContext.keyIsInvalid(this.dsk) ) {
  this.err = this.validationContext.keyErrorMessage(this.dsk)
}

  return this;
}

