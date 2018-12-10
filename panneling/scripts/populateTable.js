var addressDetails = function () {

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'assets/address.json', true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4) {

            var addressJson = JSON.parse(httpRequest.responseText);
            var table = document.getElementById('info-table');
            constructAddress(addressJson);
            console.log(addressJson);
        }
    }
}

var personDetails = function () {

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'assets/person.json', true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4) {

            var personJson = JSON.parse(httpRequest.responseText);
            var table = document.getElementById('info-table');
            constructPerson(personJson);
            console.log(personJson);
        }
    }
}

var loadAddress = function() {

    var table = document.getElementById('info-table');
    for(var i = 1; i < table.rows.length; i++){

        table.rows[i].onclick = function() {

            document.getElementById('street').value = this.cells[0].innerHTML;
            document.getElementById('city').value = this.cells[1].innerHTML;
            document.getElementById('code').value = this.cells[2].innerHTML;
        };
    }
}

var loadPerson = function() {

    var table = document.getElementById('info-table');
    for(var i = 1; i < table.rows.length; i++){

        table.rows[i].onclick = function() {

            document.getElementById('firstname').value = this.cells[0].innerHTML;
            document.getElementById('lastname').value = this.cells[1].innerHTML;
            document.getElementById('email').value = this.cells[2].innerHTML;
            document.getElementById('dob').value = this.cells[3].innerHTML;
        };
    }
}

var constructAddress = function(addressJson) {

    var constructTable = '<tr><th>Street</th><th>City</th><th>Postal Code</th></tr>';

    for(var i in addressJson) {

        constructTable += '<tr><td>' + addressJson[i].street
                          + '</td><td>' + addressJson[i].city
                          + '</td><td>' + addressJson[i].postal_code
                          + '</td></tr>'
    }
    document.getElementById('info-table').innerHTML = constructTable;
    loadAddress();
}

 function displayAddressForm (){
     document.getElementById("address-form").style.display = "block";
     document.getElementById("person-form").style.display = "none";
 }
 
 function displayPersonForm (){
     document.getElementById("person-form").style.display = "block";
     document.getElementById("address-form").style.display = "none";
 }

var constructPerson = function(personJson) {

    var constructTable = '<tr><th>First Name</th><th>Last Name </th><th>email</th><th>Birth Date</th></tr>'
                         
    for (var i in personJson) {
        
        constructTable += '<tr><td>' + personJson[i].firstName
                          + '</td><td>' + personJson[i].lastName
                          + '</td><td>' + personJson[i].email
                          + '</td><td>' + personJson[i].birth_date
                          + '</td><tr>'
    }
    document.getElementById('info-table').innerHTML = constructTable;
    loadPerson();
}

var addressSubmit = function() {

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'assets/address.json', true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4) {

            var addressJson = JSON.parse(httpRequest.responseText);
            console.log(addressJson);
            var street = document.getElementById('street').value;
            var city = document.getElementById('city').value;
            var code = document.getElementById('code').value;
            var address = {
                           'street' : street,
                           'city' : city,
                           'postal_code' : code,
                          }
            console.log(address);
            addressJson.push(address);
            constructAddress(addressJson);
        }
    }
}

var personSubmit = function() {

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'assets/person.json', true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4) {

            var personJson = JSON.parse(httpRequest.responseText);
            console.log(personJson);
            var firstName = document.getElementById('firstname').value;
            var lastName = document.getElementById('lastname').value;
            var email = document.getElementById('email').value;
            var dob = document.getElementById('dob').value;
            var person = {
                          'firstName' : firstName,
                          'lastName' : lastName,
                          'email' : email,
                          'birth_date' : dob,
                          }
            console.log(person);
            personJson.push(person);
            constructPerson(personJson);
        }
    }
}

