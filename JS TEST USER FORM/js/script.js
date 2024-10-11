document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
  event.preventDefault();
  var el = document.getElementById('main-form');

  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var state = el.state.value;

  var fail = "";

  if(name == "" || pass == "" || repass == "" || state == "")
    fail = "fuck you";
  else if(name.length <= 1 || name.length > 50)
    fail = "incorrect name";
  else if(pass != repass)
    fail = "incorrect pass or repass";
  else if(pass.split("&").length > 1)
    fail = "don't use & !"

    if(fail != "") {
      document.getElementById('error').innerHTML = fail;

      return false;
    } else{
      alert("You pretty good, huh");
      window.location = 'https://www.google.com';
    }
}