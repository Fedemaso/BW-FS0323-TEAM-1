
// FUNZIONE RATING STELLE

const ratingStars = Array.from(document.getElementsByClassName('starInactive'))

const starClassActive = "starActive"
const starClassInactive = "starInactive"

const returRating = (stars) => {
   let i
   stars.map((star) => {
      star.onclick = () => {
         result = stars.indexOf(star)
         i = stars.indexOf(star)
         if (star.className===starClassInactive) {
            for (i; i >= 0; --i) stars[i].className = starClassActive
         } else {
            for (i; i < 9; ++i) stars[i+1].className = starClassInactive
         }
         console.log(result + 1);
         return result + 1
      }
   })
}

returRating(ratingStars)

// FUNZIONE FORM

const form = document.getElementById("sendComment")

const validateForm = (event) => {
   event.preventDefault()
   alert("Comment sent successfully")
   form.reset()
}

form.addEventListener('submit', validateForm)
