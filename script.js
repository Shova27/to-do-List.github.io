// create variables
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

// task add karne k lie
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!"); 
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");  // X sign k lie
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";  //input text likne k baad empty ho jaayega by this 
    saveData();
}   
 listContainer.addEventListener("click" , function(e){  
    if(e.target.tagName ==="LI"){           //to checked the task jo comp. hogya hai 
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){            //to remove
        e.target.parentElement.remove();
        saveData();
    }
 }, false);

 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
 }
 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();

  