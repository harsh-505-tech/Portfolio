document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (Form not connected to backend)");
});