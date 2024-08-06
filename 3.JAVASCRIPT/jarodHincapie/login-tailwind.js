const user ={
    email: "jarod@gmail.com",
    password: "123"
}

const myForm = document.getElementById("my-form");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
     // Get form values
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const alert = document.getElementById("alert");
    alert.style.display="block"

    if (email===user.email && password===user.password){
        alert.innerHTML=`
        <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <span class="font-medium">Inicio exitoso</span> 
        </div>
            `;
    } else {
        alert.innerHTML=`
        <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span class="font-medium">Usuario y contraseña incorrectos</span> 
        </div>`;
        // Reset form values
        //document.getElementById("email").value = "";
        //document.getElementById("password").value = "";
    }
    setTimeout(()=>{
        alert.style.display="none"
    }, 3000);
});

/*function showAlert(typeAlert,message){
    const alert = document.getElementById("alert");
    alert.style.display="block"
    if(typeAlert==="success"){
        alert.innerHTML=`
        <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">${message}</span> 
</div>
    `;
    } else {
           alert.innerHTML=`<div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span class="font-medium">${message}</span> 
</div>`;
    }
    setTimeout(()=>{
        alert.style.display="none"
    }, 3000);
}*/


