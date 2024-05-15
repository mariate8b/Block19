
const freelancers = [
    { name: "Oscar", Occupation: "Programmer", age: "28" },
    { name: "Laura", Occupation: "Driver", age: "35" },
    { name: "Daniella", Occupation: "Programmer", age: "45" },
  ];
  
  const newjobs = [
    { name: "Robert", Occupation: "Programmer", age: "28" },
    { name: "Luis", Occupation: "Driver", age: "31" },
    { name: "Marta", Occupation: "Programmer", age: "28" },
  ];
  
  function init() {
    
    const freelancers = document.querySelector("#freelacers");
   
    const freelancersTitle = document.createElement("h1");
    freelancersTitle.innerText = "Freelancers";
    freelancers.append(freelancersTitle);
  
    const FreelancersTable = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
  
    for (let key of Object.keys(freelancers[0])) {
   
      const th = document.createElement("th");
      th.innerText = key;
   
      thead.appendChild(th);
    }
  
  
    freelancersTable.appendChild(thead);
   
    freelancersTable.appendChild(tbody);
  
    freelancers.appendChild(freelancersTable);
  
   
    renderFreelancers();
  }
  
 
  function renderFreelancers() {
    
    const freelancersTable = document.querySelector("tbody");

    const freelancersElements = freelancers.map((freelancers) => {
    
      const row = document.createElement("tr");
  
      const f_name = document.createElement("td");
      f_name.innerText = freelancers.name;
  
      const f_type = document.createElement("td");
      f_type.innerText = freelancers.type;
  
      const f_age = document.createElement("td");
      f_age.innerText = freelancers.age;
  
    
      row.appendChild(f_name);
      row.appendChild(f_type);
      row.appendChild(f_age);
  
      return row;
    });
  
   
    freelancersTable.replaceChildren(...freelancersElements);
  }
  
 
  function newjobs() {
    
    if (newjobs.length > 0) {
    
      const newjobs = newjobs.pop();
  
      
      pets.push(newjobs);
  
      
      renderjobs();
    }
  
  
  }
  
 
  setInterval(addFreelancers, 1000);
  

  init();