// Alert Banner
let alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
`<div class="alert-banner" style="background-color: #7477BF;">
   <p style="color: white;"><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
   <p class="alert-banner-close">x</p>
 </div>`;

 alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
  }
 });

// Dropdown notification click events
const bell = document.querySelector(".bell");
const dropdown = document.querySelector(".drop-down");
const close = document.querySelector(".close");

dropdown.style.display = "none";

bell.addEventListener('click', (e) => {
    dropdown.style.display = "";
});

close.addEventListener('click', (e) => {
    dropdown.style.display = "none";
});
 