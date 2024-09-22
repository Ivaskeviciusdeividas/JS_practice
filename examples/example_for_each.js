const myList = [1, 2, 3, 4, 5];

console.log("classic method: ")
for (let i = 0; i < myList.length; i++) {
    console.log(myList[i])
}


console.log("for of: ")
for (let my_elem of myList) {
    console.log(my_elem)
}

console.log("for each:")
myList.forEach((elem, index) => {
    console.log("key: " + index, ", value: " + elem);
})


console.log("for in:")
for (let prop in myList) {
    console.log(myList[prop])
}


console.log("printed list")
console.log(myList)
