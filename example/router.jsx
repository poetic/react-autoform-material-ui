Router.configure({
    layoutTemplate: 'pageTemplate'
});
Router.route('/', function() {
	homeController = this;
  this.render('components');
})

