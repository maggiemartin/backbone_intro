
var Member = Backbone.Model.extend({

  defaults: {
    name: '',
    email: '',
    username: '',
    password: ''
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

/*var check = function(){


if (document.Form1.checkbox1.checked == true)
  {
    (this).status === 'true';
    console.log('true!!!');

  }
else if(document.Form1.checkbox1.checked == false)
  {
    (this).status === 'false';
    console.log('false!!!');
  }
};*/
$('#join-us').on('click', function (event){
    event.preventDefault();
    

    $('.Join').fadeIn();

});
$('#memberForm').on('submit', function (event){
  event.preventDefault();


  var member_name = $('#name').val();
  var member_email = $('#email').val();


  var m = new Member({
    name: member_name,
    email: member_email

  });




  all_members.add(m);

  m.save();

  console.log(m)



  $('#name').val('');
  $('#email').val('');

});
