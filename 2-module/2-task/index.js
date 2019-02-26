/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find(obj, value){

    
    let arrIsObj = [];
    let notObj;
        

    for ( let key in obj ) {
        
        let newVal = obj[key]
        if( typeof newVal === 'object' ) {

            let _find;

            if( _find = find( newVal, value ) )
            arrIsObj.push( key + '.' + _find);

            //console.log(_find, arrValue);

        } else {

            if( newVal === value ) {
                notObj = key;
            }

        }

    }

    if( arrIsObj.length > 0 ){
        return ( arrIsObj.length === 1 ) ? arrIsObj.join(',') : arrIsObj;
    } else if(notObj !== undefined) {
        return notObj;
    } else {
        return null
    }

}