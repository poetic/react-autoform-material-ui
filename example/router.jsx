Router.configure({
    layoutTemplate: 'pageTemplate'
});
Router.route('/', function() {

  this.render('components');
})

