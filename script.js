function addNewideoField() {
    let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("ideoField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("type", "text")
    newNode.setAttribute("placeholder", "español...")

    let idOb = document.getElementById("id");
    let ideobuttonOb = document.getElementById("ideobutton");

    idOb.insertBefore(newNode, ideobuttonOb);
}

function addNewPWField() {
let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("pwField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("type", "text")
    newNode.setAttribute("placeholder", "Facebook, instagram, twitter...")

let pwOb = document.getElementById("pw");
let pwbuttonOb = document.getElementById("pwbutton");

    pwOb.insertBefore(newNode, pwbuttonOb);

}

function addNewempField() {
let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("empField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("type", "text")
    newNode.setAttribute("placeholder", "Introducir aqui...")

let emOb = document.getElementById("em");
let empbuttonOb = document.getElementById("empbutton");

    emOb.insertBefore(newNode, empbuttonOb);
}

function addNeweduField() {
let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("eduField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("type", "text")
    newNode.setAttribute("placeholder", "Colegio, Universidad, politecnico...")

let edOb = document.getElementById("ed");
let edubuttonOb = document.getElementById("edubutton");

    edOb.insertBefore(newNode, edubuttonOb);
}

function addNewhabiField() {
    let newNode=document.createElement("input");
        newNode.classList.add("form-control");
        newNode.classList.add("habiField");
        newNode.classList.add("mt-3");
        newNode.setAttribute("type", "text")
        newNode.setAttribute("placeholder", "Html, css, JavaScript...")
    
    let haOb = document.getElementById("ha");
    let habibuttonOb = document.getElementById("habibutton");
    
        haOb.insertBefore(newNode, habibuttonOb);
}

function addNewcerField() {
    let newNode=document.createElement("input");
        newNode.classList.add("form-control");
        newNode.classList.add("cerField");
        newNode.classList.add("mt-3");
        newNode.setAttribute("type", "text")
        newNode.setAttribute("placeholder", "PHP framework, java, SQL...")
    
    let ceOb = document.getElementById("ce");
    let cerbuttonOb = document.getElementById("cerbutton");
    
        ceOb.insertBefore(newNode, cerbuttonOb);
}

function GenerarCV() {

    let nameField=document.getElementById("nameField").value;

    let nameT=document.getElementById("nameT");

    nameT.innerHTML=nameField;

    document.getElementById("corrT").innerHTML = document.getElementById("correoField").value;

    document.getElementById("direT").innerHTML = document.getElementById("direField").value;

    document.getElementById("teleT").innerHTML = document.getElementById("teleField").value;

    document.getElementById("resT").innerHTML = document.getElementById("resField").value;


    //--------------------------------------------------------------------------------------------------------------------

    let has = document.getElementsByClassName("habiField");
    let str = "";
    for (let a of has) {
        str = str + `<li> ${a.value} </li>`
    }
    document.getElementById("habiT").innerHTML = str;
    //--------------------------------------------------------------------------------------------------------------------
    let emps = document.getElementsByClassName("empField");

    let str1 = "";

    for (let e of emps) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    
    document.getElementById("empT").innerHTML = str1;
    //--------------------------------------------------------------------------------------------------------------------
    let edus = document.getElementsByClassName("eduField");

    let str2 = "";

    for (let i of edus) {
        str2 = str2 + `<li> ${i.value} </li>`;
    }
    
    document.getElementById("eduT").innerHTML = str2;
    //--------------------------------------------------------------------------------------------------------------------
    let cers = document.getElementsByClassName("cerField");

    let str3 = "";

    for (let o of cers) {
        str3 = str3 + `<li> ${o.value} </li>`;
    }
    
    document.getElementById("cerT").innerHTML = str3;
    //--------------------------------------------------------------------------------------------------------------------
    let pws = document.getElementsByClassName("pwField");

    let str4 = "";

    for (let u of pws) {
        str4 = str4 + `<p> ${u.value} </p>`;
    }
    
    document.getElementById("pwT").innerHTML = str4;
    //--------------------------------------------------------------------------------------------------------------------
    let ideos = document.getElementsByClassName("ideoField");

    let str5 = "";

    for (let v of ideos) {
        str5 = str5 + `<p> ${v.value} </p>`;
    }
    
    document.getElementById("idoT").innerHTML = str5;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

function imprimirCV() {
    window.print();
}