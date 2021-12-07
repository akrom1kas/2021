function move() {

    let onmouseenter = document.getElementById("btn");
    let x = Math.floor(Math.random() * 600);
    let y = Math.floor(Math.random() * 600);
    
    onmouseenter.style.top = y + 'px';
    onmouseenter.style.left = x + 'px';   

// Mygtuko spalva

document.getElementById('btn').style.color = randomColors();
function randomColors() {
     return '#' + Math.floor(Math.random() * 16777215).toString(16);
          }
      }
// zinute
function myFunction() {
        alert("Tau pavyko!:)");
      }
