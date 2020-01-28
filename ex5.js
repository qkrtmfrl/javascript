console.log("for문");
const colors = ["greenary","skyblue","lemon"];
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}
console.log("for문2");
for(let key in colors){
    console.log(key+":"+colors[key]);
}
console.log("while문");
var i=0;
while(colors[i] != null){
    console.log(colors[i]);
    i++;
}
console.log("forEach문1"); //전통적인 작성 방법
colors.forEach(function(value){
    console.log(value);
});
console.log("forEach문2"); //새로운 작성 방법
colors.forEach(value => console.log(value));
