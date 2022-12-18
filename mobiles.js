let MobilesURL = "https://636a74ebb10125b78fdbef78.mockapi.io/mobiles";

let postBtn = document.getElementById("post_btn")


var objToday = new Date(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
	months = new Array('Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
	curMonth = months[objToday.getMonth()];
var today = `${curMonth} ${dayOfMonth}`;


postBtn.addEventListener("click",async function(){
    let image = document.getElementById("firstimg").value;
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

