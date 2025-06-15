// script.js
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  if (name && email && message) {
    alert("Message sent! (Form not yet connected to database)");
    // Placeholder: Use fetch() or AJAX here to send data to your backend/database
    e.target.reset();
  } else {
    alert("Please fill out all fields.");
  }
});
