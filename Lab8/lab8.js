
function getDataFromForm() {
  alert("it worked!");
  //Create this function.
  var fName = document.getElementsByName('fname');
  var lName = dcument.getElementsByName('lname');

  runAjax(fName, lName);
}

function runAjax(fname, lname){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', './ajax.php', true);
  xhr.send(fname, lname);

  xhr.onload = function() {
    if(xhr.status === 200){
      if(typeof xhr.response === 'string'){
        dpcument.getElementsById('responseString').text = xhr.responseText;
      }
    }
  }


}

function myAjax() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    //Edit this
    
    document.getElementById("stringResponse").innerHTML = this.response;
    }
  xhttp.open("GET", "ajax.php", true);
  xhttp.send();
}

