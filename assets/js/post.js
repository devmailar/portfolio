function sendMessage() {
  console.log("sending")
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/951506034957123614/gO6PRpMBDnSAhZOzm-04cKr7iA7mMHBcpPsG_iqF8QOjLLPS8PdOxTJn04BW5vv34082");
  request.setRequestHeader("Content-type", "application/json");

  const params = {
    username: "Webhook test",
    avatar_url: "",
    content: "hey sir!",
  };

  request.send(JSON.stringify(params));
}