let homeScreenContent={
    "home":0,
    "about":1,
    "items":2,
    "orders":3,
}

function writeToHomeScreenBody(value){

    switch (value){
        case 0: document.getElementById("homeBody").setAttribute("data","HTML/Home.html");
                break;
        case 1: document.getElementById("homeBody").setAttribute("data","HTML/About.html");
                break;
        case 2: document.getElementById("homeBody").setAttribute("data","../Vishwa/menu.html");
                break;
        case 3: document.getElementById("homeBody").setAttribute("data","HTML/Orders.html");
                break;
        default: document.getElementById("homeBody").setAttribute("data","HTML/Home.html");
                return;
    }
    setScreenSelected(value);
}
// for things color of button
function setScreenSelected(index){
    let screenButtonIDs=["homeButton","aboutButton","itemsButton","ordersButton"];

    for(let i=0;i<screenButtonIDs.length;i++){
        if(i==index){
            document.getElementById(screenButtonIDs[i]).setAttribute("class","yesClick");
        }else{
            document.getElementById(screenButtonIDs[i]).setAttribute("class","noClick");
        }
    }

}
