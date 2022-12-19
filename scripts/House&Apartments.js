let ApartmetsURL = "https://636a74ebb10125b78fdbef78.mockapi.io/electronics";

let postBtn = document.getElementById("post_btn")


var objToday = new Date(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
	months = new Array('Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
	curMonth = months[objToday.getMonth()];
var today = `${curMonth} ${dayOfMonth}`;


postBtn.addEventListener("click",async function(){
    let image = document.getElementById("firstimg").value;
    let Title = document.getElementById("title").value;
    let des = document.getElementById("description").value;
    let Price = document.getElementById("price").value;
    let loc = document.getElementById("location").value;
    let sqft = document.getElementById("sqft").value;
    let carpetArea = document.getElementById("carpetArea").value;
    let Name = document.getElementById("name").value;
    let mob = document.getElementById("mob").value;
    let apartsObj = {
        sqftArea : sqft,
        carpetarea : carpetArea,
        name : Name,
        Phone : mob,
        image_src : image,
        price : Price,
        title : Title,
        description : des,
        location : loc,
        date : today
    };
    
    let post_request = await fetch(ApartmetsURL,{
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

