// Task4
/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. 
Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает. */

function Electdevice(deviceName){

    this.name = deviceName,
    this.country = 'China',
    this.yearGuarantee = 3
    this.getStatus = function(getStatus){
        this.status = getStatus;
    }
       
}

function Personaldevice(deviceName, devicePower, deviceColor, deviceBrand){
    this.name = deviceName
    this.power = devicePower
    this.color = deviceColor
    this.brand = deviceBrand

}

Personaldevice.prototype = new Electdevice()


const firstDevice = new Personaldevice('Computer', 1300, 'Gray', 'Huawei' );
const secondDevice = new Personaldevice('Television', 100, 'Black', 'Xiaomi');

console.log(firstDevice, secondDevice);


firstDevice.getStatus(1);
secondDevice.getStatus(0);

function getElectDevicePower(x,y){
    let a = x.power;
    let b = y.power;

    if(x.status === 0){
        a = 0;
    }
    if(y.status === 0){
        b = 0;
    }

    console.log('Total energy consumption - ' + (a + b));

}
getElectDevicePower(firstDevice, secondDevice);


