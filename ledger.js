var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log('effidial');
        console.log(this.responseText);
        var parsedResponse = JSON.parse(this.responseText);
        console.log(parsedResponse);
        if (parsedResponse !== null) {
            var objectKeys = Object.keys(parsedResponse);
            console.log(objectKeys);
            for (i = 0; i < objectKeys.length; i++) {
                var objectKey = objectKeys[i];
                var entryObject = parsedResponse[objectKey];
                nwTR = document.createElement('tr');
                nwTD1 = document.createElement('td');
                nwTD2 = document.createElement('td');
                nwTD3 = document.createElement('td');
                nwTD4 = document.createElement('td');
                nwTD5 = document.createElement('td');
                nwTR.appendChild(nwTD1);
                nwTR.appendChild(nwTD2);
                nwTR.appendChild(nwTD3);
                nwTR.appendChild(nwTD4);
                nwTR.appendChild(nwTD5);
                nwTD1.innerText = entryObject.name;
                nwTD2.innerText = entryObject.email;
                nwTD3.innerText = entryObject.address;
                nwTD4.innerText = entryObject.phnNumber;
                nwTD5.innerText = entryObject.amount;
                nwEle = document.getElementsByTagName("tbody")[0];
                nwEle.appendChild(nwTR);
            }
        }
    }
};
xhttp.open("GET", "https://todo-app-3a953-default-rtdb.firebaseio.com/ledger-entries.json", true);
xhttp.send();


function sendToServer() {
    console.log('lorem ipsum');
    var name = document.getElementById("exampleFormControlInput1").value;
    var email = document.getElementById("exampleFormControlInput3").value;
    var address = document.getElementById("exampleFormControlTextarea1").value;
    var phnNumber = document.getElementById("exampleFormControlInput4").value;
    var amount = document.getElementById("exampleFormControlInput2").value;
    var phone = /^\d{10}$/;
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var temp = true;
    if (!(name.length >= 6)) {
        temp = false;
        document.getElementsByClassName("error")[0].style.display = "inline";
    }
    if (!(address.length >= 12)) {
        temp = false;
        document.getElementsByClassName("error")[2].style.display = "inline";
    }
    if (!amount) {
        temp = false;
        document.getElementsByClassName("error")[4].style.display = "inline";
    }
    if (!(phnNumber.match(phone))) {
        temp = false;
        document.getElementsByClassName("error")[3].style.display = "inline";
    }
    if (!(email.match(mail))) {
        temp = false;
        document.getElementsByClassName("error")[1].style.display = "inline";
    }
    if (temp == true) {


        console.log('lorem ipsum');
        var data = { "name": name, "email": email, "address": address, "phnNumber": phnNumber, "amount": amount };
        var dataStringified = JSON.stringify(data);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('effidial');
            }
        };
        xhttp.open("POST", "https://todo-app-3a953-default-rtdb.firebaseio.com/ledger-entries.json", true);
        xhttp.send(dataStringified);
        nwTR = document.createElement('tr');
        nwTD1 = document.createElement('td');
        nwTD2 = document.createElement('td');
        nwTD3 = document.createElement('td');
        nwTD4 = document.createElement('td');
        nwTD5 = document.createElement('td');
        nwTR.appendChild(nwTD1);
        nwTR.appendChild(nwTD2);
        nwTR.appendChild(nwTD3);
        nwTR.appendChild(nwTD4);
        nwTR.appendChild(nwTD5);
        nwTD1.innerText = data.name;
        nwTD2.innerText = data.email;
        nwTD3.innerText = data.address;
        nwTD4.innerText = data.phnNumber;
        nwTD5.innerText = data.amount;
        nwEle = document.getElementsByTagName("tbody")[0];
        nwEle.appendChild(nwTR);

        var input1 = document.getElementById("exampleFormControlInput1");
        input1.value = "";
        var input2 = document.getElementById("exampleFormControlTextarea1");
        input2.value = "";
        var input3 = document.getElementById("exampleFormControlInput2");
        input3.value = "";
        var input4 = document.getElementById("exampleFormControlInput3");
        input4.value = "";
        var input5 = document.getElementById("exampleFormControlInput4");
        input5.value = "";
    }
}

function iRemove(buttonEle) {
    buttonEle.parentElement.parentElement.remove();
}

function addRow() {
    newTR = document.createElement('tr');
    newTD1 = document.createElement('td');
    newTD2 = document.createElement('td');
    newTD3 = document.createElement('td');
    newTD4 = document.createElement('td');
    newTR.appendChild(newTD1);
    newTR.appendChild(newTD2);
    newTR.appendChild(newTD3);
    newTR.appendChild(newTD4);
    newEle = document.getElementsByTagName("tbody")[0];
    newEle.appendChild(newTR);
    newTD1.innerText = "4";
    newTD2.innerText = "Alice";
    newTD3.innerText = "4569";
    newButton = document.createElement('button');
    newTD4.appendChild(newButton);
    newButton.innerText = "Delete";
    newButton.setAttribute("class", "btn btn-primary btn btn-primary btn-sm button");

}

function changecolor() {
    btcolor = document.getElementsByTagName("button")[3];
    btcolor.style.color = "red";
}


function changeHandler() {
    let text;
    let btnIndex = prompt("Enter the inder value:", "...");
    let arrayLength = document.querySelectorAll("#addElement button");
    if (btnIndex <= arrayLength.length && btnIndex >= 0) {
        var btnsInTable = document.querySelectorAll("#addElement button");
        btnsInTable[btnIndex].style.color = "red";
    } else {
        alert("No such button");
    }


}

function changeToNrml() {
    document.getElementsByClassName("error")[0].style.display = "none";
    document.getElementsByClassName("error")[1].style.display = "none";
    document.getElementsByClassName("error")[2].style.display = "none";
    document.getElementsByClassName("error")[3].style.display = "none";
    document.getElementsByClassName("error")[4].style.display = "none";
    var input1 = document.getElementById("exampleFormControlInput1");
    input1.value = "";
    var input2 = document.getElementById("exampleFormControlTextarea1");
    input2.value = "";
    var input3 = document.getElementById("exampleFormControlInput2");
    input3.value = "";
    var input4 = document.getElementById("exampleFormControlInput3");
    input4.value = "";
    var input5 = document.getElementById("exampleFormControlInput4");
    input5.value = "";
}

function errorRemove() {
    document.getElementsByClassName("error")[0].style.display = "none";
    document.getElementsByClassName("error")[1].style.display = "none";
    document.getElementsByClassName("error")[2].style.display = "none";
    document.getElementsByClassName("error")[3].style.display = "none";
    document.getElementsByClassName("error")[4].style.display = "none";
}