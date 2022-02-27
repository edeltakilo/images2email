<<<<<<< HEAD
function compute()
{
    // first we'll capture the inputs
    var principal = document.getElementById("principal").value;
    // this will send an alert if 0 is entered
    if(principal == "" || principal <= 0)
    {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    // continuing to capture the user inputs
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //this next line will calculate the interest
    var interest = (principal * years * rate) / 100;
    
    // creating the current year and adding the number of years selected by th user
    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    // here is where we display the reults after the button is clicked
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='results'>$" 
    + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='results'>" 
    + rate + "%</span>." + "<br> You will receive an amount of " + "<span class='results'>$" 
    + interest + "</span>" + ", <br> in interest by the year " + "<span class='results'>" + yearNow + "</span>";

}
// the following function will create a display for the slider value
function updateRate()
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
        
    }
        
=======
function compute()
{
    p = document.getElementById("principal").value;
    
}
>>>>>>> 3b520ac3d2015e4a3be37248e76a6d48c7afff98
