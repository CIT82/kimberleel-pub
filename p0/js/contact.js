console.log("connected");

const FORM = document.getElementById("form");
const SENT = document.getElementById("sent");

FORM.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = e.target.fullname.value;
  const email = e.target.email.value;
  const c1name = e.target.c1name.value;
  const c1course = e.target.c1course.value;
  const c2name = e.target.c2name.value;
  const c2course = e.target.c2course.value;
  const c3name = e.target.c3name.value;
  const c3course = e.target.c3course.value;
  const p = document.createElement("p");

  let message = `Thank you, ${fullname}! `;

  if (c1name) {
    message += `We are excited to see you're interested in ${c1course} classes for ${c1name}. `;
  }

  if (c2name) {
    message += `We also see you're interested in ${c2course} classes for ${c2name}. `;
  }

  if (c3name) {
    message += `We also see you're interested in ${c3course} classes for ${c3name}. `;
  }

  message += `Someone from our staff will be in touch soon!`;

  p.textContent = message;
  SENT.appendChild(p);
  FORM.reset();
  e.target.querySelector('button[type="submit"]').disabled = true;
});
