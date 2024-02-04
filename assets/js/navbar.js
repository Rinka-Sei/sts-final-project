function openNav() {
    var sidebarWidth = 300; // Set the width of your sidebar
    document.getElementById("mySidebar").style.width = sidebarWidth + "px";
    document.getElementsByClassName("content")[0].style.marginLeft = sidebarWidth + "px";
    document.getElementsByClassName("overlay")[0].style.width = "100%";
    document.getElementsByClassName("overlay")[0].style.display = "block";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementsByClassName("content")[0].style.marginLeft = "0";
    document.getElementsByClassName("overlay")[0].style.width = "0";
    document.getElementsByClassName("overlay")[0].style.display = "none";
  }