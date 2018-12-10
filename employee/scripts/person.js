var person;
var headerLength;

var getPerson = function () {
    var xhttpRequest = new XMLHttpRequest();
    xhttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            person = JSON.parse(this.responseText);
        }
    };
    xhttpRequest.open("GET", "..assets/person.json", true);
    xhttpRequest.send();

    var headers = [];
    for (var i = 0; i < person.length; i++) {
        for (var key in person[i]) {
            if (headers.indexOf(key) === -1) {
                headers.push(key);
            }
        }
    }
    headerLength = headers.length;
    var table = document.createElement("TABLE");
    var tr = table.insertRow(-1);

    for (var i = 0; i < headers.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = headers[i];
        tr.appendChild(th);
    }

  for (var i = 0; i < person.length; i++) {

      tr = table.insertRow(-1);
      
      for (var j = 0; j < headers.length; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = person[i][headers[j]];
      }
  }

  var divContainer = document.getElementById("table");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);

  var personDetails = document.getElementById("Info");
  personDetails.innerHTML = "";
  for (i = 0; i < headers.length; i++) {
    var label = document.createElement("LABEL");
    label.innerHTML = headers[i];
    personDetails.appendChild(label);
    var personInfo = document.createElement("Input");
    personInfo.type = "text";
    personInfo.id = headers[i];
    var information = person[0][headers[i]];
    personInfo.value = information;
    personDetails.appendChild(personInfo);
  }

  populateForm(table);

  document.getElementById("addPerson").style.display = "block";
  var add = document.getElementById("addPerson");
  add.innerHTML = "add";
  add.onclick = function () {
    document.getElementById("id").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("mailId").value = "";
    document.getElementById("birthDate").value = "";
  }

  document.getElementById("submitPerson").style.display = "block";
  var submit = document.getElementById("submitPerson");
  submit.innerHTML = "submit";
  // var newPerson = new Array();
  submit.onclick = function () {
    // newPerson.push({headers[0] : document.getElementById("id").value, 
    // headers[1]: document.getElementById("firstName").value, 
    // headers[2]: document.getElementById("lastName").value, 
    // headers[3]: document.getElementById("mailId").value, 
    // headers[4]: document.getElementById("birthDate").value});

    var newPerson = {
      "id" : document.getElementById("id").value, 
      "firstName" : document.getElementById("firstName").value, 
      "lastName" : document.getElementById("lastName").value, 
      "mailId" : document.getElementById("mailId").value, 
      "birthDate" : document.getElementById("birthDate").value
    };
    console.log(newPerson);
    postPerson(newPerson);
  }
}

function populateForm(table) {
    for (i = 0; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        document.getElementById("id").value = this.cells[0].innerHTML;
        document.getElementById("firstName").value = this.cells[1].innerHTML;
        document.getElementById("lastName").value = this.cells[2].innerHTML;
        document.getElementById("mailId").value = this.cells[3].innerHTML;
        document.getElementById("birthDate").value = this.cells[4].innerHTML;
      }
    }
}

function postPerson(newPerson) {
  console.log("postPerson");
  var createdPerson = JSON.stringify(newPerson);
  var xhttpRequest = new XMLHttpRequest();
    xhttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            this.responseText;
        }
    };
    xhttpRequest.open("POST", "..assets/person.json", true);
    xhttpRequest.send(createdPerson);
}
