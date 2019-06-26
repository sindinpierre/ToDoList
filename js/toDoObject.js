const toDoBox =document.getElementById("toDoBox");

function checkToDo(e){
    const chkbox = document.getElementById("chk-"+e);
    const div = document.getElementById("text-"+e);    
    if(chkbox.checked){
        div.style.textDecoration="line-through";
    }
    else{
        div.style.textDecoration="";
    }
}

function addToDo(){
    let toDo = document.getElementById("toDo").value;
    let rid = Math.random().toString(36).substr(2, 9);

    let node ='';
    node+=
    '<div id="'+rid+'"><input type="checkbox" id="chk-'+rid+'" onclick="checkToDo(\''+rid+'\')"/><label id="text-'+rid+'">'+toDo+'</label></div>';

    toDoBox.insertAdjacentHTML('beforeend', node);

}