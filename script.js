// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if(name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent.");
    document.getElementById("contact-form").reset();
  } else {
    alert("Please fill out all fields!");
  }
});

// jQuery Example: Smooth scroll
$(document).ready(function(){
  $("nav ul li a").on("click", function(e){
    if(this.hash !== ""){
      e.preventDefault();
      let hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });
});
