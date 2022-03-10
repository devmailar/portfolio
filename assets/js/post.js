function sendMessage() {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let subject = document.querySelector(".subject").value;
  let message = document.querySelector(".message").value;
  // let currentDate = new Date();
  // let time = currentDate.getHours() + ":" + currentDate.getMinutes();
  let webhookName = "Mailar";
  let color = "#ff0000";

  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/951506034957123614/gO6PRpMBDnSAhZOzm-04cKr7iA7mMHBcpPsG_iqF8QOjLLPS8PdOxTJn04BW5vv34082");
  request.setRequestHeader("Content-type", "application/json");

  let myEmbed = {
    author: {
      name: "New Contact Form Submission",
    },

    title: "Subject: " + subject,
    description:
      "Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message, color: hexToDecimal(color),
  };

  const params = {
    username: webhookName,
    avatar_url: "",
    embeds: [myEmbed],
  };

  request.send(JSON.stringify(params));

  function hexToDecimal(hex) {
    return parseInt(hex.replace("#", ""), 16);
  }
}
