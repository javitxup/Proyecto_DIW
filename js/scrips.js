/**************** Según el usuario accede a la parte de profesor o a la de alumno *******************/
            function loginIn(user){
                
                if (user == 'profesor' || user == 'Profesor'){
                    // Si es profesor
                    document.location.replace('formularioProfesor.html');
                }else if (user == 'alumno' || user == 'Alumno'){
                    // Si es alumno
                    document.location.replace('formularioAlumno.html');
                }else if (user == ''){
                    document.getElementById('user').style = 'background-color: rgba(255, 0, 0, 0.1);border-color:var(--color1);';
                }else{
                    // Si no es correcto
                    alert('El usuario no existe, (introduce alumno o profesor)');
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

function goTo (destino){
    document.location.assign(destino);
}