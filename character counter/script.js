var textarea = document.querySelector(".text")
var counter = document.querySelector("#counter")

textarea.addEventListener("input", function () {
  var count = textarea.value.length
  counter.innerHTML = count + " Characters"
})

function cleartext(){
    document.getElementsByClassName("text");
    textarea.value = '';
}





