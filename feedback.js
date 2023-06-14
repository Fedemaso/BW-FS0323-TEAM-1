
const ratingStars = Array.from(document.getElementsByClassName('starInactive'))

const starClassActive = "starActive"
const starClassInactive = "starInactive"
const starsLength = ratingStars.length

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

starActive(ratingStars)
