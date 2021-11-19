function compute()
{
    var principal = document.getElementById("principal").value;
    //if principal is null or negative
    if(principal == "" || principal <= 0)
    {
        alert("Please Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //Simple interest calculation
    var interest = principal * years * rate / 100;

    //Update to current date
    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    //Output
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
}

function updateRate()
{
    var rateval = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML = rateval.value; // Display the default slider value

    // Update slider
    rateval.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}