var imgList = ["couple.jpg", "gr.jpg", "Sun.jpg", "tree.jpeg"];
var count = 0;
var firstActive = false;

myFunction();

function myFunction() {

    if(firstActive == true) {
        document.getElementById('img').remove()
    }

    firstActive = true;
    var myImg = document.createElement('img');
    myImg.src = `./img/${imgList[count]}`;
    myImg.id = 'img';
    myImg.style.width = '400px';
    myImg.style.height = '300px';
    myImg.style.opacity = '0.9';
    setTimeout(myStartTime, 200)
    document.getElementById('main').appendChild(myImg);

    
    count = count + 1;
    if(count > imgList.length-1) {
        count = 0;
    }

    
    setTimeout(myEndTime, 3950);
    setTimeout(myFunction, 4000);

    function myEndTime() {
        myImg.style.opacity = '0.9';
    }
    function myStartTime() {
        myImg.style.opacity = '1';
    }
}
