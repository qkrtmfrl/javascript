var num1 = [20, 60, 10, 70, 50, 40];
var num2 = new Array(70, 40, 60, 55, 45, 35);

console.log("num1의 요소의 수 :"+num1.length);
var mixArr = ['a', 10, 'b', 20, new Date(), "parkseulgi"];
var objArr = [
    {
        "id":20202801, "name":"yangsungho", "dept":"developer"
    },
    {
        "id":20202802, "name":"leedonguk", "dept":"desiner"
    },
    {
        "id":20202803, "name":"kimhunwoo", "dept":"frontend"
    }
];
var obj = { "num":1004, "name":"parkseulgi","position":"publisher"};
console.log(num1);
console.log(num2);
console.log(mixArr);
console.log(objArr[2].name, objArr[2].dept);
console.log(obj);