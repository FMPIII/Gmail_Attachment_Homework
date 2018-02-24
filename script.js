window.addEventListener('load',function() {

  let sendButton = document.getElementById("send-button");
  sendButton.addEventListener('click', function() {
    console.log("Button was clicked!");
alertAttach();
  })

  let sendButton2 = document.getElementById("send-button2");
  sendButton2.addEventListener('click', function() {
    console.log("Button was clicked!");
alertAttach();
  })

function alertAttach(){
let textArea = document.getElementById("text-area").value;
let noFile= document.getElementById("no-file").value;
if (textArea.indexOf("attach") !== -1) {  //-1 means its not in the box, the !== turns that to it is in the box//
  // alertSomthing();
  if (noFile === "") {
    // console.log("before alert!")
    alert("Did you want to send an attachment?");
    }
  };
}

});
