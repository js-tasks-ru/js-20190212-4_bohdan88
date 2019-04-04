(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
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


    class ClearedTable {

        constructor(data){
            this.el = document.createElement('table');
            this.data = data;
            this.createTHead();
            this.createMain();
            let table = this.el
            table.onclick = (e) =>  {
                let target = e.target;
                if ( target.nodeName === 'A') {
                    removeEl(target, this);
                }
            };
        }

        createTHead() {
            {
                this.el.innerHTML = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td><td></td></tr></thead>' }

        }

        createMain(){
            let body = document.createElement("tbody");
            this.data.forEach(function(el) {
                let row = document.createElement("tr");
                row.innerHTML = `
        <td>${el.name}</td>
        <td>${el.age}</td>
        <td>${el.salary}</td>
        <td>${el.city}</td>
        <td>
        <a 
        href="#delete" 
        data-id=${el.id}>
        x
        <a/>
        </td>`;
                body.appendChild(row);
            });
            return this.el.appendChild(body);

        }







    /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
    onRemoved(id) {
        console.log(`${id}`);
    }
    }

    window.ClearedTable = ClearedTable;

    function removeEl(tag, table) {
        tag.parentNode.parentNode.remove();
        let dataId = parseInt(tag.getAttribute("data-id"));
        table.onRemoved(dataId);
    }
})();
