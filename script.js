function toggleMenu(){

    const menu = document.getElementById("mainNav");

    if(menu){
        menu.classList.toggle("open");
    }
}


function showMessage(event){

    event.preventDefault();

    const message = document.getElementById("formMessage");

    if(message){
        message.textContent =
        "Thank you! Your message has been submitted.";
        message.style.color = "#806300";
        message.style.fontWeight = "bold";
    }

    event.target.reset();
}


function loginDemo(event){

    event.preventDefault();

    const message = document.getElementById("loginMessage");

    if(message){
        message.textContent =
        "Demo login submitted successfully.";
        message.style.color = "#806300";
        message.style.fontWeight = "bold";
    }
}


function registerDemo(event){

    event.preventDefault();

    const message = document.getElementById("registerMessage");

    if(message){
        message.textContent =
        "Registration submitted successfully!";
        message.style.color = "#806300";
        message.style.fontWeight = "bold";
    }

    event.target.reset();
}
