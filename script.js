// script.js
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const message = document.querySelector("textarea[name='message']").value;

  // Placeholder for backend integration
  alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

  // To integrate with backend, send this data using fetch():
  // fetch('/submit-form', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ name, email, message })
  // })
  // .then(response => response.json())
  // .then(data => console.log(data));
});
