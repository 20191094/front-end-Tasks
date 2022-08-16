
const mypromise= new Promise(function(resloved,rejected){
let students = ['Nada','Mayar','Fatma','Somia'];
  if (students.length === 4) {
    resloved(students);
  } else {
    rejected(Error("Number Of Employees Is Not 4"));
  }
});

mypromise
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason)) //catch the rejected and print the rejected msg
  .finally(console.log("The Operation Is Done"));// will be done either the operation is fulfilled or rejected