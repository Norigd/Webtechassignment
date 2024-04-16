// this gets the id from the url
var textInURL = window.location.search;
console.log("textInURL is"+ textInURL)

var parametersInURL = new URLSearchParams(textInURL);
console.log("parametersInURL is"+ parametersInURL)

var id = parametersInURL.get('id');
console.log("id is"+ id)

console.log("hello world");
var client = contentful.createClient({
    space: 'rtjgjqro74cv',
    accessToken: 'IlqGEm3Yov7dp_XdTbESN3N_UhTQZYW3YTdRdBSS--4',
});

client.getEntry(id).then(function (entry) {
    var placeForContent = document.getElementById('place-for-content')


    var productImageContent = document.createElement('img');
    productImageContent.classList.add('product-image');
    if (entry.fields.productImageContent) {
    productImageContent.src = entry.fields.productImageContent.fields.file.url;}
    placeForContent.append(productImageContent);


    var title = document.createElement('h2');
    title.innerHTML = entry.fields.title;
    placeForContent.append(title);

    var descriptionContent = document.createElement ('p');
    descriptionContent.innerHTML = entry.fields.descriptionContent;
    placeForContent.append(descriptionContent);

    var titlePrice = document.createElement('h2');
    titlePrice.innerHTML = entry.fields.titlePrice;
    placeForContent.append(titlePrice);

    var priceContent = document.createElement('p');
    priceContent.innerHTML = entry.fields.priceContent;
    placeForContent.append(priceContent);

    var bookNow = document.createElement('a');
    bookNow.innerHTML = "Book Now";
    placeForContent.append(bookNow);

    bookNow.href= "index.html?id=";

    console.log(entry.fields.title);
    
})

document.addEventListener('DOMContentLoaded', function () {
  const daysContainer = document.querySelector('.days');
  const daysInApril = 30; // Example, change this based on the actual number of days in April
  for (let i = 1; i <= daysInApril; i++) {
    const dayNumber = document.createElement('div');
    dayNumber.classList.add('day-number');
    dayNumber.textContent = i;
    daysContainer.appendChild(dayNumber);
  }
});
