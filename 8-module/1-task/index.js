'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
//function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
   // this.el = document.createElement('table');

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    //this.sort = function (column, desc = false) { };
//}


function SortableTable(items) {
    this.el = document.createElement('table');

    this.el.innerHTML = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead>'

    // create backbone

    let tbody = document.createElement('tbody')
    this.el.appendChild(tbody)

    for (let i = 0; i <  items.length; i++ ) {
        let tr = document.createElement('tr')
        var value = items[i]
        for (let i in value){
            let td = document.createElement('td')
            td.innerHTML += value[i]
            tr.appendChild(td)
        }
        tbody.appendChild(tr)

    }

    this.sort = function (column, desc = false) {

        const rows = this.el.rows;

        let i, a,b;
        for ( i = 1; i < rows.length - 1; i++) {
            a = column === 2 ? Number (rows[i].cells[column].textContent) :
                rows[i].cells[column].textContent.toLowerCase();


            b = column === 2 ? Number (rows[i + 1].cells[column].textContent):
                rows[i +1].cells[column].textContent.toLowerCase();

        if (desc && a < b) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);

        } else if (!desc && a > b) {
            rows[i].parentNode.insertBefore(rows[i +1], rows[i]);
        }

        }

    };
}





