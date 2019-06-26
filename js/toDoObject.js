const toDoBox =document.getElementById("toDoBox");
function create_UUID(){
    var dt = new Date().getTime();
    var uuid = '4xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
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
function delToDo(e){
    document.getElementById(e).remove();
}

function addToDo(){
    let toDo = document.getElementById("toDo").value;
    let rid = create_UUID();

    let node ='';
    node+=
    '<div id="'+rid+'"><input type="submit" id="del-'+rid+'" value="x" onclick="delToDo(\''+rid+'\')"><input type="checkbox" id="chk-'+rid+'" onclick="checkToDo(\''+rid+'\')"/><label id="text-'+rid+'">'+toDo+'</label></div>';

    toDoBox.insertAdjacentHTML('beforeend', node);

}