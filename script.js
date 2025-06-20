'use strict';

let navItem = document.querySelectorAll('.item');

function redactColor(item) {
        if (item[i].style.backgroundColor = "none") {
            for (let i = 0; i < item.length; i = i + 1) {
                item[i].addEventListener('click', function() {
                    item[i].style.backgroundColor = "yellow";
                });
            }
        } else if (item[i].style.backgroundColor = "yellow") {
            for (let i = 0; i < item.length; i = i + 1) {
                item[i].addEventListener('click', function() {
                    item[i].style.backgroundColor = "none"; 
                });   
            };    
        };
    return item;
};

redactColor(navItem);