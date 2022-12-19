

let details;///to store login details

////validating login credentials
let loginbtn=document.getElementById('submit');
loginbtn.addEventListener("click",async function(){
    let email=document.getElementById('email').value;
     let password=document.getElementById('password').value;
    let response=await fetch(`https://636a5574c07d8f936d9a9502.mockapi.io/users?email=${email}`);
    let data=await response.json();
      checkdata(data,email)
      console.log(details)
      if(details==null){
        alert('Email does not exist');
      }else{
        if(details.password==password){
          //  const status =async()=>{
          // let  response=await fetch(`http://localhost:3000/user?email=${email}`,{
          // method:'PATCH',
          // body:JSON.stringify({
          //   status:"Active"
          // }),
          // headers:{
          //   'Content-type':'application/json'
          // }
          // })
            alert('Login successfull');
            localStorage.setItem('loggedIn', 'true')
            window.location.href='./index.html';
            localStorage.setItem('user_details',JSON.stringify(details))
            
        }else{
            alert('Wrong password')
        }
      }
      details=null;
})


///checking if account already exists
const checkdata=(data,enteredemail)=>{
    data.forEach((el)=>{
       if(el.email==enteredemail){
         details=el;
         return;
       }
    })
}

///homepage address
    
    let home=document.querySelector('#heading img');
     home.onclick=function(){
     window.location.href='./index.html'
    }


///Patch FUNCION//////



