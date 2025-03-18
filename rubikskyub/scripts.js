
function openDialog(dialogId) {
    document.getElementById(dialogId).style.display = "block";
}


function closeDialog(dialogId) {
    document.getElementById(dialogId).style.display = "none";
}


function toggleForm(formId) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    
    document.getElementById(formId).style.display = "block";
}


window.onclick = function(event) {
    let dialog = document.getElementById("loginRegisterDialog");
    if (event.target === dialog) {
        dialog.style.display = "none";
    }
};

let lastScrollTop = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      
      header.classList.add("hidden");
    } else {
      
      header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
  });