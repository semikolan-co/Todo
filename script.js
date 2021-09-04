var todoform = document.getElementById("todoform");
var items = [];
todoform.addEventListener("submit", function(event) {
    var item = todoform.querySelector("input[type=text]").value;
    items.push(item);
    console.log(item);
    renderItems();
});

function renderItems(){
    itemdiv = document.getElementById("items");
    itemdiv.innerHTML = "";
    items.forEach((item,i) => {
        itemdiv.innerHTML += `
        
        <div class="item row">
        <p class="col-11">${i+1} - ${item}</p>
        <div class="col-1">

            <button class="btn btn-sm btn-danger" onclick="deleteItem(${i})">X</button>
        </div>
    </div>
        `;
    });
}

function deleteItem(index){
    items.splice(index,1);
    renderItems();
}