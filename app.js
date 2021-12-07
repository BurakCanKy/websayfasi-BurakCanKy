const photos = document.querySelectorAll(".photo")

photos.forEach((photo) => {
    photo.addEventListener("click", () =>{

        removeActiveClasses()
        photo.classList.add("active2")

    })
})

function removeActiveClasses(){
    photos.forEach((photo) => {
        photo.classList.remove("active2")
    })
}


//MAPS


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    
  }
}

function showPosition(position) {
  document.getElementById("map").setAttribute("src","https://maps.google.com/?q="+position.coords.latitude+","+position.coords.longitude+"&output=embed")
}