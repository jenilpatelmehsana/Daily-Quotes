
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const url = "https://quotes.rest/quote/random?language=en&limit=1";

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out);
})
.catch(err => { throw err });

fetch(url).then((response) => {
    return response.json();
}).then((out) => {
    // console.log(out);
    quote.innerText = out.contents.quotes[0].quote;
    author.innerText = out.contents.quotes[0].author;
}).catch((error) => {
    console.error("error catched " + error);
});