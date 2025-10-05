// document.getElementById("mainBody").innerHTML = "Hello from JS file";



// console.log("test from console");


function checkIfAllowed(){
    let age = document.getElementById("test").value;
    let color = document.getElementById("colorInput").value;
    console.log(age);

    if(age >= 16){
        document.getElementById("result").innerHTML = "Allowed";
    }
    else if(age < 16 && age > 0){
        document.getElementById("result").innerHTML = "Not Allowed";
    }
    else{
        document.getElementById("result").innerHTML = "Error";
    }
}