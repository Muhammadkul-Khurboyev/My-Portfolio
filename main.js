var mixer = mixitup('.portfolio-gallary');

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
  let len = section.length;
  while(--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();

window.addEventListener("scroll", activeMenu);

const elHeader = document.querySelector("header");
window.addEventListener("scroll", function(){
  elHeader.classList.toggle("sticky", this.window.scrollY > 50)
})


let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener('click', ()=> {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
});

window.addEventListener('scroll', ()=> {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
});

// Paralax -------------------------------------
const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show-items");
    }else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));



// Send user contact information==================================================
const form = document.getElementById('contactForm');
    const BOT_TOKEN = '7650335694:AAGuhWa1M2XKzvmCgHkAXo_wdm_GkVbvecI';
    const CHAT_ID = '6708106529';

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const number = document.getElementById('number').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const text = `🔔 Yangi Xabar:\n\n👤 Ism: ${name}\n📧 Addres: ${address}\n Phone_number: ${number} Email: ${email}\n💬 Xabar: ${message}`;

      try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text
          })
        });

        if (response.ok) {
          alert('Xabaringiz muvaffaqiyatli yuborildi!');
          form.reset();
        } else {
          alert('Xabarni yuborishda xatolik yuz berdi.');
        }
      } catch (error) {
        console.error('Telegram API xatosi:', error);
        alert('Xabarni yuborishda xatolik yuz berdi.');
      }
    });