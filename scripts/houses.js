getProducts()

async function getProducts(){
// const getProducts = async function(){


    let product_name = "electronics";
    
    try{
        let response = await fetch(`https://636a74ebb10125b78fdbef78.mockapi.io/${product_name}`);
        console.log("response",response)
        let actual_data = await response.json();
        console.log("actualdata:",actual_data)
        displayProducts(actual_data)
    }
    catch(err){
        console.log("err:",err)
    }
}

function displayProducts(res){
    // document.querySelector("#cards").innerHTML=null;
    // let loader_div = document.getElementById("loader_div");
    // loader_div.style.display="none";
    res.forEach(function(el){
        let div = document.createElement("div");
        div.className="card";

       
        let imgdiv = document.createElement("div");
        imgdiv.className = "cardimg"
        let distance = document.createElement("h4");
        distance.innerText = el.traveled;
        let h3 =document.createElement("h4");
        h3.innerText = el.title;

        let img = document.createElement("img");
        img.src = el.image_src;

        let price = document.createElement("h2");
        price.innerText = "₹"+el.price;
        let date = document.createElement("h5");
        date.innerText = el.date;
        let location = document.createElement("h4");
        location.innerText = el.location;

        // let rating = document.createElement("h3");
        // rating.innerText = "Rating:- "+el.IMDb_Rating;


        
        imgdiv.append(img);
        div.append(imgdiv,price,h3,location,date);
        document.querySelector("#cards").append(div);
       
        
    });
}