/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */


//et obj = { test: 1 };



let clone =  (obj) => { 

    let newObject = JSON.parse(JSON.stringify(obj));
     return newObject
    }



