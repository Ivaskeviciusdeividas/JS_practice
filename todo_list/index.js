// console.log("hello button");
const button = document.getElementById("b1"); // selector for DOM
let totalRows = 1;
const clickfunction = () => {
    console.log("i clicked");
}

button.onclick = clickfunction; //assign function not return value by calling

/////////////////////////////////

const table = document.getElementById("tabl1");
const tbody = table.getElementsByTagName("tbody")[0];
const number_of_Rows = 3;
/*const createTable = (rows) => {
    let row = table.insertRow(0);
    let cell = [rows];
    for(let i = 0; i < rows; i++){
        row.insertCell(i);
        cell[i].innerHTML = "item" + i;
    }
}
*/
function addRow() {
    //tbody.insertRow(totalRows);
    //totalRows++;
    const newRow = document.createElement("tr");
    newRow.classList.add("rowas");
    addContent(3, newRow);
    tbody.appendChild(newRow);
    totalRows++;
   
}
function addContent(columns, newRow){
    for(let i = 0; i<columns; i++){
        const newTd = document.createElement("td");
        if(i === 0){ 
            newTd.innerText = totalRows;

        }
        if(i === 2){
            newTd.appendChild(createIcon("delete"));
            newTd.appendChild(createIcon("edit"));

        }

        newTd.classList.add("table_data");
        newRow.appendChild(newTd);
    }
    return;
}
function createIcon(iconType){
    const icon = document.createElement("img");
    icon.width = 20;
    icon.height = 20;
    icon.src = `./icons/${iconType}.svg`;
    return icon;
}
button.onclick = addRow;

//populateTable(3);

console.log("UPDATED!!!!")
