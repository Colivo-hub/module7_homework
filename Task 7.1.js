// Task1
/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */

const getObj = function(Obj){
    for(let key in Obj){
        if(Obj.hasOwnhasOwnProperty(key)) {
            console.log(key);
        }
    }
}
getObj()

Obj ={
    Name: "Ivan",
    Surname: "Ivanov",
    Age: 25,
    Hometown: "Rostov"
}