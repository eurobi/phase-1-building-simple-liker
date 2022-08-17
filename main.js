// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function getLikeButtons(){
  const likeButtons = document.querySelectorAll(".like-glyph")
  likeButtons.forEach((button) => button.addEventListener('click', handleClick))

}

function handleClick(event){
  mimicServerCall()
    .then((resp) => {
      if(event.target.className === 'like-glyph'){
        event.target.innerText = FULL_HEART
        event.target.className = 'activated-heart'
      }else{
        event.target.innerText = EMPTY_HEART
        event.target.className = 'like-glyph'
      }
    })
    .catch((error) => {
      const errorModal = document.querySelector('#modal')
      const errorMessage = document.createElement('p')
      errorMessage.innerHTML = error
      errorModal.appendChild(errorMessage)
      errorModal.className = ''
      setTimeout((() => errorModal.className = 'hidden'), 3000)

    })
}

getLikeButtons()
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
