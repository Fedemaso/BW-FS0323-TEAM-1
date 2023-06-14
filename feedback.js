
const ratingStars = Array.from(document.getElementsByClassName('starInactive'))

const starClassActive = "starActive"
const starClassInactive = "starInactive"
const starsLength = ratingStars.length

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

const starActive = (stars) => {
   stars.map((star) => {
      star.onclick = () => {
         result = stars.indexOf(star)
         i = stars.indexOf(star)
         if (star.className===starClassInactive) {
            for (i; i >= 0; --i) stars[i].className = starClassActive
         } else {
            for (i; i < starsLength; ++i) stars[i].className = starClassInactive
         }
         console.log(result + 1);
      }
   })
}

executeRating(ratingStars)

starActive(ratingStars)