

// Select all cards
let cards = document.querySelectorAll('.innerCard');
let lastGame = document.querySelector('.lastGame');
let count = document.querySelector('.count');

//count of a  matched cards
let cnt = 0;
let cardOne,cardTwo;
let wrongPredicted = 0;

cards.forEach(card => {
  card.addEventListener("click",toggleCard);
});


function toggleCard({target: clickedCard}){
    let backView = clickedCard.querySelector('.back-view');
    let frontView = clickedCard.querySelector('.front-view');

    console.log("Toggle Triggered");

     if(cardOne !== clickedCard) {
      if (backView.classList.contains('active')) {
        backView.classList.remove('active');
      } else {
        backView.classList.add('active');
       }
  
      if (frontView.classList.contains('active')) {
        frontView.classList.remove('active');
      } else {
        frontView.classList.add('active');
       }
       
      if(!cardOne) {
          return cardOne = clickedCard;
      }
      cardTwo = clickedCard;

      let cardOneImg = cardOne.querySelector(".back-view img").src,
      cardTwoImg = cardTwo.querySelector(".back-view img").src;

      if(cardOneImg === cardTwoImg){
      matchCards(cardOneImg, cardTwoImg);
      }
      else{
        wrongPredicted++;
        //add wrongCount to a UI
        count.textContent = wrongPredicted;

        //as it is wrong card so dont open it that is cardTwo
        if (backView.classList.contains('active')) {
          backView.classList.remove('active');
        } else {
          backView.classList.add('active');
         }
    
        if (frontView.classList.contains('active')) {
          frontView.classList.remove('active');
        } else {
          frontView.classList.add('active');
         }
      }
  }

  };



//if 2 cards are matched
function matchCards(img1, img2) {
      cnt++;
      if(cnt == 8) {
          setTimeout(() => {
             lastGame.classList.add('active');
              return;
          }, 1000);
      }
      cardOne.removeEventListener("click", toggleCard);
      cardTwo.removeEventListener("click", toggleCard);

      cardOne = cardTwo = "";
      return ;
}
