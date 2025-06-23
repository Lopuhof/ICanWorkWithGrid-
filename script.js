'use sctrict';

let navItem = document.querySelectorAll('.item');

function redactBackgroundColor(item) {
    let count = 0;
    for (let i = 0; i < item.length; i = i + 1) {
        item[i].addEventListener('click', function() {
            count = count + 1;
            if (count % 2 != 0) {
                item[i].style.backgroundColor = "yellow";
            } else {
                item[i].style.backgroundColor = "white";
            };
        });
    };
    return item;
};

redactBackgroundColor(navItem);