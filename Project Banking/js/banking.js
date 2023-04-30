function openform() 
{
    document.getElementById("op").style.display = "none";
    document.getElementById("pop").style.display = "block";
  
}
function closeform() 
{
  document.getElementById("pop").style.display = "none";
}
function log()
{
	var a= document.getElementById("s1").value;
	var b= document.getElementById("s2").value;
	if(a=="admin" && b=="admin")
	 {      

            document.getElementById('best').style.display="block";
            document.getElementById("pop").style.display = "none";
            document.getElementById("p1").innerHTML="1. Check Balance";
            document.getElementById("p2").innerHTML="2. Withdraw";
            document.getElementById("p3").innerHTML="3. Deposite";
            document.getElementById("p4").innerHTML="4. Transfer";
            document.getElementById("p5").innerHTML="5. Logout";
            
            document.getElementById("pp1").innerHTML="";
            document.getElementById("pp2").innerHTML="";
            document.getElementById("pp3").innerHTML="";
            document.getElementById("pp4").innerHTML="";
            document.getElementById("pp5").innerHTML="";
			document.getElementById("pop").style.display = "none";
			document.getElementById("op").style.display = "none";
			
			
        }
    else
        {
            alert("wrong username or password");
			
        }
}
 function closeform()
 {
             document.getElementById("p1").innerHTML="";
             document.getElementById("p2").innerHTML="";
             document.getElementById("p3").innerHTML="";
             document.getElementById("p4").innerHTML="";
             document.getElementById("p5").innerHTML="";
			
 }
var bal=0;

function hhd()
{
    
    var r=confirm("Do you want to Check your bal");
    if(r==true)
        {
            log();
            document.getElementById("pp1").innerHTML="Your available bal is="+bal;
            document.getElementById("pp2").innerHTML="";
            document.getElementById("pp3").innerHTML="";
            document.getElementById("pp4").innerHTML="";
            document.getElementById("pp5").innerHTML="";
			
        }
    else
    { 
      /*  console.log("print")
      closeform();
        document.getElementById("pp1").innerHTML="Thankyou for using our services";
		document.getElementById("best").style.display = "none";*/
    }
}


function with1()
{
     document.getElementById("pp2").innerHTML="<input type='text' id='i1'><button onclick='draw1()'>withdraw</button>";
}
function draw1()
{
    var withdraw=document.getElementById("i1").value;
    if(bal<withdraw)
        {
            var s=confirm("insufficent balance!!! Do you want to continue");
            if(s==true)
                {
                    log();
                    with1();
                }
            else
            {
               closeform();
                document.getElementById("pp1").innerHTML="Thankyou for using our services";
            }
        }
    else if(withdraw<bal && withdraw>100)
        {
            var s1=confirm("withdrawl request accepted!!! Do you want to continue");
            if(s1==true)
                {
                    log();
                    bal=bal-withdraw;
                    document.getElementById("pp1").innerHTML="Rs "+withdraw+" is succesfully withdrawl. Available bal is "+bal;
                }
            else
            {
                      closeform();
                      document.getElementById("pp1").innerHTML="Thankyou for using our services";

            }
            
        }
		else
		{
          var s1=confirm("withdrawl request not accepted!!! Do you want to continue");
            if(s1==true)
                {
                    log();
                    document.getElementById("pp2").innerHTML="<input type='text' id='i1'><button onclick='draw1()'>withdraw</button>";
                }
            else
            {
                      closeform();
                      document.getElementById("pp1").innerHTML="Thankyou for using our services";

            }
	
	
	
	
		}
}


function depo()
{
     document.getElementById("pp3").innerHTML="<input type='text' id='i3'><button onclick='deposite()'>Deposit</button>";
}
function deposite()
{
    var deposite=document.getElementById("i3").value;
    if(deposite<=100)
        {
            var s=confirm("insufficent balance!!! Do you want to continue");
            if(s==true)
                {
                    log();
                    document.getElementById("pp3").innerHTML="<input type='text' id='i3'><button onclick='deposite()'>deposit</button>";
                }
            else
            {
                closeform();
                document.getElementById("pp1").innerHTML="Thankyou for using our services";
            }
        }
    else
        {
            var s1=confirm("deposite request accepted!!! Do you want to continue");
            if(s1==true)
                {
                    log();
                   bal= +bal +  +deposite;                                
                    document.getElementById("pp1").innerHTML="Rs "+deposite+" is succesfully deposite. Available bal is "+bal;
                }
            else
                {
                    closeform();
                    document.getElementById("pp1").innerHTML="Thankyou for using our services";
                }
            
        }    
}




function trans()
{
     document.getElementById("pp4").innerHTML="<input type='text' id='i2'><button onclick='transf()'>Transfer</button>";
            document.getElementById("pp1").innerHTML="";
            document.getElementById("pp2").innerHTML="";
            document.getElementById("pp3").innerHTML="";
            document.getElementById("pp5").innerHTML="";
}
function transf()
{
    var transfer=document.getElementById("i2").value;
    if(bal<transfer)
        {
            var s=confirm("insufficent balance!!! Do you want to continue");
            if(s==true)
                {
                    log();
                    document.getElementById("pp4").innerHTML="<input type='text' id='i2'><button onclick='transf()'>Transfer</button>";
                }
            else
            {
                closeform();
                document.getElementById("pp1").innerHTML="Thankyou for using our services";
            }
        }
    else if(transfer<bal && transfer>100)
        {
            var s1=confirm("transfer request accepted!!! Do you want to continue");
            if(s1==true)
                {
                    log();
                    bal=bal-transfer;
                    document.getElementById("pp1").innerHTML="Rs "+transfer+" is succesfully transfer. Available bal is "+bal;
                }
            else
            {
                      var s=confirm("insufficent balance for withdraw!!! Do you want to continue");
                        if(s==true)
                {
                   closeform();
                    document.getElementById("pp1").innerHTML="Thankyou for using our services";
                }
                      

            }
            
        }
    
}


function logo()
{
    var t=confirm("Do you want to logout");
    if(t==true)
        {
            closeform();
            document.getElementById("pp1").innerHTML="Thankyou for using our bank";
         document.getElementById("best").style.display = "block";
        }
    else
        {
            log();
            document.getElementById("pp1").innerHTML="";
        }
}
