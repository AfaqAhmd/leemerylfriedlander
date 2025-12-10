

    // nav toggle
    const navToggle = document.getElementById("navToggle");
    const mainNav = document.getElementById("mainNav");
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });


    // footer goto top button
    const toTop = document.getElementById("toTop");
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });




  // work.html script
  document.querySelectorAll(".js-work").forEach(card => {
    const title = encodeURIComponent(card.dataset.title || "");
    const subtitle = encodeURIComponent(card.dataset.subtitle || "");
    const password = encodeURIComponent(card.dataset.password || "");
    const director = encodeURIComponent(card.dataset.director || "");
    const desc = encodeURIComponent(card.dataset.desc || "");
    const video = encodeURIComponent(card.dataset.video || "");
    const yt = encodeURIComponent(card.dataset.yt || "");

    let url = `watch.html?title=${title}`;

    if (subtitle) url += `&subtitle=${subtitle}`;
    if (password) url += `&password=${password}`;
    if (director) url += `&director=${director}`;
    if (desc) url += `&desc=${desc}`;
    if (video) url += `&video=${video}`;
    if (yt) url += `&yt=${yt}`;

    card.setAttribute("href", url);
  });




  // contact form in  index page and get-in-touch page

   const form = document.getElementById('cont');

          form.addEventListener('submit', function(e) {

              const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

              if (!hCaptcha) {
                  e.preventDefault();
                  alert("Please fill out captcha field")
                  return
              }
          });