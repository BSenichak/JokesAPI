let xhr = new XMLHttpRequest()
xhr.open("localhost:3000")
xhr.onload = function(){
    console.log(xhr.response)
}
xhr.send()