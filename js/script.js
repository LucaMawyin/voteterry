window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("vote-popup").showModal();
        document.getElementById("vote-popup").style.display = "flex";
    }, 2000);
});

function closePopup() {
  document.getElementById("vote-popup").close();
  document.getElementById("vote-popup").style.display = "none";
}