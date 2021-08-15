'use strict';

// 1)Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.
const button0 = document.querySelector('.mouseover');
button0.addEventListener('mouseover',() => {
    alert('Ваш курсор вошёл в границы кнопки с типом "mouseover"')
});

// 2)Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение.
const button1 = document.querySelector('.mouseout');
button1.addEventListener('mouseout',() => {
    alert('Ваш курсор вышел из границ кнопки с типом "mouseout"')
});

// 3)Дана кнопка. По клику по ней выведите на экран какое-нибудь сообщение.
const button2 = document.querySelector('.click');
button2.addEventListener('click',() => {
    alert('Вы нажали по кнопке с типом "click"')
});

button0.style.display = 'block';
button0.style.height = '60px';
button0.style.width = '200px';
button0.style.padding = '10px';
button0.style.margin = '50px 0';
button0.style.background = 'black';
button0.style.borderRadius = '15px';
button0.style.fontSize = '18px';
button0.style.color = 'white';

button1.style.display = 'block';
button1.style.height = '60px';
button1.style.width = '200px';
button1.style.padding = '10px';
button1.style.margin = '50px 0';
button1.style.background = 'black';
button1.style.borderRadius = '15px';
button1.style.fontSize = '18px';
button1.style.color = 'white';

button2.style.display = 'block';
button2.style.height = '60px';
button2.style.width = '200px';
button2.style.padding = '10px';
button2.style.margin = '50px 0';
button2.style.background = 'black';
button2.style.borderRadius = '15px';
button2.style.fontSize = '18px';
button2.style.color = 'white';

// 4)Дан следующий HTML:
//    <div id="block">
//        <p>text1</p>
//        <p>text2</p>
//        <p>text3</p>
//        <p>text4</p>
//    </div>
// Получите ссылку на первый абзац из дива с id, равным block.
// Поменяйте цвет текстов на синий . Дайте цвет фона для block

const text = document.querySelector('#block');

text.firstChild;
text.style.color = 'blue';
text.style.fontFamily = 'Arial Black';
text.style.fontSize = '26px';
text.style.background = 'deepskyblue';
text.style.display = 'flex';
text.style.justifyContent = 'space-around';
text.style.margin = '0 30px';
text.style.borderRadius = '15px';
text.style.borderTop = '3px solid lightblue';
text.style.borderLeft = '3px solid lightblue';
console.log(text);