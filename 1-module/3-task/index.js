
'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
'use strict';

let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

//let checkLine = '-25,-1,-234,-4,   1000';

/**
 * Найти min/max в произвольной строке
 * @param   {String} входные данные
 * @returns {{min:Number, max:Number}}  объект
 */
    function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

   
function getMinMax(string) {
    let obj = {};

  
    let findData =  string.replace(/,/g, ' ').split(' ');
    
    let max = findData[0];
    let min = findData[0];
    
            for (let i = 0; i < findData.length; i++ ){
                if (isNumeric(findData[i]) ){
                    

                    if  (parseFloat(max) < findData[i])
                    max = findData[i];
                    
                    if  (findData[i] < parseFloat(min))
                    min = findData[i];
                    
                    obj.min = parseFloat(min);
                    obj.max = parseFloat(max);
                    
                    
                 
                }
    }
    return obj; 

}


//console.log(getMinMax(checkLine)); // ожидается [-5.8, 73]