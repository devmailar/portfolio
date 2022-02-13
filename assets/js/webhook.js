function sendMessage() {
  let request = new XMLHttpRequest();
  let aname = document.getElementById("name").value;
  let bsubject = document.getElementById("subject").value;
  let cmessage = document.getElementById("message").value;
  let currentDate = new Date();
  let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

  if (aname !== "" && bsubject !== "" && cmessage !== "") {
    document.getElementById("name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

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

    request.open("POST","https://discord.com/api/webhooks/942399439362990090/nL_f2NZr1td3y_AMzww-D467TbaEB2WPuD72GjUAo5ilIClR588QEvyuGIiI_V35O9oQ");
    request.setRequestHeader("Content-type", "application/json");

    let params = {
      username: "Contact Form Submisstions",
      content: "New Contact from https://mailar.ml @here KLO: " + time +
        "```\n--------------------------------------------\n" +
        "Name: " +
        aname +
        "\nSubject: " +
        bsubject +
        "\nMessage: " +
        cmessage +
        "\n--------------------------------------------" + 
        "\nTime: " + 
        time + 
        "\nDate: " + 
        currentDate + 
        "\nDevice: " + 
        getDeviceType("desktop") + 
        "\n--------------------------------------------\n```"
    };

    request.send(JSON.stringify(params));
    event.preventDefault();
  } else {
    event.preventDefault();
  }
}
