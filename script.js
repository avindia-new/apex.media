// Automatically formats and sends the form inquiry straight to WhatsApp!
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value;

  // Replace with your personal or business WhatsApp number (with country code, e.g., 919876543210)
  const myWhatsAppNumber = "918851772685"; 

  // Format message cleanly
  const message = `Hello! I would like to start a project with Apex Digital.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Package:* ${encodeURIComponent(service)}%0A*Details:* ${encodeURIComponent(details)}`;

  // Open WhatsApp chat
  const whatsappURL = `https://wa.me/${myWhatsAppNumber}?text=${message}`;
  window.open(whatsappURL, '_blank');
});
