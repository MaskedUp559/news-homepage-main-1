

function openNav() {
    document.getElementById("mySidenav").style.width = "250px"; 
    document.getElementById('closeBtn').style.display = "block";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; 
    document.getElementById('closeBtn').style.display = "none";
  }