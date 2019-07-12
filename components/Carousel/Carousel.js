/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function CarouselMaker()
{
  let carouselDiv = document.createElement("div")
  let leftDiv = document.createElement("div")
  let rightDiv = document.createElement("div")
  let img0 = document.createElement("img")
  let img1 = document.createElement("img")
  let img2 = document.createElement("img")
  let img3 = document.createElement("img")

  carouselDiv.classList.add("carousel")
  leftDiv.classList.add("left-button")
  leftDiv.textContent = '<'
  rightDiv.classList.add("right-button")
  rightDiv.textContent = '>'

  img0.src= "./assets/carousel/mountains.jpeg"
  img1.src= "./assets/carousel/computer.jpeg"
  img2.src= "./assets/carousel/trees.jpeg"
  img3.src= "./assets/carousel/turntable.jpeg"

  carouselDiv.appendChild(leftDiv)
  carouselDiv.appendChild(img0)
  carouselDiv.appendChild(img1)
  carouselDiv.appendChild(img2)
  carouselDiv.appendChild(img3)
  carouselDiv.appendChild(rightDiv)

  return carouselDiv;
}

document.querySelector(".carousel-container").appendChild(CarouselMaker())

