var read = function () {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var person = JSON.parse(this.responseText);
            print(person);
        }
    };
    request.open("GET", "assets/person.json", true);
    request.send();
}

var format = function (person) {

    var perzon = "Name: " + person.firstName + " " + person.lastName +
                 "<br>email: " + person.email +
                 "<br>DOB :" + person.birthDate +
                 "<br>address : " + person.street + ", " + person.city + 
                 ", " + person.postalCode +
                 "<br>isAdmin? : " + person.admin + "<br><br>";
    return perzon;
}

var print = function (person) {
    for(var i = 0; i < person.length; i++) {
        document.getElementById("personList").innerHTML += format(person[i]);
    }
}