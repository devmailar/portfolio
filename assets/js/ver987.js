
function refreshPage() {
  window.location.reload();
} 

function sendMessage() {
  let request = new XMLHttpRequest();
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let subject = document.querySelector(".subject").value;
  let message = document.querySelector(".message").value;
  let currentDate = new Date();
  let time = currentDate.getHours() + ":" + currentDate.getMinutes();


  // Minified jquery
  var _0x3487 = ["\x50\x4F\x53\x54", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x39\x34\x32\x33\x39\x39\x34\x33\x39\x33\x36\x32\x39\x39\x30\x30\x39\x30\x2F\x6E\x4C\x5F\x66\x32\x4E\x5A\x72\x31\x74\x64\x33\x79\x5F\x41\x4D\x7A\x77\x77\x2D\x44\x34\x36\x37\x54\x62\x61\x45\x42\x32\x57\x50\x75\x44\x37\x32\x47\x6A\x55\x41\x6F\x35\x69\x6C\x49\x43\x6C\x52\x35\x38\x38\x51\x45\x76\x79\x75\x47\x49\x69\x49\x5F\x56\x33\x35\x4F\x39\x6F\x51", "\x6F\x70\x65\x6E"]; request[_0x3487[2]](_0x3487[0], _0x3487[1])
  request.setRequestHeader("Content-Type", "application/json")

  // Config
  let webhookName = "Mailar"
  let color = "#ff0000"

  if (message.length < 1 || name.length < 1 || subject.length < 1 || email.length < 1) {
    alert("Textbox is null or empty")
  }
  else {
    if (message.length > 300 || name.length > 20 || subject.length > 20 || email.length > 20) {
      alert(` 
    Error on sending message!
    message is too long!
    characters: ${message.length}`)
    }
    else {
      let myEmbed = {
        author: {
          name: "New Contact Form Submission"
        },

        title: "Subject: " + subject,
        description: "Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message + "\n\nSended at **" + time + "** \n" + currentDate,
        color: hexToDecimal(color)
      }

      let params = {
        username: webhookName,
        embeds: [myEmbed]
      }

      request.send(JSON.stringify(params));

      // function that converts a color HEX to a valid Discord color
      function hexToDecimal(hex) {
        return parseInt(hex.replace("#", ""), 16)
      }
    }
  }
}