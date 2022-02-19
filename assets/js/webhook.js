function sendMessage() {
  let request = new XMLHttpRequest();
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let subject = document.querySelector(".subject").value;
  let message = document.querySelector(".message").value;

  let currentDate = new Date();
  let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

  if (name !== "" && email !== "" && subject !== "" && message !== "") {
    document.querySelector(".name").value = "";
    document.querySelector(".email").value = "";
    document.querySelector(".subject").value = "";
    document.querySelector(".message").value = "";

    const getDeviceType = () => {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      }
      if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        return "mobile";
      }
      return "desktop";
    };

    request.open("POST", "https://discord.com/api/webhooks/942399439362990090/nL_f2NZr1td3y_AMzww-D467TbaEB2WPuD72GjUAo5ilIClR588QEvyuGIiI_V35O9oQ");
    request.setRequestHeader("Content-type", "application/json");
    
    let params = {
      username: "Contact Form Submisstions",
      content: "New Contact from https://mailar.ml @here KLO: " + time +
        "```\n--------------------------------------------\n" +
        "Name: " + name +
        "\nEmail: " + email +
        "\nSubject: " + subject +
        "\nMessage: " + message +
        "\n--------------------------------------------" +
        "\nTime: " + time +
        "\nDate: " + currentDate +
        "\nDevice: " + getDeviceType("desktop") +
        "\n--------------------------------------------\n```"
    };
    
    request.send(JSON.stringify(params));
    event.preventDefault();
  } else {
    event.preventDefault();
  }
}
