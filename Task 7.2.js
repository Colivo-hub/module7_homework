// Task2
/* Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */

const str = 'name';

const Obj ={
    [str]: 'Ivan',
    Surname: 'Ivanov',
    Age: 25,
    Hometown: 'Rostov'
};

function getRes(str, Obj){
        return str in Obj
  
}
getRes(str, Obj)


