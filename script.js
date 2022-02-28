function compute()
{
   
    var customer = document.getElementById("customer").value;
    if(customer == "")    {
        alert("Enter a Customer");
        document.getElementById("customer").focus();
        return;
    }
    var order = document.getElementById("order").value;
    if(order == "")
    {
        alert("Enter the Order Number");
        document.getElementById("customer").focus();
        return;
    }
    var towho = document.querySelector('input[name="pick"]:checked').value;
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
    else if(towho == null)
    {
        alert("Choose a person")
        document.getElementById("towho").focus()
        return;
    }
   
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "The order " + order 
    + " for " + customer + " was sent to " + towho + "." 
    + "<br>Start over? <a href='https://www.prodeckparts.com'>Click Here.</a>";
   

}

        

        
