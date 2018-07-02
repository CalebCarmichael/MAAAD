function ppG(){
    var miles = document.getElementById("miles").value;
    var mpg = document.getElementById("mpg").value;
    var co2 = 20;
    var gallons = miles / mpg;
    
    var total = co2 * gallons;
    
    document.getElementById("answer").value = total;
    
}
