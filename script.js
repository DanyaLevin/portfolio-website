// The following cunt enables "Expand All Fields" button

let expandAllButton = document.getElementById('expand-all-button');

let revertButton = document.getElementById('revert-button');

let itemsToExpand = ['exp-5-com-more', 'exp-5-man-more', 'exp-4-com-more', 'exp-4-cat-more', 'exp-4-man-more', 'exp-3-com-more', 'exp-3-cat-more', 'exp-3-man-more', 'exp-2-com-more', 'exp-2-ach-more', 'exp-2-cat-more', 'exp-2-man-more', 'exp-1-com-more', 'exp-1-ach-more', 'exp-1-cat-more', 'exp-1-man-more', 'edu-3-est-more', 'edu-2-est-more', 'edu-1-est-more', 'tra-4-est-more', 'tra-4-des-more', 'tra-3-est-more', 'tra-3-des-more', 'tra-2-est-more', 'tra-2-des-more', 'tra-1-est-more', 'tra-1-des-more'];

let itemsToBold = ['exp-5-com', 'exp-5-man', 'exp-4-com', 'exp-4-cat', 'exp-4-man', 'exp-3-com', 'exp-3-cat', 'exp-3-man', 'exp-2-com', 'exp-2-ach', 'exp-2-cat', 'exp-2-man', 'exp-1-com', 'exp-1-ach', 'exp-1-cat', 'exp-1-man', 'edu-3-est', 'edu-2-est', 'edu-1-est', 'tra-4-est', 'tra-4-des', 'tra-3-est', 'tra-3-des', 'tra-2-est', 'tra-2-des', 'tra-1-est', 'tra-1-des'];



function expandAllInfo() {
    for (i=0; i<itemsToExpand.length; i++) {
        let a = document.getElementById(itemsToExpand[i]);
        a.style.display = 'block';
    }
    expandAllButton.style.display = 'none';
    revertButton.style.display = 'block';
};

function revert() {
    for (i=0; i<itemsToExpand.length; i++) {
        let a = document.getElementById(itemsToExpand[i]);
        a.style.display = 'none';
    }
    expandAllButton.style.display = 'block';
    revertButton.style.display = 'none';
};





// The following cunt cycles through photos
// Calling out the function is needed for photos to change from the first click

nextPhoto();

function nextPhoto () {
    let a = document.getElementById('intro-img');
    if (a.innerHTML === '<img onclick="nextPhoto()" src="resources/Daniil Levin Photo 1.jpeg">') {
        a.innerHTML = '<img onclick="nextPhoto()" src="resources/Daniil Levin Photo 2.png">';
    } else if (a.innerHTML === '<img onclick="nextPhoto()" src="resources/Daniil Levin Photo 2.png">') {
        a.innerHTML = '<img onclick="nextPhoto()" src="resources/Daniil Levin Photo 3.png">';
    } else {
        a.innerHTML = '<img onclick="nextPhoto()" src="resources/Daniil Levin Photo 1.jpeg">'; 
    };
};





// The following cunt allows expanding fields one by one

toggleMore('exp-5-com', 'exp-5-com-more');
toggleMore('exp-5-man', 'exp-5-man-more');

toggleMore('exp-4-com', 'exp-4-com-more');
toggleMore('exp-4-cat', 'exp-4-cat-more');
toggleMore('exp-4-man', 'exp-4-man-more');

toggleMore('exp-3-com', 'exp-3-com-more');
toggleMore('exp-3-cat', 'exp-3-cat-more');
toggleMore('exp-3-man', 'exp-3-man-more');

toggleMore('exp-2-com', 'exp-2-com-more');
toggleMore('exp-2-cat', 'exp-2-cat-more');
toggleMore('exp-2-ach', 'exp-2-ach-more');
toggleMore('exp-2-man', 'exp-2-man-more');

toggleMore('exp-1-com', 'exp-1-com-more');
toggleMore('exp-1-cat', 'exp-1-cat-more');
toggleMore('exp-1-ach', 'exp-1-ach-more');
toggleMore('exp-1-man', 'exp-1-man-more');

toggleMore('edu-3-est', 'edu-3-est-more');
toggleMore('edu-2-est', 'edu-2-est-more');
toggleMore('edu-1-est', 'edu-1-est-more');

toggleMore('tra-4-est', 'tra-4-est-more');
toggleMore('tra-4-des', 'tra-4-des-more');
toggleMore('tra-3-est', 'tra-3-est-more');
toggleMore('tra-3-des', 'tra-3-des-more');
toggleMore('tra-2-est', 'tra-2-est-more');
toggleMore('tra-2-des', 'tra-2-des-more');
toggleMore('tra-1-est', 'tra-1-est-more');
toggleMore('tra-1-des', 'tra-1-des-more');

function toggleMore (a, b) {
    let c = document.getElementById(a);
    let d = document.getElementById(b);
    if (d.style.display === 'none') {
        d.style.display = 'block';
    } else {     
        d.style.display = 'none';
    };
};