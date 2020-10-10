
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const url = "https://type.fit/api/quotes";

// alert("Quotes might not appear because of api request limit, Try after hour");

var quotes = [];

fetch(url).then((response) => {
    return response.json();
}).then((out) => {
//    console.log(out);
    const x = Math.floor(Math.random() * out.length) ;
    // console.log(x);
    // console.log(out[x]);
    quote.innerText = out[x].text;
    author.innerText = out[x].author;
}).catch((error) => {
    console.error("error catched " + error);
});

// console.log(quotes);
