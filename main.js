
document.querySelector('button').addEventListener('click', getDate)

function getDate(){
    let date = document.querySelector('input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
.then(response => response.json())
.then(data=> {
    console.log(data)
    if(data.media_type === 'hdurl'){
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('h2').innerText = data.title
}else if(data.media_type === 'url'){
    document.querySelector('img').src = data.url
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('h2').innerText = data.title
}else if(data.media_type === 'video'){
    document.querySelector('iframe').src = data.url
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('h2').innerText = data.title
}})
}

//fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-07-15`)
//.then(response => response.json())
//.then(data => {
 //  document.querySelector('img').src = data.url
//s})
