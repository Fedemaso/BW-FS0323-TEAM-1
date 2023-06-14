
const ratingStars = Array.from(document.getElementsByClassName('starSvg'))

console.log(ratingStars);


function executeRating(stars) {
    const starClassActive = "starSvg"
    const starClassInactive = "starSvg"
    const starsLength = stars.length
    let i;
    stars.map((star) => {
        star.onclick = () => {
           i = stars.indexOf(star)
            if (star.className===starClassInactive) {        
              for (i; i >= 0; --i) stars[i].className = starClassActive
           } else {
              for (i; i < starsLength; ++i) stars[i].className = starClassInactive
           }
        }
     })
}


executeRating(ratingStars)


// let feedbackIn = document.getElementById('feedback-input')
// feedbackIn.addEventListener('keydown', function(e){
//   if(e.key === 'Enter'){
//     // Aggiungere js per il submit del form
//   }
// })


