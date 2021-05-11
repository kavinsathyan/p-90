
function addUser()
{
player1_name = document.getElementById("player1_name_input").value;
player2_name = document.getElementById("player2_name_input").value;

localStorage.setItem("player1_name", player1_name);
localStorage.setItem("player2_name", player2_name);

window.location = "game_page.html";
document.getElementById(result_1).innerHTML = localStorage.getItem("player1_name");
document.getElementById(result_2).innerHTML = localStorage.getItem("player2_name");
}