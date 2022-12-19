function viewmore(){
  window.location.href = "phones.html"
}

// * ------------------------>> FETCH DATA  <<-------------------------------------
let url = "https://636a74ebb10125b78fdbef78.mockapi.io/homepage";
async function fetchData() {
  try {
    let res = await (await fetch(url)).json();
    // console.log(res);
    displayData(res);
  } catch (error) {
    alert(error);
  }
}
fetchData();

// * ------------------------>> DISPLAY DATA <<-------------------------------------
let scnd_div = document.querySelector("#homepage_scnd_child");
function displayData(data) {
  scnd_div.innerHTML = "";
  // data.forEach(element => {
  for (let i = 0; i < 21; i++) {
    let iTag = document.createElement("i");
    iTag.classList.add("fa-solid");
    iTag.classList.add("fa-heart");
    let button = document.createElement("button");
    button.style.color = "grey";
    button.addEventListener("click", (event) => {
      if (button.style.color == "grey") {
        button.style.color = "black";
      } else {
        button.style.color = "grey";
      }
    });

    
    let div = document.createElement("div");
    let imge = document.createElement("img");
    imge.src = data[i].img_src;
    imge.addEventListener("click",(event)=>{
        function_ls(data[i]);

    });


    let price = document.createElement("h3");
    price.innerText = "₹ " + data[i].Price;
    
    let div2 = document.createElement("div");
    let title = document.createElement("p");
    title.innerText = data[i].title.substring(0, 27) + "...";
    title.setAttribute("class", "first_p");
    
    let location = document.createElement("p");
    location.innerText = data[i].location;
    
    let date = document.createElement("p");
    date.innerText = data[i].date;
    



    button.append(iTag);
    div2.append(imge);
    div.append(button, div2, price, title, location, date);
    scnd_div.append(div);
  };

  let load_more = document.querySelector("#homepage_load_more");
  load_more.addEventListener("click", (load_more_DATA) => {
    for (let i = 9; i < data.length; i++) {
      let iTag = document.createElement("i");
      iTag.classList.add("fa-solid");
      iTag.classList.add("fa-heart");
      let button = document.createElement("button");
      button.style.color = "grey";
      button.addEventListener("click", (event) => {
        if (button.style.color == "grey") {
          button.style.color = "black";
        } else {
          button.style.color = "grey";
        }
      });

      button.append(iTag);

      let div = document.createElement("div");
      let imge = document.createElement("img");
      imge.src = data[i].img_src;
      imge.addEventListener("click",(event)=>{
        function_ls(data[i]);

    });

      let price = document.createElement("h3");
      price.innerText = "₹ " + data[i].Price;

      let div2 = document.createElement("div");
      let title = document.createElement("p");
      title.innerText = data[i].title.substring(0, 27) + "...";
      title.setAttribute("class", "first_p");

      let location = document.createElement("p");
      location.innerText = data[i].location;

      let date = document.createElement("p");
      date.innerText = data[i].date;

      div2.append(imge);
      div.append(button, div2, price, title, location, date);
      scnd_div.append(div);
    }
  });
};

let headButton = document.querySelectorAll(".head_button");
//console.log(headButton);
for (let i = 0; i < headButton.length; i++) {
  headButton[i].style.color = "grey";
  headButton[i].addEventListener("click", (event) => {
    if (headButton[i].style.color == "grey") {
      headButton[i].style.color = "black";
    } else {
      headButton[i].style.color = "grey";
    }
  });
};

// * -------------------------->> LS <<---------------------------------
function function_ls(obj){
    localStorage.setItem("local_Key",JSON.stringify(obj));

};


// --------------------------------------------------------->
function viewmore(){
  window.location.href = "phones.html"
}