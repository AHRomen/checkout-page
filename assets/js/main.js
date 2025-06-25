const modal = document.querySelector(".shipping-address-change-modal");
const dialog = modal.querySelector(".custom-modal-dialog");

document.querySelectorAll(".use-different-address-link").forEach(link => {
    link.addEventListener("click", e => {
        e.stopPropagation();
        modal.classList.toggle("open-modal");
    });
});

modal.addEventListener("click", e => {
    if (!dialog.contains(e.target)) {
        modal.classList.remove("open-modal");
    }
});
