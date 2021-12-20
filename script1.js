
const container = document.querySelector("#container");
console.log(container);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'Hey I\'m Red!';
container.appendChild(para);
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'I\'m Blue h3!';
container.appendChild(h3);
const div1 = document.createElement('div');
container.appendChild(div1);
div1.setAttribute('style','border-color: black; border-style: solid; background-color: pink;');
const div1_h1 = document.createElement('h1');
div1_h1.textContent = 'I\'m in a div';
div1.appendChild(div1_h1);
const para1 = document.createElement('p')
para1.textContent = 'ME TOO! me too';
div1.appendChild(para1);
div1.addEventListener('keyup',(e) => alert(e.target));
