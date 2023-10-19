//create the  password genrate//
  function password() {
    let chars ='12345678910'
    let totallength =4;
    let yourpassword ='';
    for (let index = 0; index < totallength; index++) {
        yourpassword+=chars.charAt(Math.floor(Math.random()*chars.length));
        
    }
   //  console.log(yourpassword);
   let ovb =yourpassword;
   
   console.log(ovb);
    alert(yourpassword+"your otb num is");
    const ejs =document.querySelector(".emil");
    ejs.textContent=ovb;
    console.log(ejs);
    
    let oud =document.querySelector(".subhead");
 oud.textContent ="your OTB Pin is : "+ yourpassword;
 console.log(oud);
 
 }
 password();
 

 //Add event listener//
 let bdn =document.querySelector(".bdn");
 
 bdn.addEventListener("click",password,function(){
   

 });

 




 


    




