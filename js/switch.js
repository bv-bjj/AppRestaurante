
function cambioPantalla()
{
    let d1 = document.querySelector(".body1");
    let d2 = document.querySelector(".body4");

    if( d2.style.display === "none" )
    {
       d1.style.display = "none";
       d2.style.display = "block";
    }
    else
    {
       d1.style.display = "block";
       d2.style.display = "none";
    }
    

 
}


//classList.add
//classList.remove