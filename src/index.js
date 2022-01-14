const submitForm = document.querySelector('.send-msg-form')
const topTilte = document.querySelector('.top-title')

const formName = document.querySelector('.f-name')
const formEmail = document.querySelector('.f-email')
const formMessage = document.querySelector('.f-message')

const formResModal = document.querySelector('.form-res-modal');
const modalClose = document.querySelector('.fa-times');
const modalText = document.querySelector('.form-res-text');

const testFunc = (e) => console.log('clicked!!')

topTilte.addEventListener('click', (e) => console.log("works"))


submitForm.addEventListener('submit', async (e) => {
  e.preventDefault(); 


  console.log(formName.value, formEmail.value, formMessage.value,)
  
  const data = await {
    name: formName.value,
    email: formEmail.value,
    message: formMessage.value 
  }

  fetch('http://localhost:3003/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    formName.value = ""
    formEmail.value = ""
    formMessage.value = ""

    const smileIcon = document.createElement('span')
    smileIcon.classList.add("fa-smile-beam")
    modalText.textContent = "Thank you for contacting me, I will respond to you as soon as I can."
    modalText.append(smileIcon)
    formResModal.style.display = "flex";
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
  // console.log('submit stuff')
})

modalClose.addEventListener('click', () => {
  formResModal.style.display = "none";
})

console.log("so far so good")