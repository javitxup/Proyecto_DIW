/**************** Según el usuario accede a la parte de profesor o a la de alumno *******************/
function loginIn(user) {

    if (user == 'profesor' || user == 'Profesor') {
        // Si es profesor
        document.location.replace('formularioProfesor.html');
    } else if (user == 'alumno' || user == 'Alumno') {
        // Si es alumno
        document.location.replace('formularioAlumno.html');
    } else if (user == '') {
        document.getElementById('user').style = 'background-color: rgba(255, 0, 0, 0.1);border-color:var(--color1);';
    } else {
        // Si no es correcto
        alert('El usuario no existe, (introduce alumno o profesor)');
        document.getElementById('user').style = 'background-color: rgba(255, 0, 0, 0.1);border-color:var(--color1);';
    }
}

var era;
var previo = null;

function uncheckRadio(rbutton) {
    if (previo && previo != rbutton) {
        previo.era = false;
    }
    if (rbutton.checked == true && rbutton.era == true) {
        rbutton.checked = false;
    }
    rbutton.era = rbutton.checked;
    previo = rbutton;
}

function goTo(destino) {
    document.location.assign(destino);
}
/************ Obtiene alumno y rellena tabla *************/
function obtenAlumno(alumno) {
    var notas = '';
    switch (alumno) {
        case 'Nota 1':
            notas = '<tr><td>5.1</td><td>4.3</td><td>6.9</td><td>7.2</td><td>6.2</td></tr>'
            break;
        case 'Nota 2':
            notas = '<tr><td>6.3</td><td>5</td><td>7.2</td><td>5.4</td><td>3</td></tr>'
            break;
        case 'Nota 3':
            notas = '<tr><td>5</td><td>6.9</td><td>8.1</td><td>7.2</td><td>5.4</td></tr>'
            break;
        case 'Nota 4':
            notas = '<tr><td>5.1</td><td>4.3</td><td>6.9</td><td>7.2</td><td>5.4</td></tr>'
            break;
        case 'Nota 5':
            notas = '<tr><td>6.3</td><td>9.5</td><td>8.3</td><td>7</td><td>8.1</td></tr>'
            break;
        case 'Añadir practica':
            agregaNota('muestra');
            break;
        default:
            notas = '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'
            break;
    }
    document.getElementById('notasAlum').innerHTML = notas;
}

function agregaNota(hacer){
    if (hacer == 'muestra'){
        document.getElementById('addNota').style = 'display:table;';
    }else if (hacer == 'oculta'){
        document.getElementById('addNota').style = 'display:none;';
    }
}
/* no funciona

function addNota(){
    nots = '<tr><td>'+document.getElementById('alu1').value;+'</td><td>'+document.getElementById('alu2').value;+'</td><td>'+document.getElementById('alu3').value;+'</td><td>'+document.getElementById('alu4').value;+'</td><td>'+document.getElementById('alu5').value;+'</td></tr>';
    document.getElementById('notasAlum').innerHTML = nots;
}*/
