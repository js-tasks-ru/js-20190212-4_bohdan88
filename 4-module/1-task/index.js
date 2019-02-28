
'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */


function makeFriendsList(friends){
    let ul = document.createElement('ul')

    
    ul.innerHTML = friends.map( elem => {
    	let result =  '<li>' + elem.firstName + ' ' + elem.lastName  + '</li>'
      return result
    })
    

    return ul 
    
        
    }
