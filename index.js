const freelancers = [
    { name: "Dr. Jaramillo", price: 25, occupation: "programmer" },
    { name: "Dr. Sugarbun", price: 51, occupation: "programmer" },
    { name: "Prof. Glitter", price: 43, occupation: "teacher" },
    { name: "Prof. Bigback", price: 81, occupation: "teacher" },
    { name: "Dr. Readabook", price: 43, occupation: "teacher" },
    { name: "Prof. Bubble", price: 76, occupation: "programmer" },
    { name: "Dr. Fire", price: 47, occupation: "teacher" },
    { name: "Prof. Clone", price: 72, occupation: "driver" },
  ];
  
  function init(){
 /** */
 const list = document.querySelector("#list");
 console.log(list);

 const freelancers = document.createElemnt('h1')
 freelancers.innerText= "Freelancer"
list.append(freelancersTitle);

const listTables = document.createElement("table");
const thead = document.createElement("thead")
const tbody = document.createdElement("tbody")
 
for(let key of Objects.keys(freelancers[0])){
    const th = document.createAttribute.Elements('th');
    const header= document.createTextNode(key);

    the.append(th).appendChild(header);
}
 //add table to
freelancerTable.appendChild(thead);
freelancerTable.appendChild(tbody);
 list.appendChild(freelancerTable);
  }
  
