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

//why am I not using a class for this.. feels weird
function carouselAnimator()
{
  
  let images = document.querySelector(".carousel").querySelectorAll("img");
  let curIndex = 0
  let curImg = images[curIndex];
  curImg.style.display = "block";

  let leftBtn = document.querySelector(".left-button")
  let rightBtn = document.querySelector(".right-button")
  leftBtn.style.zIndex = 1
  rightBtn.style.zIndex = 1
  leftBtn.addEventListener("click", _ =>
  {
    let imageWidth = curImg.width;
    let prevIndex = curIndex === 0 ? images.length - 1 : curIndex -1
    curImg = images[curIndex]
    let prevImg = images[prevIndex];
    prevImg.style.display = "block"
    function onCompleteDisplayNone() { curImg.style.display = "none"; }

    TweenMax.fromTo(curImg, 0.7, {x:0, scale: 1, opacity: 1}, {x:imageWidth, scale:0.25, opacity: 0, onComplete: onCompleteDisplayNone});
    TweenMax.fromTo(prevImg, 0.7, {x:-imageWidth, scale: 0.25, opacity:0}, {x:0, scale:1, opacity: 1});

    curIndex = prevIndex;
    
  })
  

  rightBtn.addEventListener("click", _ =>
  {
    let imageWidth = curImg.width;
    curImg = images[curIndex]
    let nextIndex = curIndex === images.length - 1 ? 0 : curIndex + 1
    let nextImg = images[nextIndex];
    nextImg.style.display = "block"
    function onCompleteDisplayNone() { curImg.style.display = "none"; }

    TweenMax.fromTo(curImg, 0.7, {x:0, scale: 1, opacity: 1}, {x:-imageWidth, scale:0.25, opacity: 0, onComplete: onCompleteDisplayNone});
    TweenMax.fromTo(nextImg, 0.7, {x:imageWidth, scale: 0.25, opacity:0}, {x:0, scale:1, opacity: 1});

    curIndex = nextIndex;
  })

}

carouselAnimator();