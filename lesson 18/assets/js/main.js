
// 1
// function js_style() {
//     text.style.fontSize ="20pt";
//     text.style.color ="darkblue";
//     text.style.background = "red";
//     text.style.border = "1px solid black";
//     text.style.width = "100px";
//     text.style.height = "100px";
// }


// 2
// function getFormvalue() {
//     var form = document.getElementById("form1");
//     for (var i = 0; i < x.length; i++) {
//         if (form.elements[i].value != 'Submit') {  
//             let p = document.createElement('p');
//             p.textContent('form.elements[i].value');
//         }
//     }
// }


// 3
// function getAttributes() {
//     let p = '';
//     // let tip = document.querySelector('#w3r').type;
//     // let hl = document.querySelector('#w3r').hreflang;
//     // let r = document.querySelector('#w3r').rel;
//     // let tar = document.querySelector('#w3r').target;
//     // let h = document.querySelector('#w3r').href;

//     for (item of document.querySelector('#w3r').attributes) {
//         p += `<p>${item.nodeName} = ${item.nodeValue}</p>`;
//     }
//     document.querySelector('#p').innerHTML = p;
// }


// 4
// function insert_Row() {
//     let new_elems = document.querySelector('#newrow').value.split(' ');
//     let tr_elem = document.createElement('tr');
//     for (elem of new_elems) {
//         let td_elem = document.createElement('td');
//         td_elem.innerText = elem;
//         tr_elem.appendChild(td_elem);
//     }
//     document.querySelector('#sampleTable').appendChild(tr_elem);
// }


// 5
// function changeContent() {
//     let row = Number( prompt('Строка: ') );
//     let column = Number( prompt('Столбец: ') );
//     let str = prompt('Текст: ');

//     let table_elem = document.querySelector('#myTable');
//     let tr_elem = table_elem.querySelectorAll('tr')[row];
//     let td_elem = tr_elem.querySelectorAll('td')[column];
//     td_elem.innerText = str;
// }


// 6
// function createTable() {
//     let row = Number( prompt('Строк: ') );
//     let column = Number( prompt('Столбцов: ') );
//     let table_elem = document.querySelector('#myTable');

//     for (let i = 0; i < row; i ++) {
//         let tr_elem = document.createElement('tr');
//         for (let ii = 0; ii < column; ii ++) {
//             let td_elem = document.createElement('td');
//             td_elem.innerText = `${i}${ii}`;
//             tr_elem.appendChild(td_elem);
//         }
//         table_elem.appendChild(tr_elem);
//     }
// }


// 7
// function removecolor() {
//     let select_elem = document.querySelector('#colorSelect');
//     let delete_elem = select_elem.options[select_elem.selectedIndex];
//     select_elem.removeChild(delete_elem);
// }


// 8
// function getOptions() {
//     let select_elem = document.querySelector('#mySelect');
//     let text = String(select_elem.options.length)+'\n';
//     for (item of select_elem.options) {
//         text += item.value+'\n';
//     }
//     alert(text);
// }


// 9
// let forma = document.forms[0];
// forma.addEventListener('submit', function (event){
//     let vars = {
//         'usluga': forma.elements["type"].value,
//         'official': forma.elements["mess"].checked,
//         'date': forma.elements["messa"].checked,
//         'sections': forma.elements["col"].value,
//     }
//     let balance = 0;
//     balance += vars.usluga;
//     balance *= vars.official ? 1.08 : 1;
//     balance *= vars.date ? 0.9 : 1;
//     balance *= (vars.sections-1) / 20 + 1;
//     document.querySelector('#out').innerHTML = balance;
//     event.preventDefault();
// })

// 10
// let table_elem = document.querySelector('table');
// function addUser() {
//     let fname = document.querySelector('#fname').value;
//     let lname = document.querySelector('#lname').value;

//     let tr_elem = document.createElement('tr');
//     let td_fname = document.createElement('td');
//     td_fname.innerText = fname;
//     let td_lname = document.createElement('td');
//     td_lname.innerText = lname;
//     tr_elem.appendChild(td_fname);
//     tr_elem.appendChild(td_lname);

//     table_elem.appendChild(tr_elem);
// }
// function changeValue(event) {
//     let change_tr_elem = event.target;
//     let new_val = prompt('Новое значение: ');
//     change_tr_elem.innerText = new_val;
// }

// 11
// let registration = document.querySelector('.section6');

// function openModal() {
//     registration.classList.add('open');
// }

// function closeModal() {
//     registration.classList.remove('open');
//     registration.classList.add('close');

//     setTimeout(function() {
//         registration.classList.remove('close');
//     }, 2500)
// }






