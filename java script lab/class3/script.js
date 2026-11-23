let titlelem = document.getElementById("title");
let descriptionelem  = document.getElementById("description");
let dateelem = document.getElementById("date");
let addtodobtelem = document.getElementById("addTodo");
let todolist = [];
addtodobtelem.addEventListener('click',function(){
    let title = titlelem.value;
    let description = descriptionelem.value;
    let data = dateelem.value;
    if(!title||!description||!date){
        alert("Enter all values");
        return; 
    }
    todolist.push({
        title,
        description,
        date
    });
    titlelem.value=" ";
    descriptionelem.value=" ";
    dateelem.value=" ";
})
let listtodoelem = document.getElementById("Listtodo");
let listfragmentelem = document.createDocumentFragment();
for(let i=0;i<todolist.length;i++){
    let displaytitle = todolist[i].title;
    let displaydesciption = todolist[i].description;
    let displaydate = todolist[i].date;
    let divElem = document.createElement("div");
    let titleparaelem = document.createElement("p");
    let descriptionparaelem = document.createElement("p");
    let dateparaelem = document.createElement("p");
    titleparaElem.textContent=displaytitle;
    descriptionparaElem.textContent=displaydesciption;
    titleparaElem.textContent=displaydate;
    let removebtnelem = document.querySelector("button");
    removebtnelem.addEventListener("click",function(){

    });
    divElem.append(titleparaelem,descriptionparaelem,dateparaelem,removebtnelem);
    listfragmentelem.appendChild(divElem);

}
listtodoelem.appendChild(listfragmentelem);