document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault();
  sendMessage();
});

function sendMessage() {
  var message = document.getElementById("messageInput").value;

  if (message.trim() === "") {
    alert("Please enter a message.");
    return;
  }

  var webhookURL = "https://discord.com/api/webhooks/1209639737585827870/l2TF6IDxCTg10SMt-UrtRSyoZz9qedeHW6jOmG_gnQgt6KaB5z1puFYNMm24WXylJdFk";
  var requestData = {
    content: message
  };

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    alert("Message sent successfully!");
    document.getElementById("messageInput").value = "";
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    alert("Failed to send message. Please try again later.");
  });
}
