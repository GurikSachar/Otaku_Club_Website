function show(num) {
    if (num == 1) {
        let social = document.getElementById('item1');
        let options1 = document.getElementById('options1');
        options1.style.visibility = 'visible';
        options1.style.display = 'inline-flex';
    }
    else if (num == 2) {
        let about = document.getElementById('item2');
        let options2 = document.getElementById('options2');
        options2.style.visibility = 'visible';
        options2.style.display = 'inline-flex';
    }
    else if (num == 3) {
        let events = document.getElementById('item3');
        let options3 = document.getElementById('options3');
        options3.style.visibility = 'visible';
        options3.style.display = 'inline-flex';
    }
    else if (num == 4) {
        let depart = document.getElementById('item4');
        let options4 = document.getElementById('options4');
        options4.style.visibility = 'visible';
        options4.style.display = 'inline-flex';
    }
    else {
        let form = document.getElementById('item5');
        let options5 = document.getElementById('options5');
        options5.style.visibility = 'visible';
        options5.style.display = 'inline-flex';
    }
}

function hide(num) {
    if (num == 1) {
        let social = document.getElementById('item1');
        let options1 = document.getElementById('options1');
        options1.style.display = 'none';
    }
    else if (num == 2) {
        let about = document.getElementById('item2');
        let options2 = document.getElementById('options2');
        options2.style.display = 'none';
    }
    else if (num == 3) {
        let events = document.getElementById('item3');
        let options3 = document.getElementById('options3');
        options3.style.display = 'none';
    }
    else if (num == 4) {
        let depart = document.getElementById('item4');
        let options4 = document.getElementById('options4');
        options4.style.display = 'none';
    }
    else {
        let form = document.getElementById('item5');
        let options5 = document.getElementById('options5');
        options5.style.display = 'none';
    }
}