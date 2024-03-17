const answers_yes = {
    english: [
        "Sorry hon.",
        "Sorry na po please.",
        "Wag ka na magalit mahal.",
        "Please hon.",
        "Don't be mad at me.",
        "I'm sorry honey.",
        "I love you so much.",
        "Please don't be mad at me anymore.",
        "I'm sorry my love.",
        "Sorry sorry sorry sorry sorry",
        "Sorry honey.",
        "I'm super sorry my love.",
        "Please accept my apology",
        "I love you hon.",
        "Ok, Let's just start over.."
    ]
};

answers_no = {
    "english": "No"
}

let language = "english"; // Default language is English
const yes_button = document.getElementById('yes-button');
const no_button = document.getElementById('no-button');
let i = 1;
let size = 50;
let clicks = 0;

yes_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "/img/yes.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    no_button.style.height = `${size}px`;
    no_button.style.width = `${size}px`;
    let total = answers_yes[language].length;
    // change button text
    if (i < total - 1) {
        yes_button.innerHTML = answers_yes[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_yes[language][i]);
        i = 1;
        yes_button.innerHTML = answers_yes[language][0];
        no_button.innerHTML = answers_no[language];
        no_button.style.height = "50px";
        no_button.style.width = "50px";
        size = 50;
    }
});

no_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "/img/no.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}