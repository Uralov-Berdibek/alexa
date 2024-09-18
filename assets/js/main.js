/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== VIDEO ====================*/
// const videoFile = document.getElementById('video-file'),
//   videoButton = document.getElementById('video-button'),
//   videoIcon = document.getElementById('video-icon');

// function playPause() {
//   if (videoFile.paused) {
//     // Play video
//     videoFile.play();
//     // We change the icon
//     videoIcon.classList.add('ri-pause-line');
//     videoIcon.classList.remove('ri-play-line');
//   } else {
//     // Pause video
//     videoFile.pause();
//     // We change the icon
//     videoIcon.classList.remove('ri-pause-line');
//     videoIcon.classList.add('ri-play-line');
//   }
// }
// videoButton.addEventListener('click', playPause);

// function finalVideo() {
//   // Video ends, icon change
//   videoIcon.classList.remove('ri-pause-line');
//   videoIcon.classList.add('ri-play-line');
// }
// // ended, when the video ends
// videoFile.addEventListener('ended', finalVideo);
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
/*==================== DARK LIGHT THEME ====================*/
// const themeButton = document.getElementById('theme-button');
// const darkTheme = 'dark-theme';
// const iconTheme = 'uil-sun';

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme');
// const selectedIcon = localStorage.getItem('selected-icon');

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
// const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun');

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
//   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//   // Add or remove the dark / icon theme
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);
//   // We save the theme and the current icon that the user chose
//   localStorage.setItem('selected-theme', getCurrentTheme());
//   localStorage.setItem('selected-icon', getCurrentIcon());
// });

// send telegram bot

const userName = document.querySelector('#name');
const userPhone = document.querySelector('#number');
const city = document.querySelector('#city');
const sendBtn = document.querySelector('.btn-submit');

sendBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  let user = userName.value;
  let phoneNumber = userPhone.value;
  let region = city.value;

  let tg = {
    token: '7011212711:AAEuv66udXepEsW7czL1b-laZishZm6aXro', // Your bot's token that got from @BotFather
    chat_id: '650837211', // The user's(that you want to send a message) telegram chat id
  };

  /**
   * By calling this function you can send message to a specific user()
   * @param {String} the text to send
   *
   */

  function sendMessage(user, phoneNumber) {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage`; // The url to request

    const obj = {
      chat_id: tg.chat_id,
      text: `Ism: ${user}
Telefon nomer: ${phoneNumber}
Viloyot/Shahar: ${region}`,
    };

    const xht = new XMLHttpRequest();
    xht.open('POST', url, true);
    xht.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xht.send(JSON.stringify(obj));
  }

  // Now you can send any text(even a form data) by calling sendMessage function.
  // For example if you want to send the 'hello', you can call that function like this:

  if (user !== '' && phoneNumber !== '') {
    sendMessage(user, phoneNumber);

    setTimeout(() => {
      window.location.href = 'tm.html';
    }, 1000);
  } else {
    alert('Ism yoki telfon nomer kiritilmagan');
  }
});
