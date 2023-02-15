// Task3
/* Написать функцию, которая создает пустой объект, но без прототипа. */
function getEmptyObj(){

const emptyObj = Object.create(null)
console.log(emptyObj);
}
getEmptyObj()
