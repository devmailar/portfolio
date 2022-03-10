function refreshPage() {
  window.location.reload();
}

function sendMessage() {
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let subject = document.querySelector(".subject").value;
  let message = document.querySelector(".message").value;
  let currentDate = new Date();
  let time = currentDate.getHours() + ":" + currentDate.getMinutes();
  let webhookName = "Mailar";
  let color = "#ff0000";

  if (message.length < 1 || name.length < 1 || subject.length < 1 || email.length < 1) {
    alert("Textbox is empty!");
  } else if (message.length > 300 || name.length > 20 || subject.length > 20 || email.length > 20) {
    alert(` 
      Error on sending message!
      message is too long!
      characters: ${message.length}
    `);
  } else {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/942399439362990090/nL_f2NZr1td3y_AMzww-D467TbaEB2WPuD72GjUAo5ilIClR588QEvyuGIiI_V35O9oQ");
    request.setRequestHeader("Content-type", "application/json");

    let myEmbed = {
      author: {
        name: "New Contact Form Submission",
      },

      title: "Subject: " + subject,
      description:
        "Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message + "\n\nSended at **" + time + "** \n" + currentDate,
      color: hexToDecimal(color),
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
}
