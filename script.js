function view() {
    var table = document.getElementById("myTable");
    var msg = document.getElementById("msg");

    msg.setAttribute("hidden","true");
    var x = "<thead><tr><th colspan=2 style='font-weight: 500;'>To-Do List</th></tr></thead>";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var out = JSON.parse(this.responseText);
        }        
        for (let index = 0; index < out.length; index++) {
            if (out[index].completed == true) {
                x += "<tr><td style='text-align: center;'><input type='checkbox' checked disabled></td><td>" + out[index].title + "</td></tr>";
            } else {
                x += "<tr><td style='text-align: center;'><input class='newCheck' type='checkbox' onchange='check()'></td><td>" + out[index].title + "</td></tr>";
            }    
        }
        table.innerHTML = x;
        table.removeAttribute("hidden");
    }
    xhttp.open("GET","http://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function check() {
    var promise = new Promise(function (resolve) {
        var count = 0;
        var newCheck = document.getElementsByClassName("newCheck");
        for (let i = 0; i < newCheck.length; i++) {
            if (newCheck[i].checked) {
                count += 1; 
            }
        }
        if (count==5) {
            resolve("Congrats! 5 tasks have been successfully completed");
        }
    });
    
    promise
    .then(function(s) {
        alert(s)
    })
    .catch(function(e) {
        alert(e)
    })
}