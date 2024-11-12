// nhap email de hien thong tin
const email = document.getElementById("email");
const showinfo = document.getElementById("showinfo");
const form = document.getElementById("email-form");

function showInformation() {
  if (validateEmail(email.value)) {
    showinfo.style.display = "block";
    form.style.display = "none";
  } else {
    alert("Vui lòng nhập email hợp lệ!");
  }
}

function validateEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

// function view more
const section = document.querySelectorAll(".section");

section.forEach((sec) => {
  const viewBtn = sec.querySelector(".view-btn");
  if (!viewBtn) return;
  viewBtn.addEventListener("click", () => {
    sec.classList.toggle("active");
  });
});
