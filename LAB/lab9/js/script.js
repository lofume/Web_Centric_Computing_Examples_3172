function calc(){
    var use = document.getElementById("insertArray").value;
    var array = eval("[" + use + "]");;
    
    var medianResult = medianCalc(array);
    var meanResult = meanCalc(array);
    var sumResult = sumCalc(array);
    
    var answer = "Sum: "+ sumResult + " Mean: " + parseFloat(meanResult).toFixed(2) + " Median: " + medianResult;
    
    document.getElementById("display").innerHTML = answer;
    }
function sumCalc (values){
    var onlyPosValues = values.filter(value => value >=0);
    sumOfPos = onlyPosValues.reduce((sumValues, current) => sumValues + current, 0);
    return sumOfPos;
}
function meanCalc (values){
    var calc = 0;
    for (var i = 0; i < values.length; i++){
        calc = calc + values[i];
    }
    return (calc/values.length);
}
function medianCalc (values){
    values.sort(function(a,b){ //values.sort helps sort the values before ouputting the median
        return a-b;
    });
    var split = Math.floor(values.length / 2);
    if (values.length % 2)
        return values[split];
    
    return ((values[split - 1] + values[split]) / 2.0);
}
    
    