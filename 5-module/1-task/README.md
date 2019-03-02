## Функция highlight##

Напишите функцию highlight, которая для каждой строки tr таблицы:
- Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status
- Проставит аттрибут hidden, если такого атрибута нет вообще
- Проставит класс male/female, в зависимости от содержимого ячекйки Gender
- Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18

```javascript
'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
}
```

Таблицу, которую нужно расскрашивать, можно посмотреть в файле index.html.






function highlight(elem){
        let trs = elem.querySelectorAll('tr')
console.log(trs)





        for ( let i = 0; i < trs.length; i++) {
            let td = trs[i].querySelectorAll('td')
            //console.log(td)
               
            for ( let j = 0; j < td.length; j++){
                console.log(td[j].className += "unavailable")
if (td[j].getAttribute("data-available") === 'true') {
    
       // td[j].classList.add(".unavailable td")
       //td[j].className += "unavailable" 
        //td[j].td += "unavailable"

        
} 
            }
        }
 
}
\


/////// gpls






/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
   
    let trs = table.querySelectorAll('tr')
    
    for (let i = 0; i < trs.length; i++) {
       let value = trs[i]
       let td = value.querySelectorAll('td')

       for (let j = 0; j < td.length; j++) {
           if (td[j].dataset.available === 'true') {
            value.classList.add('available', true);
    }   else if (td[j].dataset.available === 'false') {
        value.classList.add('unavailable', true);
       }       
    }
}

////



}
    
  //  for (let tr of trs) {
  //     let tds = tr.querySelectorAll('td')
//
  //  }

  //  let methods = {
   //     3: (root, td) => {

     //       if (td.dataset.available === 'true') {
      //          root.classList.add('available', true);
      //      } else if (td.dataset.available === 'false') {
      //          root.classList.add('unavailable', true);
      //      } else if (!td.hasAttribute('data-available')) {
      //          root.hidden = true;
      //      }

     //   },
   //     
   // };

  

//    for (let tr of table.rows) {

   //     Array.from(tr.cells).forEach((td, index) => {
   //         let fn = methods[index];

   //         if (typeof fn === 'function') {
   //             fn(tr, td);
    //        }

    //    });

   // }

//}