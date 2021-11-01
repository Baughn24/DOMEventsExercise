//1a
const button1 = getElementById (`button1`);

//1b
button1.onclick = `Cool! You can hear/understand a hummingbird and ants`;

//2a
const h3 = document.getElementsByTagName(h3);

//2b
h3.addEventListener(`mouseenter`, () => {
    alert(`OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one`);
});

//3a
const form = document.getElementsByTagName(form);

//3b
form.addEventListener(`submit`, q => {
    q.preventDefault();
    alert(`${form.elements.quote.value}`);
});
