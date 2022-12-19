let MobilesURL = "https://636a74ebb10125b78fdbef78.mockapi.io/mobiles";

let postBtn = document.getElementById("post_btn")


var objToday = new Date(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
	months = new Array('Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
	curMonth = months[objToday.getMonth()];
var today = `${curMonth} ${dayOfMonth}`;



let inp_image = document.getElementById("firstimg");
let image;
inp_image.onchange = () => {

handleImage();
alert("image uploaded")
};

const handleImage = async () => {

//1.accept the fle
let img =document.getElementById("firstimg");
let actual_img = img.files[0];
console.log("img",actual_img);
//imgbb is asking to send data in formdata object
let form = new FormData();
form.append("image",actual_img);
let res = await fetch(`https://api.imgbb.com/1/upload?key=cee8518884c81f87302c5c79899caa97`,
{
    method:"POST",
    body:form,
}
);
let data = await res.json();
 //console.log("datareal:",data);
image = data.data.display_url;
console.log("image_url:",image);
};


postBtn.addEventListener("click",async function(){
    // let image = document.getElementById("firstimg").value;
    let brand = document.getElementById("brand").value;
    let Title = document.getElementById("title").value;
    let des = document.getElementById("description").value;
    let Price = document.getElementById("price").value;
    let loc = document.getElementById("location").value;
    let Name = document.getElementById("name").value;
    let mob = document.getElementById("mob").value;
    let apartsObj = {
        image_src : image,
        brand : brand,
        price : Price,
        title : Title,
        description : des,
        location : loc,
        name : Name,
        phone : mob,
        date : today
    };
    console.log(apartsObj)
    
    let post_request = await fetch(MobilesURL,{
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(apartsObj)
    })

    if(post_request.ok){
        alert("Your Ad is live now!")
    }
})

