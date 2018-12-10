var address;

var getAddress = function () {
    var xhttpRequest = new XMLHttpRequest();
    xhttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            address = JSON.parse(this.responseText);
        }
    };
    xhttpRequest.open("GET", "..assets/address.json", true);
    xhttpRequest.send();

    var headers = [];
    for (var i = 0; i < address.length; i++) {
        for (var key in address[i]) {
            if (headers.indexOf(key) === -1) {
                headers.push(key);
            }
        }
    }
    var table = document.createElement("TABLE");
    var tr = table.insertRow(-1);

    for (var i = 0; i < headers.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = headers[i];
        tr.appendChild(th);
    }

  for (var i = 0; i < address.length; i++) {

      tr = table.insertRow(-1);
      
      for (var j = 0; j < headers.length; j++) {
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = address[i][headers[j]];
      }
  }

  var divContainer = document.getElementById("table");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);

  var addressDetails = document.getElementById("Info");
  addressDetails.innerHTML = "";
  for (i = 0; i < headers.length; i++) {
    var label = document.createElement("LABEL");
    label.innerHTML = headers[i];
    addressDetails.appendChild(label);
    var addressInfo = document.createElement("Input");
    addressInfo.type = "text";
    var information = address[0][headers[i]];
    addressInfo.value = information;
    addressDetails.appendChild(addressInfo);
  }
}

