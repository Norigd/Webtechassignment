// this gets the id from the url
var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log("hello world");
var client = contentful.createClient({
    space: 'rtjgjqro74cv',
    accessToken: 'IlqGEm3Yov7dp_XdTbESN3N_UhTQZYW3YTdRdBSS--4',
});

var productsDiv = document.getElementById('product');
    client.getEntries({ content_type: 'eComercePage'}).then(function(entries) {
        console.log(entries);
        entries.items.forEach(function(entry) {
        
        var contentPiece = document.createElement('div');
        document.getElementById('product').append(contentPiece);

// IMAGE
        var product = document.createElement('img');
        product.classList.add('product-image');
        if (entry.fields.product) {
        product.src = entry.fields.product.fields.file.url;}
        contentPiece.append(product);
        
// title
        var title = document.createElement('h2');
        title.innerHTML = entry.fields.title;
        contentPiece.append(title);
        
// price
        var price = document.createElement('h3');
        price.innerHTML = entry.fields.price;
        contentPiece.append(price);


// button
        var getDetails = document.createElement('a');
        getDetails.innerHTML = "Get Details";
        contentPiece.append(getDetails);

        getDetails.href= "product.html?id="+entry.sys.id; 
// brief information
        var information = document.createElement('p');
        information.innerHTML = entry.fields.information;
        contentPiece.append(information);

        console.log(entry.fields.title);
    })

})

