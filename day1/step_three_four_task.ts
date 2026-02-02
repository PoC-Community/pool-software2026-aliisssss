const clickButton = document.getElementById("click-me") as HTMLButtonElement | null;
const statusText = document.querySelector(".status-message") as HTMLParagraphElement | null;

if (clickButton && statusText) {
    clickButton.addEventListener("click", (event: MouseEvent) => {
        console.log("Button clicked!", event.clientX, event.clientY);
        statusText.textContent = "Button was clicked!";
        statusText.style.color = "green";
    });
}

const element = document.getElementById("myInput");

if (element instanceof HTMLInputElement) {
  element.value = "Bonjour"; 
}


const button = document.getElementById("myButon") as HTMLButtonElement;

button.addEventListener("click",
    (event: MouseEvent) => {
        console.log("clicked!");
    }
);
