let btn=document.getElementById("btn");
let msg = document.getElementById("msg");


//function for generating OTP.
function otpgenerate(length=6){
    let otp="";
    for(i=0;i<length;i++){
        otp+= Math.floor(Math.random()*10);
    }
    return otp;  //returing the OTP.
}

btn.addEventListener("click",()=>{
    let display = otpgenerate();
    msg.textContent="Getting OTP...";  //when button clicked initial msg will show

    setTimeout(()=>{
    msg.textContent= ` " ${display} "  is your OTP. OTP is confidential.For Security reasons,DO NOT share OTP with anyone. `; //after few secconds OTP generated..
    },2500);
})
