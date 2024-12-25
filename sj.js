//1

// let user = {
//   name: "John",
//   age: 30,
//   hobby: "reading",
//   premium: true
// };


// let { name, age, hobby, premium } = user;


// let mood = 'happy';


// hobby = 'skydiving';
// premium = false;


// user = { name, age, hobby, premium, mood };

// for (let key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }


  //2

  function countProps({}) {
    return Object.keys(arguments[0]).length;
  }
  
  const user = {
    name: "kirill",
    age: 15
  };
  
  console.log(countProps(user)); 


  //3

  const employeesBase = {
    kirill: 8,
    sasha: 4000,
    ura: 90,
    ivan: 100,
  };
  
  function findBestEmployee(employees) {
    let maxEmployees = 0;
    let nameBest = "";
  
    for (const [name, work] of Object.entries(employees)) {
      if (work > maxEmployees) {
        maxEmployees = work;
        nameBest = name;
      }
    }
  
    return nameBest;
  }
  
  console.log(findBestEmployee(employeesBase));

  //4


  const salary = {
    Oleg: 200,
    Karina: 500,
    Arina: 700,
  };
  
  function countTotalSalary(employees) {
    let sumSalary = 0;
  
  
    const valuesArray = Object.values(employees);
  
  
    for (const value of valuesArray) {
      sumSalary += value;
    }
  
  
    for (const [name, salary] of Object.entries(employees)) {
      console.log(`${name}: ${salary}`);
    }
  
    return `сума зарплати становить ${sumSalary} грн`;
  }
  
  console.log(countTotalSalary(salary)); 

  //5

  function getAllPropValues(arr, prop) {
    return arr.map(item => item[prop]);
}


const objects = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const names = getAllPropValues(objects, 'name');
console.log(names);  

const ages = getAllPropValues(objects, 'age');
console.log(ages); 

//   //6

  function calculateTotalPrice(allProducts, productName) {
    
 
    const product = allProducts.find(item => item.name === productName);
    
    
    if (product) {
        return product.price * product.quantity;
    }
    
    
    return 0;
}
  
  

const products = [
  { name: 'Apple', price: 2, quantity: 5 },
  { name: 'Banana', price: 1, quantity: 10 },
  { name: 'Orange', price: 3, quantity: 7 }
];

const totalPrice = calculateTotalPrice(products, 'Banana');
console.log(totalPrice);  

const totalPrice2 = calculateTotalPrice(products, 'Apple');
console.log(totalPrice2);  

const totalPrice3 = calculateTotalPrice(products, 'Mango');
console.log(totalPrice3); 