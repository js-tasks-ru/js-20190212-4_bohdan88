/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
   
  
   
for (var i = 0, row; row = table.rows[i]; i++) {
   
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
  
   for (var j = 0, col; col = row.cells[j]; j++) {

    // add class to dataset  
    if (col.dataset.available === 'true') {
        row.classList.add('available', true);
}   else if (col.dataset.available === 'false') {
    row.classList.add('unavailable', true);
   }   
   // add class 

   if (col.innerHTML === "m") {
        row.classList.add('male');
   } else if (col.innerHTML === "f") {
        row.classList.add('female');
     
   } 

   // lastOne 

   if (col.innerHTML < 18 ) {
    row.style.textDecoration = "line-through"
   }

   // hidden


   const hidden = {
    3: function(trCheck, cell) {

         if (!cell.hasAttribute('data-available')) {
           trCheck.hidden = true;
         }
  
    },  
  };
   

  for (let tr of table.rows) {

          Array.from(tr.cells).forEach(function(cell, key) {
               let value = hidden[key];

                   if (typeof value === 'function') {
                   value(tr, cell);
             }

           });

       }    
     }
  }
}
