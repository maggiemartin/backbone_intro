/*
var Member = Backbone.Model.extend({

  defaults: {
    name: '',
    email: '',
    mailing: true
  },
  initialize: function () {
    var n = this.get('name');
    console.log(n + ' has been added!')
  }

});

var Members = Backbone.Collection.extend ({

  model: Member,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/aaintro'

});

var all_members = new Members();
*/
$('#memberForm').on('submit', function (event){
  event.preventDefault();
/*/
  e.preventDefault();
  var member_name = $('#name').val();
  var member_email = $('#email').val();

  var m = new Member({
    name: member_name,
    email: member_email
  });

  all_members.add(m);

  m.save();

  console.log(m)*/
  $('.hero-unit').fadeOut(300, function (){

  });



});
