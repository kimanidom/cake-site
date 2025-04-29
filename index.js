function flipCard(card) {
    card.classList.toggle('is-flipped');
  }
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you, ${name}! We'll get back to you soon.`);
    this.reset();
  });
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
  
    // Your WhatsApp phone number (with country code, no '+' sign)
    const phoneNumber = '+254711255905';
    
    // URL encode the message and name to make it compatible with WhatsApp
    const whatsappMessage = encodeURIComponent(`Name: ${name}\nMessage: ${message}`);
  
    // Create WhatsApp message link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  
    // Redirect user to WhatsApp with pre-filled message
    window.location.href = whatsappLink;
  });
    
