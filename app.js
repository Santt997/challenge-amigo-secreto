// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let la = document.getElementById('listaAmigos');

function agregarAmigo()
{
    let inp = document.getElementById('amigo').value;
    if (inp == '')
    {
        alert('Por favor ingrese un nombre válido.');
    }
    else
    {
        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = inp;
        la.appendChild(nuevoLi);
    }
}

function sortearAmigo()
{
    let lis = document.querySelectorAll('#listaAmigos li');
    let nSorteado = Math.floor(Math.random() * lis.length);
    document.getElementById('resultado').textContent = `El amigo secreto sorteado es: ${lis[nSorteado].textContent}`;
    la.textContent = '';
}