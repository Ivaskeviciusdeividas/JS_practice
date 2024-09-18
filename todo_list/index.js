// console.log("hello button");
const button = document.getElementById("b1"); // selector for DOM
let totalRows = 1;
/////////////////////////////////

const table = document.getElementById("tabl1");
const tbody = table.getElementsByTagName("tbody")[0];
const tname = document.getElementById("input");

function addRow() {
    //tbody.insertRow(totalRows);
    //totalRows++;
    const newRow = document.createElement("tr");
    newRow.classList.add("rowas");
    addContent(3, newRow, tname.value);
    tbody.appendChild(newRow);
    totalRows++;
    tname.value = "";
    const elementArray = tbody.getElementsByTagName("tr");
    for(i = 0 ; i < elementArray.length ; i++){
        console.log(elementArray[i]);
    }

}
function addContent(columns, newRow, uInput){
    for(let i = 0; i < columns; i++){
        const newTd = document.createElement("td");
        if(i === 0){ 
            newTd.innerText = totalRows;

        }
        if(i === 1){
            newTd.innerText = uInput;
            newTd.rowIndex = totalRows; 
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
function createIcon(iconType,rowIndex){
    const icon = document.createElement("img");
    icon.width = 20;
    icon.height = 20;
    icon.rowIndex = rowIndex;
    icon.src = `./icons/${iconType}.svg`;
    if(`${iconType}` === "edit"){
        icon.onclick = editRow;
    }
    return icon;
}
function editRow(rowIndex){
    getElement
}
button.onclick = addRow;

// add text input field: after inputing text into the field if button is clicked new row is created with the text 
// with text from input field in the name column

// when edit icon is clicked text in our name column appears in the text input again and can be edited
// when button is pressed updated text appears in the name column
