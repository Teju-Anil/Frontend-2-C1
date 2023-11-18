const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
     for (let i = 0; i < data.length; i++) {
        if (data[i].profession === "developer") {
    console.log(data[i]);
    console.log("Here are the Developers")
  }
  }
  }
  // 2. Add Data
  function addData() {
    let name = prompt("enter your name")
    let age = prompt("enter your age")
    let profession = prompt("enter your profession")
    let obj = { name: name, age: age, profession: profession };
    data.push(obj);
    console.log("Data Added Successfully! if you wish to add another data,please click on same button")
    console.log(obj)
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for (let i = 0; i < data.length; i++) {
         if (data[i].profession === "admin") {
              data.pop(data[i].profession);
         }
    }
    console.log("Removed Admin Successfully")
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const example = [
         { name: "anuj", age: 24, profession: "developer" },
         { name: "rohan", age: 27, profession: "admin" },
         { name: "shri", age: 23, profession: "developer" },
         { name: "sumant", age: 28, profession: "admin" }];
    for (let i = 0; i < example.length; i++) {
         data.push(example[i])
    }
    console.log("Concatination of Arrays is Successfully excuted");
  }
  
  // 5. Average Age
  function averageAge() {
    let x = 0;
    for(let i=0;i<data.length;i++){
         x = x+data[i].age;
    }
    console.log("Average Age in the array is ==>  "+x/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(let i=0;i<data.length;i++){
         if(data[i].age>=25){
              console.log(data[i]);
         }
    }
  
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let arr = [];
    for(let i=0;i<data.length;i++){
         if(arr.includes(data[i].profession)==true){
              continue;
         }else{
              arr.push(data[i].profession);
         }
    }
    console.log(arr);
  
  }
  
  // 8. Sort by Age
  function sortByAge() {
   data.sort((a,b)=>a.age-b.age);
   console.log(data);
   console.log("Sorted")
  
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i=0;i<data.length;i++){
         if(data[i].name==="john"){
              data[i].profession="manager";
         console.log(data[i]);
              console.log("Updated successfully")
         }
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let admin =0;
    let dev = 0;
    for(let i=0;i<data.length;i++){
         if(data[i].profession==="admin"){
              admin++;
         }else if(data[i].profession==="developer"){
              dev++;
         }
    }
    console.log(`total admin are ${admin}`)
    console.log(`total developers are ${dev}`)
  }