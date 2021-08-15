const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btnt = document.querySelector(".btnt");
const booklist = document.querySelector("#book-list");

btnt.addEventListener('click', function (e) {
    e.preventDefault();

    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Please input your information.');

    } else {
        const newRow = document.createElement('tr');


        const newtitle = document.createElement('th');
        newtitle.innerHTML = title.value;
        newRow.appendChild(newtitle);



        const newauthor = document.createElement('th');
        newauthor.innerHTML = author.value;
        newRow.appendChild(newauthor);




        const newyear = document.createElement('th');
        newyear.innerHTML = year.value;
        newRow.appendChild(newyear);

        booklist.appendChild(newRow);
    }
});



const likeBtn = document.querySelector(".like-btn");
let likeIcon = document.querySelector("#icon");
let count = document.querySelector("#cont");


let clicked = false;

likeBtn.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
        count.textContent++;

    } else {
        clicked = false;
        likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
        count.textContent--;
    }

});





