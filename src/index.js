const submitForm = document.querySelector('.send-msg-form')
const topTilte = document.querySelector('.top-title')

const formName = document.querySelector('.f-name')
const formEmail = document.querySelector('.f-email')
const formMessage = document.querySelector('.f-message')


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
    window.alert("successful")
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
  // console.log('submit stuff')
})

console.log("so far so good")