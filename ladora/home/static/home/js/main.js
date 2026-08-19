AOS.init({ duration: 1000, once: true });
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
}

const counters = document.querySelectorAll(".number");
const speed = 200;

const animateCounters = () => {
    counters.forEach((counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = Math.ceil(target / speed);
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
    updateCount();
});
};

// تشغيل العدّاد عند الظهور في الشاشة
const section = document.querySelector(".stats-section");
let started = false;
window.addEventListener("scroll", () => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100 && !started) {
        animateCounters();
        started = true;
    }
});
function toggleMenu() {
    const menu = document.getElementById('langMenu');
    menu.classList.toggle('hidden');
};


document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const notes = document.getElementById("notes").value.trim();
    const message = `مرحبا، أود حجز موعد:\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالبريد الإلكتروني: ${email}\nملاحظات: ${notes}`;
    const encodedMsg = encodeURIComponent(message);
    const whatsappNumber = "";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, "_blank");
    
});





