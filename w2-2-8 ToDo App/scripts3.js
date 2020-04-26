

document.getElementById("AddButton").addEventListener('click', AddItem)



function AddItem () { 
    var todo = document.getElementById("NextToDo").value;   
    var t = document.createTextNode(todo);
    
    var line = document.createElement('LI');
    line.appendChild(t);

    var checkImage = document.createElement("img")
    checkImage.setAttribute("src", "select.svg")
    checkImage.setAttribute("width", "20px")
    checkImage.setAttribute("height", "20px")
    line.appendChild(checkImage)

    var delImage = document.createElement("img")
    delImage.setAttribute("src", "trash.svg")
    delImage.setAttribute("width", "20px")
    delImage.setAttribute("height", "20px")
    line.appendChild(delImage)



    document.getElementById("MyList").appendChild(line)
    $('#NextToDo').val("");

}


// function AddItem () {
//     var newItem = document.getElementById("NextToDo").value;
//     var line = `<li><${newItem}<i class="fas fa-trash del"></i><i class="far fa-check-circle select"></i></li>`;
//     document.getElementById("MyList").appendChild(line);
//     $('#NextToDo').val("");
// }





