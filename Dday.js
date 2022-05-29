let todoList = []

function compTodobyDate(a, b){
    a_time = new Date(a.children[1].className).getTime()
    b_time = new Date(b.children[1].className).getTime()
    cp = a_time - b_time
    return cp
}

function addnewTodo(){
    let frm = document.getElementById('todoForm')

    let todoname = document.getElementsByName("title")[0].value;

    let whentodo = document.getElementsByName("when")[0].value;

    let impbox = document.getElementsByName("importance");
    let imp = null;
    for(let i=0; i<3; i++){
        if(impbox[i].checked){
            imp = impbox[i].value;
            break;
        }
    }

    let det = document.getElementsByName("details")[0].value;
////////////////

    let tod = document.createElement('section')
    tod.setAttribute("id", "tod")

    let title = document.createElement('p');
    title.setAttribute("id", "name")
    title.innerHTML = todoname
    tod.appendChild(title)

    let when = document.createElement('p');
    when.setAttribute("id", "datetime")
    when.setAttribute("class", whentodo) 
    when.innerHTML = whentodo.slice(0, 10) + "<br>" + whentodo.slice(11, 16)
    tod.appendChild(when)

    if(imp == "high"){
        tod.setAttribute("class", "imp-high")
    }
    else if(imp == "medium"){
        tod.setAttribute("class", "imp-medium")
    }
    else{
        tod.setAttribute("class", "imp-low")
    }

    let what = document.createElement('pre');
    what.setAttribute("id", "details")
    what.innerHTML = det
    tod.appendChild(what)

    let delbtn = document.createElement('button');
    delbtn.innerHTML = '삭제'
    tod.appendChild(delbtn)
    delbtn.addEventListener("click", function(e){
        e.target.parentElement.remove()
        todoList.splice(todoList.indexOf(e.target.parentElement), 1) 
    })

    todoList.push(tod)
    frm.reset()

}

function refresh(){
    let todoDisplay = document.getElementById('todo');
    todoDisplay.replaceChildren();

    let i;
    for(i=0; i<todoList.length; i++){  
        todoDisplay.appendChild(todoList[i])
    }
    

}

function btnclick(){
    addnewTodo()
    todoList.sort(compTodobyDate)
    refresh()
}
