  const modal = document.getElementById("myModal");
  const modalLink = document.getElementById("modal-link");
  const closeBtn = document.getElementsByClassName("close")[0];

  modalLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the link from navigating

    // Show the modal
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });