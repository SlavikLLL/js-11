let arr = [];
let li_elements = document.querySelectorAll('li');
console.log(li_elements.length);
for(let text of li_elements){
    arr.push(text.innerHTML);
}
console.log(arr);


