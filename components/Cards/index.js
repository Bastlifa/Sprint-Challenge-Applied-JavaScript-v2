// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => 
        {
            let articleTopics = Object.keys(response.data.articles)
            articleTopics.forEach(topic =>
                {
                    response.data.articles[topic].forEach(article => 
                        document.querySelector(".cards-container").appendChild(CardMaker(article)));
                })
        })
    .catch(error => console.log(error));

function CardMaker(cardObj)
{
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    let headlineDiv = document.createElement("div");
    headlineDiv.classList.add("headline");
    headlineDiv.textContent = cardObj.headline
    cardDiv.appendChild(headlineDiv);

    let authorDiv = document.createElement("div");
    authorDiv.classList.add("author");
    cardDiv.appendChild(authorDiv);

    let imgContDiv = document.createElement("div");
    imgContDiv.classList.add("img-container");
    authorDiv.appendChild(imgContDiv);

    let authorImg = document.createElement("img");
    authorImg.src = cardObj.authorPhoto;
    imgContDiv.appendChild(authorImg);

    let authorSpan = document.createElement("span");
    authorSpan.textContent = `By ${cardObj.authorName}`
    authorDiv.appendChild(authorSpan);

    return cardDiv;
}