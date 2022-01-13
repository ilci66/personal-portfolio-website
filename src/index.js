let name = "";
let email = "";
let message = "";

const submitForm = document.querySelector('.send-msg-form')
const topTilte = document.querySelector('.top-title')

topTilte.addEventListener('click', () => console.log("works"))


submitForm.addEventListener('click', (e) => {
  prevent.default(e); 
  console.log('submit stuff')
})

console.log("so far so good")