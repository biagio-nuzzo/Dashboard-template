
// VARIABLE
var side_status = "open";
var edit_panel_status = "close";

// FUNCTIONS SIDEBAR
function show_hide_side() {
  $(".rotate").toggleClass("left");
  if(side_status == "open"){
    return open();
  }else{
    return close();
  }
}

// FUNCTION TO OPEN SIDEBAR
function open(){
  document.documentElement.style.setProperty('--page-sidebar-width', '60px');
  document.getElementById("item-menu-sidebar1").style.visibility = "hidden";
  document.getElementById("item-menu-sidebar2").style.visibility = "hidden";
  document.getElementById("item-menu-sidebar3").style.visibility = "hidden";
  document.getElementById("item-menu-sidebar4").style.visibility = "hidden";
  side_status = "close"
}

// FUNCTION TO CLOSE SIDEBAR
function close(){
  document.documentElement.style.setProperty('--page-sidebar-width', '280px');
  document.getElementById("item-menu-sidebar1").style.visibility = "visible";
  document.getElementById("item-menu-sidebar2").style.visibility = "visible";
  document.getElementById("item-menu-sidebar3").style.visibility = "visible";
  document.getElementById("item-menu-sidebar4").style.visibility = "visible";
  side_status = "open"
}

// TAB FUNCTION
function openTab(evt, TabName) {
  // DICHIARO LE VARIABILI
  var i, tabcontent, tablinks;

  // PRENDO GLI ELEMENTI CON LA CLASSE TABCONTENT E LI NASCONDO
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // PRENDO GLI ELEMENTI CON LA CLASSE TABLINKS E RIMUOVE LA CLASSE ACTIVE
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // MOSTRO LA SELEZIONE ED AGGIUNGO LA CLASSE ACTIVE
  document.getElementById(TabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// NOTIFY FUNCTION
function notify() {
  spantext=$("#notify").text();
  var integer = parseInt(spantext, 10);
  var spantext_plus = integer + 1;
  document.getElementById("notify").textContent = spantext_plus;
}

// CLEAN NOTIFY
function clean_notify() {
  document.getElementById("notify").textContent = 0;
}

// FUNCTION EDIT PANEL
function show_hide_edit_panel() {
  if(edit_panel_status == "close"){
    return open_panel();
  }else{
    return close_panel();
  }
}

// FUNCTION OPEN EDIT PANEL
function open_panel() {
  var editform = document.getElementsByClassName("edit-form");
  for(var i = 0; i < editform.length; i++) {
    editform[i].style.display='block'
  }
  edit_panel_status = "open";
  document.getElementById("editbutton").textContent = "Hide";
}

// FUNCTION CLOSE EDIT PANEL
function close_panel() {
  var editform = document.getElementsByClassName("edit-form");
  for(var i = 0; i < editform.length; i++) {
    editform[i].style.display='none'
  }
    edit_panel_status = "close";
      document.getElementById("editbutton").textContent = "Show";
}
