let arr = ["blue","green","red","pink","white"];
let i = 0;
let text = document.getElementsByClassName("text-box");
setInterval(() => {
    text[0].style.color = arr[i];
    if(text[0].style.visibility === "hidden"){
        text[0].style.visibility = "visible";
    }else{
        text[0].style.visibility = "hidden";
    }
    if(i == arr.length - 1) {
        i = 0;
    }else {
        i++;
    }
},1000);