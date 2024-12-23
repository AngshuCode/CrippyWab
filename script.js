// Function to fetch and display the user's IP address
function fetchIP() {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("ip-address").textContent = data.ip;
    })
    .catch(error => {
        document.getElementById("ip-address").textContent = "Unable to retrieve IP";
    });
}

document.getElementById("scare-button").addEventListener("click", function() {
    let popup = document.getElementById("popup");
    popup.classList.remove("hidden");
    
    // Call the fetchIP function when the button is clicked
    fetchIP();

    // Display popup for 20 seconds
    setTimeout(function() {
        popup.classList.add("hidden");
    }, 20000);
});

