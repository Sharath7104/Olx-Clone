        let country = document.getElementById('country');
        let moving = document.getElementById('moving');
        let text = document.getElementById('text');
        let list = document.getElementById('list');
        let category = document.getElementById('cat');


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

    let redirect = document.getElementById("goToSell");
    redirect.addEventListener("click",function(){
        window.location.href="sell.html";
    })

// ----------------------------- motorbikes---------------------------->
    let motorbike_btn = document.getElementById("bikes");
motorbike_btn.addEventListener("click",function(){
  window.location.href="motorbikes.html"
});
// ----------------------------- mobiles---------------------------->
let mobiles_btn = document.getElementById("mobiles");
mobiles_btn.addEventListener("click",function(){
  window.location.href="phones.html"
});
// ----------------------------- houses---------------------------->
let houses_btn = document.getElementById("houses");
houses_btn.addEventListener("click",function(){
  window.location.href="houses.html"
});

document.getElementById("logoimg").addEventListener("click",function(){
    window.location.href="index.html";
})


// ------------------------------login page------------------------>
// let login_btn = document.getElementsByClassName("loginwithemail_btn");
// login_btn.addEventListener("click",function(){
//     window.location.href="signup.html"
// })