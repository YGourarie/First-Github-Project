console.log(document.querySelector("#title"));

function changeHtml() {
  document.getElementById("title").innerHTML = "I AM THE BEST";
}

function colorMode () {
    document.querySelector('body').classList.toggle('dark-theme')
}