
/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1200);
});


/* ==========================================
   STICKY HEADER EFFECT
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {

    header.style.background = "rgba(255,255,255,0.75)";
    header.style.backdropFilter = "blur(24px)";
    header.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)";

  } else {

    header.style.background = "rgba(255,255,255,0.45)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.06)";
  }
});


/* ==========================================
   MOBILE NAVIGATION
========================================== */

const mobileBtn = document.querySelector(".mobile-btn");
const nav = document.querySelector(".nav");

mobileBtn.addEventListener("click", () => {

  nav.classList.toggle("show-menu");

  if (nav.classList.contains("show-menu")) {
    mobileBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    mobileBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }

});


/* ==========================================
   CLOSE MENU ON CLICK
========================================== */

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("show-menu");

    mobileBtn.innerHTML =
      `<i class="fa-solid fa-bars"></i>`;

  });

});


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
  ".section, .collection-card, .product-card, .testimonial-card"
);

function revealOnScroll() {

  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(element => {

    const top = element.getBoundingClientRect().top;

    if (top < triggerBottom) {

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* ==========================================
   HERO PARALLAX
========================================== */

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

  const offset = window.scrollY * 0.08;

  if (heroImage) {
    heroImage.style.transform =
      `translateY(${offset}px)`;
  }

});


/* ==========================================
   FLOATING DECORATIONS
========================================== */

const decorations =
  document.querySelectorAll(".hero-decoration");

window.addEventListener("mousemove", (e) => {

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  decorations.forEach((item, index) => {

    const speed = (index + 1) * 12;

    item.style.transform = `
      translate(
        ${x * speed}px,
        ${y * speed}px
      )
    `;

  });

});


/* ==========================================
   WISHLIST BUTTON
========================================== */

document
  .querySelectorAll(".wishlist")
  .forEach(button => {

    button.addEventListener("click", () => {

      const icon = button.querySelector("i");

      icon.classList.toggle("fa-regular");
      icon.classList.toggle("fa-solid");

      button.classList.toggle("liked");

    });

  });


/* ==========================================
   ADD TO CART BUTTON
========================================== */

document
  .querySelectorAll(".product-card button")
  .forEach(button => {

    button.addEventListener("click", () => {

      const originalText = button.innerText;

      button.innerText = "Added ✓";

      button.style.background = "#7c9d7a";

      setTimeout(() => {

        button.innerText = originalText;
        button.style.background = "";

      }, 2000);

    });

  });


/* ==========================================
   CONTACT FORM
========================================== */

const whatsappForm =
    document.getElementById("whatsappForm");

if (whatsappForm) {

    whatsappForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const name =
                document.getElementById("name").value;

            const email =
                document.getElementById("email").value;

            const phone =
                document.getElementById("phone").value;

            const eventDate =
                document.getElementById("eventDate").value;

            const message =
                document.getElementById("message").value;

            // YOUR WHATSAPP NUMBER
            const whatsappNumber =
                "9487807727";

  const text = `
Hello Maison Sucrée,

I would like to inquire about a custom cake order for an upcoming occasion.

Customer Information
--------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Event Date: ${eventDate}

Cake Requirements
--------------------------
${message}

Please let me know the available options, pricing, and any additional details required to proceed.

Thank you for your time, and I look forward to celebrating with one of your creations.
`;;

            const url =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

            window.open(url, "_blank");

        }
    );

}

/* ==========================================
   SMOOTH ACTIVE NAV LINK
========================================== */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {

      link.classList.add("active");

    }

  });

});


/* ==========================================
   NEWSLETTER
========================================== */

const newsletterBtn =
  document.querySelector(".newsletter button");

if (newsletterBtn) {

  newsletterBtn.addEventListener("click", () => {

    const input =
      document.querySelector(
        ".newsletter input"
      );

    if (!input.value.trim()) {

      alert("Please enter your email.");

      return;
    }

    alert(
      "Thank you for subscribing to Maison Sucrée!"
    );

    input.value = "";

  });

}


/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

document
  .querySelectorAll(".gallery-grid img")
  .forEach(image => {

    image.addEventListener("mouseenter", () => {

      image.style.filter =
        "brightness(1.05)";

    });

    image.addEventListener("mouseleave", () => {

      image.style.filter =
        "brightness(1)";

    });

  });


/* ==========================================
   YEAR AUTO UPDATE
========================================== */

const footerText =
  document.querySelector("footer p");

if (footerText) {

  footerText.innerHTML =
    `© ${new Date().getFullYear()} Maison Sucrée.  by Asma.`;

}

