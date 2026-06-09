function copyAccount() {
        const text = document.getElementById("accountNumber").innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert("Account number copied!");
        })
        .catch(() => {
            alert("Failed to copy");
        });
    }
function copyAccount() {
        const text = document.getElementById("accountNumber").innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert("Account number copied!");
        })
        .catch(() => {
            alert("Failed to copy");
        });
    }
let slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide() {
        slides.forEach(slide =>
            slide.classList.remove('active')
        );
        slides[index].classList.add('active');
        index = (index + 1) % slides.length;
    }
    setInterval(showSlide, 3000);
const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector('.mobile-nav');
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
const nav_links = document.querySelectorAll('.mobile-nav a');
    nav_links.forEach(link => {
        link.addEventListener('click', function () {
            menu_btn.classList.remove('is-active');
            mobile_menu.classList.remove('is-active');
        });
    });