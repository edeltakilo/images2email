function compute()
{
   // capture customer name from the form
    var customer = document.getElementById("customer").value;
    
    // make sure it is filled in
    if(customer == "")    {
        alert("Enter a Customer");
        document.getElementById("customer").focus();
        return;
    }

    // capture the order number from the form
    var order = document.getElementById("order").value;
    
    // make sure this is filled in
    if(order == "")
    {
        alert("Enter the Order Number");
        document.getElementById("customer").focus();
        return;
    }

    // capture which name is selected to receive the email
    var towho = document.querySelector('input[name="pick"]:checked').value;
  
    // send the email to the selected person
    if(towho == "erik")
    {
        Email.send({
            Host : "mail.prodeckparts.com",
            Username : "no-reply@prodeckparts.com",
            Password : "bugh2182019",
            To : 'edeltakilo@gmail.com',
            From : "no-reply@prodeckparts.com",
            Subject : "This is the subject",
            Body : "The order " + order 
            + " for " + customer + " is ready to ship.",
            Attachments : [
                {
                    name : "smtpjs.png",
                    path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
                }]
        }).then(
          message => alert("Sent to Erik")
        );
    }

    else if(towho == "kim")
    {
        Email.send({
            Host : "mail.prodeckparts.com",
            Username : "no-reply@prodeckparts.com",
            Password : "bugh2182019",
            To : 'erikdkieffer@gmail.com',
            From : "no-reply@prodeckparts.com",
            Subject : "This is the subject",
            Body : "The order " + order 
            + " for " + customer + " is ready to ship.",
            Attachments : [
                {
                    name : "smtpjs.png",
                    path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
                }]
        }).then(
          message => alert("Sent to Kim")
        );
    }
   
   
    // below we will ask if there are more emails to send
    var resultDisplay = document.getElementById("result");
  
    // and provide a link to refresh the page
    resultDisplay.innerHTML = "The order " + order 
    + " for " + customer + " was sent to " + towho + "." 
    + "<br>Start over? <a href='#'>Click Here.</a>";
   

}

        

        
