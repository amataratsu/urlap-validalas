window.addEventListener("load",init);

function $(nev){
    return document.querySelectorAll(nev);
}
function ID(nev) {
    return document.getElementById(nev);
}
function init() {
    ID("kuld").addEventListener("click",validalas);
}

function validalas() {
    console.log("validálunk");
    //hossza legalább 3 karakter
    //Maximális hossz.
    //Nagy betűvel kezdődjön. kibetűvel folytatódjon.
    //Csak betűk legyenek!
    var nevMezo =ID("nev").value;
    
    if(nevMezo.length<3){
        $("aside section:nth-child(1) p")[0].innerHTML="Legalább 3 karakterből áljon a név.<br>";
        ID("nev").style.border="2px solid red";
    }else{
        ID("nev").style.border="none";
    }
    
    var hiba = "";
    
    var adat = "";
    
    var szuro = /[A-Z]{1}[a-z]{2,19}/;
    
    if(!szuro.test(nevMezo)){
        hiba += "Nagybetűvel kezdődjön a név ! <br> ";
        ID("nev").style.border="2px solid red";
    }else{
        ID("nev").style.border="none";
        adat+="Név: "+nevMezo+"<br>";
    }
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(2) p")[0].innerHTML = adat;
    
    var szuroEmail = /$+{@}+{.}$/;
    var emailellen = ID("E-mail").value;
    var emailHiba = "";
    var emaiadat = "";
    if(!szuroEmail.test(emailellen)){
        hiba += "Nagybetűvel kezdődjön a név ! <br> ";
        ID("emailellen").style.border="2px solid red";
    }else{
        ID("emailellen").style.border="none";
        emaiadat+="E-mail: "+emailellen+"<br>";
    }
    $("aside section:nth-child(1) p")[0].innerHTML = emailHiba;
    $("aside section:nth-child(2) p")[0].innerHTML = emaiadat;
    
    var emailellenUjra = ID("E-mailÚjra").value;
    var emailHibaUjra = "";
    var emaiadatUjra = "";
    if(!emailellenUjra === emailellen){
        hiba += "Nem eggyezik a megadott email cím. <br> ";
        ID("E-mailÚjra").style.border="2px solid red";
    }else{
        ID("E-mailÚjra").style.border="none";
        emaiadatUjra+="E-mail: "+emailellenUjra+"<br>";
    }
    $("aside section:nth-child(1) p")[0].innerHTML = emailHibaUjra;
    $("aside section:nth-child(2) p")[0].innerHTML = emaiadatUjra;
    
    
    var szuroTel = /{+}+[1-9]{9,}/;
    var emailellen = ID("E-mail").value;
    var emailHiba = "";
    var emaiadat = "";
    if(!szuroEmail.test(emailellen)){
        hiba += "Nagybetűvel kezdődjön a név ! <br> ";
        ID("emailellen").style.border="2px solid red";
    }else{
        ID("emailellen").style.border="none";
        emaiadat+="E-mail: "+emailellen+"<br>";
    }
    $("aside section:nth-child(1) p")[0].innerHTML = emailHiba;
    $("aside section:nth-child(2) p")[0].innerHTML = emaiadat;
    
}