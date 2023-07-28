var pC = 0;
var cC = 0;
var nC = 0; 

// call the function when button will be click
document.getElementById("calculate").addEventListener('click', calVals);

function calVals(e){
    e.preventDefault();
    const numArray = document.getElementById("number").value.split(",");
    numArray.forEach(element => {helperToFindNumber(element);});
    // show the div tag
    document.getElementById("forEach").style.display = "block";
    document.getElementById("primeNum").innerHTML = "Prime Number: " + pC;
    document.getElementById("compositeNum").innerHTML = "Composite Number: " +cC;
    document.getElementById("neitherNum").innerHTML = "Neither: "  + nC;
    // reset the count equal to zero to go through other loops
    number();
    for(var i=0; i <= numArray.length-1; i++){
        helperToFindNumber(numArray[i]);
    }
    document.getElementById("forLoop").style.display = "block";
    document.getElementById("primeLoop").innerHTML = "Prime Number: " + pC;
    document.getElementById("compositeLoop").innerHTML = "Composite Number: " +cC;
    document.getElementById("neitherLoop").innerHTML = "Neither: "  + nC;
    number();
    numArray.map(element =>{
        helperToFindNumber(element);
    });
    // show the div tag
    document.getElementById("forMap").style.display = "block";
    document.getElementById("primeMap").innerHTML = "Prime Number: " + pC;
    document.getElementById("compositeMap").innerHTML = "Composite Number: " +cC;
    document.getElementById("neitherMap").innerHTML = "Neither: "  + nC;
    number();
}
function helperToFindNumber(element){
    element = Number(element);
    // Prime or Composite
    if(element == 1 || element == 0){
        nC++;
    }
    else if(element == 2){
        pC++;
    }
    else{
        // check the count how many times number is mod(i) 
        // if it is more 1 then it is composite other wise it is prime
        var count = 0;
        for(var i=2; i<=element; i++){
            if(element % i === 0){
                count++;
                if(count > 1){
                    cC++;
                    break;
                }
            }
        }
        if(count === 1){
            pC++;
        }   
    }
}
function number(){
    // counter to process loop
    pC = 0;
    cC = 0;
    nC = 0;
}