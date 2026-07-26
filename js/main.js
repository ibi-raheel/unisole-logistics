/* UniSole Logistics — interactions */
(function () {
  "use strict";

  // Mobile nav toggle
  var burger = document.querySelector(".burger");
  var links = document.querySelector(".nav__links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        burger.classList.remove("open");
        links.classList.remove("open");
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll(".faq__q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq__item");
      var answer = item.querySelector(".faq__a");
      var isOpen = item.classList.contains("open");
      // close siblings
      document.querySelectorAll(".faq__item.open").forEach(function (o) {
        if (o !== item) {
          o.classList.remove("open");
          o.querySelector(".faq__a").style.maxHeight = null;
        }
      });
      item.classList.toggle("open");
      answer.style.maxHeight = isOpen ? null : answer.scrollHeight + "px";
    });
  });

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Form fake-submit (placeholder until backend wired up)
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-status");
      if (note) {
        note.textContent = "Thanks! Your request has been received — a dispatcher will reach out shortly.";
        note.style.color = "#a52b8b";
      }
      form.reset();
    });
  });
})();
