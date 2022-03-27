// document.addEventListener(
//     "DOMContentLoaded", 
//     function() {
//         document.getElementById("formulario").addEventListener('submit', validarFormulario); 
//     }
// );
    
function validarFormulario(evento) {
    evento.preventDefault();
    let usuario = document.getElementById('cuenta').value;
    let clave = document.getElementById('pass').value;
    let error = document.getElementById('error');
    if(!usuario & !clave) {        
        error.style.display = "flex";
        return;
    }
this.submit();
}


let nRegistro = document.getElementById('nuevo_registro');
let mRegistro = document.getElementById('modulo_registro');
let list = document.getElementById('list');

let n_registro = document.getElementById('n_registro');
let m_registro = document.getElementById('m_registro');
let _listado = document.getElementById('_listado');

document.querySelectorAll(".click").forEach(cl => {
    cl.addEventListener(
        "click", e =>{
            const id = e.target.getAttribute("id");

            if (id == 'modulo_registro') {
                moduloRegistro();
            }else if(id == 'list'){
                showList();
            }else{
                Registro();
            }
        }
    );
});
function moduloRegistro() {
    n_registro.style.display = "none";
    m_registro.style.display = "block";
    _listado.style.display = "none";
    
}
function Registro() {
    n_registro.style.display = "block";
    m_registro.style.display = "none";
    _listado.style.display = "none";
   
}
function showList() {
    n_registro.style.display = "none";
    m_registro.style.display = "none";
    _listado.style.display = "block";
    
}

const fetchEstados = () => {
    const url = `https://github.com/martinciscap/json-estados-municipios-mexico/blob/master/estados-municipios.json`;   
    fetch(url).then((res) => {//lo que el servidor(mediante fetch(url)) devuelva se metera en res
        // console.log(res);        
        return res.json();           
    }).then((data) => {//lo que devolvio la funcion es aun una promesa, por lo que aqui obtenemos los datos deunavez como un objeto
        alert(data);        
    })
}