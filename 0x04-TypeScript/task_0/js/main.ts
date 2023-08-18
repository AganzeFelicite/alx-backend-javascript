interface Student{
    firstName : string,
    lastName: string,
    age : number,
    location : string
}

let std1 : Student = {firstName: "Aganze", lastName : "Felicite", age: 23, location: "Kigali"};
let std2 : Student = {firstName: "Aganze", lastName : "Felicite", age: 23, location: "Kigali"};
let studentList : Student[] = [std1, std2]

const table = document.createElement("table")
const tableRow = document.createElement("tr")
const tableHeader1 = document.createElement("th")

const tableHeader4 = document.createElement("th")

tableHeader1.textContent = "First Name"

tableHeader4.textContent = "Location"
tableRow.appendChild(tableHeader1)

tableRow.appendChild(tableHeader4)
table.appendChild(tableRow)

studentList.forEach((item) => {
    const row = document.createElement("tr")
    const tableData1 = document.createElement("td")

    const tableData4 = document.createElement("td")
    tableData1.textContent = item.firstName

    tableData4.textContent = item.location
    row.appendChild(tableData1)

    row.appendChild(tableData4)
    table.appendChild(row)

})
document.body.appendChild(table)