document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#number');
const messageInput = document.querySelector('#message');

const serviceID = 'service_9t29mig';
const templateID = 'template_6flwd88'; 
const publicKey = 'WMjRiKL1Yxl7nbgCw';

emailjs.init(publicKey);

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const inputData = {
    from_name: nameInput.value,
    email_Id: emailInput.value,
    number: numberInput.value,
    message: messageInput.value,
  };

  emailjs.send(serviceID, templateID, inputData)
    .then(
        (data) => { // Use data argument directly
        nameInput.value = '';
        emailInput.value = '';
        numberInput.value = '';
        messageInput.value = '';
        console.log("SUCCESS!", data.status, data.text);
        alert("We have received your Delivery, we will reach out as soon as possible within 24hrs for inquiry!!,Thank You!!");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
      }
    );
});
});


const element = document.getElementById("myElement");
const hoverText = "gashorabl@gmail.com";
const originalContent = element.innerHTML; 

element.addEventListener("mouseover", function() {
    element.innerHTML = hoverText;
    element.style.backgroundColor = "lightgray"; // Add hover styling (optional)
  });
  
  element.addEventListener("mouseout", function() {
    element.innerHTML = originalContent; // Restore original HTML
    element.style.backgroundColor = ""; // Remove hover styling (optional)
  });