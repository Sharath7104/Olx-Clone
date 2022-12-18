// import{footer} from "./components/footer.js";

// import{navbar} from "./components/navbar.js";

// let navbar_div = document.getElementById("main-navbar");
// navbar_div.innerHTML = navbar();

// let footer_div = document.getElementById("main-footer");
// footer_div.innerHTML = footer();
getProducts();
async function getProducts (){


    let product_name = "bikes";
    
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
        div.append(imgdiv,price,distance,h3,location,date);
        document.querySelector("#cards").append(div);
       
        
    });
}















// navbar functions
    let country = document.getElementById('country');
        let moving = document.getElementById('moving');
        let text = document.getElementById('text');
        let list = document.getElementById('list');
        let category = document.getElementById('cat')


        country.addEventListener('click', () => {
            list.classList.toggle('hidden');
            moving.classList.toggle('roted')
        });


        let eng_tag = document.getElementById('eng_tag');
        let hin_eng = document.querySelector('.hin_eng');
        let language = document.querySelector('.language');


        language.addEventListener('click', () => {
            hin_eng.classList.toggle('display_div');
        });
        function languageolx(anyone) {
            eng_tag.innerHTML = anyone;
        }

        let person_img_id = document.getElementById('person_img_id');
        let groupdownid = document.getElementById('groupdownid');

        person_img_id.addEventListener('click', () => {
            groupdownid.classList.toggle('block_div')
        });

        function myfunction(place_name){
            text.innerHTML = place_name;
        }

        let button = document.getElementById("show_all_categories");
    let listddmenu = document.querySelector(".all_categories");
    listddmenu.style.display = "none"
  
   

    button.addEventListener("click", (event) => {
        cat.classList.toggle('roted')
        if (listddmenu.style.display == "none") {
            listddmenu.style.display = "block"
        } else {
            listddmenu.style.display = "none"
        }
    })

