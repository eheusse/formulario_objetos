
const sigUp = e =>{
  let formDate = {
    name: document.getElementById("name").value,
    lname: document.getElementById("lname").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    gender: document.getElementById("gender").value,
    user:  document.getElementById("user").value,
    password: document.getElementById("password").value,
  }
  localStorage.setItem("formDate", JSON.stringify(formDate));
  //console.log(localStorage.getItem("formDate"));
  e.preventDefaul();
  dispDAte();
  
}


function dispDAte(){
  let name,lname,phone,address,gender,user,password;
 
  if(localStorage.getItem("formDate")){
    let(name,lname,phone,address,gender,user,password) = JSON.parse(localStorage.getItem("formDAte"));
    var output = document.getElementById("output");
       output.innerHTML = `
        <table>
          <tbody>
            <tr>
              <td>Nombre</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td>Apellidos</td>
              <td>${lname}</td>
            </tr>
            <tr>
              <td>Telefono</td
              <td>${phone}</td>
            </tr>
             <tr>
              <td>Direccion</td>
              <td>${address}</td>
            </tr>
            <tr>
              <td>Genero</td>
              <td>${gender}</td>
            </tr>
            <tr>
              <td>Usuario</td>
              <td>${user}</td>
            </tr>
            <tr>
              <td>Contraseña</td>
              <td>${password}</td>
            </tr>
          </tbody>
        </table>
  `;
  }
}
dispDAte()