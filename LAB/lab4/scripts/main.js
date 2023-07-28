/* -------------------------- PART A: Using Switch Case ------------------------------------- */
function colorFunc(){
    var selectIt = document.getElementById('bgColor').value;
    var divS = document.getElementById('changeBackgrd');
   
    switch (selectIt){
        case "Monday":
        divS.style.backgroundColor = '#039d63';
        break;

        case "Tuesday":
        divS.style.backgroundColor = '#ab8b04';
        break;

        case "Wednesday":
        divS.style.backgroundColor = '#702387';
        break;

        case "Thursday":
        divS.style.backgroundColor = '#0051ff';
        break;

        case "Friday":
        divS.style.backgroundColor = '#00ddff';
        break;

        case "Saturday":
        divS.style.backgroundColor = '#ff009f';
        break;

        case "Sunday":
        divS.style.backgroundColor = '#aa0036';
        break;
    }
}

/* -------------------------- PART B: Working with Form Data ------------------------------------- */

function getValue(){
    let number = parseInt(document.getElementById('odd').value);
    let valueIs = "The number entered is an ";

    // checking the odd and even
    if(number % 2 == 0){
        valueIs += "even ";
    }
    else{
        valueIs += "odd ";
    }
    // checking the prime and composite
    if(number === 1 || number === 2){
        valueIs += "prime number ";
    }
    else{
        var starter = 0;
        for(var i=2; i <= number; i++){
            if(number % i === 0){
                starter++;
                if(starter > 1){
                    valueIs += "composite number ";
                    break;
                }
            }
        }
        if(starter === 1){
            valueIs += "prime number ";   
        }
    }
    //check boundaries
    if(number <= 50){
        valueIs += "less than or equal to 50 ";
    }
    else if(number > 50 && number <= 75){
        valueIs += "greater than 50 and Less than or equal to 75 ";   
    }
    else if(number > 75 && number <= 100){
        valueIs += "greater than 75 and less than or equal to 100";
    }
    else{
        valueIs += "greater than 100";
    }
    alert(valueIs);
}
