var requestObject;
var path;
var jsonObject;
var table;
var tr;
var th;
var index;
var addButton;
var requestedEntity;
var entity;

var display = function(requestedEntity) {

    document.getElementById('frontPage')
            .style
            .display = 'block';
    document.getElementById('addBtn')
            .style
            .visibility = 'visible';
    
    // make both address and person form invisible
    document.getElementById('personForm')
            .style
            .display = 'none';
    document.getElementById('addressForm')
            .style
            .display = 'none';
    
    // load the json from assets
    // create xmlHttpRequest object
    requestObject = new XMLHttpRequest();
           
    // get the path of the json file
    if (requestedEntity === 'person') {
        path = 'assets/person.json';
        entity = 'person';
        
    } else if (requestedEntity === 'address') {
        path = 'assets/address1.json';
        entity = 'address';
    }
    // specify the request type and url
    requestObject.open('GET', path, true);
    
    // send request to server
    requestObject.send();
    
    // once request is received, do the needed operation
    requestObject.onreadystatechange = function() {
       
       if (requestObject.readyState == XMLHttpRequest.DONE) {
            
            if (requestObject.status == 200) {  
                 
                 // get the json response
                 jsonObject = JSON.parse(requestObject.responseText);
                 
                 var col = [];
                 for (index = 0; index < jsonObject.length; index++) {
                     for (var key in jsonObject[index]) {
                         if (col.indexOf(key) === -1) {
                             col.push(key);
                         }
                     }
                 }

                // create dynamic table
                table = document.createElement('table');
                table.setAttribute('id', 'table');
        
                // create html header
                tr = table.insertRow(-1);                // table row
                for (index = 0; index < col.length; index++) {
                    var th = document.createElement('th');   // table header
                    th.innerHTML = col[index];
                    tr.appendChild(th);
                }
    
                // add json value to the table as rows
                for (index = 0; index < jsonObject.length; index++) {
                    tr = table.insertRow(-1);
                    for (var key = 0; key < col.length; key++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = jsonObject[index][col[key]];
                    }
                }
    
                // add the newly created table with json data to the container 
                var divContainer = document.getElementById('frontPage');
                divContainer.innerHTML = '';
                divContainer.appendChild(table);
                
                // call the form calling function
                if (entity === 'person') {
                    displayPersonForm();
                } else if (entity === 'address') {
                    displayAddressForm();
                }
                
                        // close form on clicking close button
                        // var closeImage = document.getElementById('close-btn');
                        // closeImage.onclick = function() {
    
                        // alert('inside closing');
                        // // hide the form with data
                        // document.getElementById('form-page')
                                // .style
                                // .display = 'none';
                        // document.getElementById('person-form')
                                // .style
                                // .display = 'none';
                        // // document.getElementById('front-page')
                                // // .style
                                // // .display = 'block';
                        // };
            }
        }
    }
}

var displayPersonForm = function() {
    
    // onclick of the row, data from the table cells should be displayed in the form
    var table = document.getElementById('table');
            
    for(index = 1; index < table.rows.length; index++) {
        //when row is clicked form should be displayed
        table.rows[index].onclick =   function() {
        
            // assign the value of table cells to the form textboxes
            document.getElementById('personId')
                    .value = this.cells[0].innerHTML;
            document.getElementById('firstName')
                    .value = this.cells[1].innerHTML;
            document.getElementById('lastName')
                    .value = this.cells[2].innerHTML;
            document.getElementById('email')
                    .value = this.cells[3].innerHTML;
            document.getElementById('birthDate')
                    .value = this.cells[4].innerHTML;
            
            // display the form with data
            document.getElementById('formPage')
                    .style
                    .display = 'block';
            document.getElementById('personForm')
                    .style
                    .display = 'block';
            document.getElementById('submit')
                    .style
                    .visibility = 'visible';
            document.getElementById('create')
                    .style
                    .visibility = 'hidden';
        }
    }
    
    // display empty form with create button 
    addButton = document.getElementById('addBtn');
    addButton.onclick = function() {
        // display the form without data
            document.getElementById('personId')
                    .value = '';
            document.getElementById('firstName')
                    .value = '';
            document.getElementById('lastName')
                    .value = '';
            document.getElementById('email')
                    .value = '';
            document.getElementById('birthDate')
                    .value = '';
        
            document.getElementById('formPage')
                    .style
                    .display = 'block';
            document.getElementById('personForm')
                    .style
                    .display = 'block';
            document.getElementById('submit')
                    .style
                    .visibility = 'hidden';
            document.getElementById('create')
                    .style
                    .visibility = 'visible';
    }
}

var displayAddressForm = function() {
    
    // onclick of the row, data from the table cells should be displayed in the form
    var table = document.getElementById('table');
            
    for(index = 1; index < table.rows.length; index++) {
        //when row is clicked form should be displayed
        table.rows[index].onclick =   function() {
        
            // assign the value of table cells to the form textboxes
            document.getElementById('addressId')
                    .value = this.cells[0].innerHTML;
            document.getElementById('street')
                    .value = this.cells[1].innerHTML;
            document.getElementById('city')
                    .value = this.cells[2].innerHTML;
            document.getElementById('postalCode')
                    .value = this.cells[3].innerHTML;
            
            // display the form with data
            document.getElementById('formPage')
                    .style
                    .display = 'block';
            document.getElementById('addressForm')
                    .style
                    .display = 'block';
            document.getElementById('addressSubmission')
                    .style
                    .visibility = 'visible';
            document.getElementById('addressCreation')
                    .style
                    .visibility = 'hidden';
        }
    }
    
    // display empty form with create button 
    addButton = document.getElementById('addBtn');
    addButton.onclick = function() {
        // display the form without data
            document.getElementById('addressId')
                    .value = '';
            document.getElementById('street')
                    .value = '';
            document.getElementById('city')
                    .value = '';
            document.getElementById('postalCode')
                    .value = '';
        
            document.getElementById('formPage')
                    .style
                    .display = 'block';
            document.getElementById('addressForm')
                    .style
                    .display = 'block';
            document.getElementById('addressSubmission')
                    .style
                    .visibility = 'hidden';
            document.getElementById('addressCreation')
                    .style
                    .visibility = 'visible';
    }
}