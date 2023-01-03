let givenRating = document.querySelector(".rated");
let submitBtn = document.querySelector(".btn");
let allRatings = document.querySelectorAll(".round");
let containerDiv = document.querySelector(".container");
let thanksDiv = document.querySelector(".thanks-div");

allRatings.forEach((rating) => {
  rating.addEventListener("click", handleClick);
});

function handleClick(event) {
  allRatings.forEach(function (val) {
    if (val == event.target) {
      val.classList.toggle("bg-color");
    } else {
      val.classList.remove("bg-color");
    }
  });
}

submitBtn.addEventListener("click", function (e) {  
  let textRating;
  allRatings.forEach((obj) => {
    if (obj.classList.contains("bg-color")) {
      // console.log(obj.textContent);
      textRating = obj.textContent;           
    }
  });
  containerDiv.style.visibility = "hidden";
  thanksDiv.style.visibility = "visible";
  givenRating.innerHTML = textRating;
});
