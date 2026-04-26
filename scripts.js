function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    } else {
        alert("Your message has been sent successfully!");
        return true;
    }
}

function toggleDesc(id, button) {
    var desc = document.getElementById(id);
    if (desc.style.display === "none") {
        desc.style.display = "block";
        button.textContent = "Hide Description";
    } else {
        desc.style.display = "none";
        button.textContent = "Show Description";
    }
}

window.addEventListener("load", function() {
    var quote = document.getElementById("quote");

    if (quote) {
        quote.addEventListener("mouseover", function() {
            quote.style.backgroundColor = "#e1effa";
            quote.style.color = "#000000";
            quote.style.fontStyle = "italic";
        });

        quote.addEventListener("mouseout", function() {
            quote.style.backgroundColor = "";
            quote.style.color = "";
            quote.style.fontStyle = "";
        });
    }
});
window.onload = function() {
    var footer = document.querySelector("footer");
    
    if (footer) {
        var newP = document.createElement("p");
        var currentDate = new Date();
        var textNode = document.createTextNode("Page loaded on: " + currentDate);
        newP.appendChild(textNode);
        footer.appendChild(newP);
    }
}