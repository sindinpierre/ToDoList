const ValidateButton = document.getElementById("bouttonValider");

ValidateButton.addEventListener("click",()=>{
    addToDo();
    document.getElementById("toDo").value="";
});