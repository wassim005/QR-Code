const input = document.getElementById("input");
const box = document.getElementById("imgBox");
const img = document.getElementById("qrImage");

function getQrCode() {
    const text = input.value.trim();
    if (text) {
        
        box.innerHTML = "";

        
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        box.appendChild(img);

        const label = document.createElement("p");
        label.textContent = `${text} QR Code`;
        box.appendChild(label);

        box.classList.add("show-img");

        input.value = "";
    } else {
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        }, 1000);
    }
}