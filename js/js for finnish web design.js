function sendEmail() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate the form data
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Prepare the mailto link
    const subject = encodeURIComponent("New Message from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
    const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

    // Open the user's email client
    window.location.href = mailtoLink;
}

document.querySelectorAll(".cta-button").forEach(button => {
    button.addEventListener("click", function() {
      alert("More details about " + this.previousElementSibling.innerText + " will be available soon!");
    });
  });
  