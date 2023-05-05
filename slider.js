//targetDivとsliderItemsの取得
const target = document.getElementById("target");
let sliderItems = document.querySelectorAll(".box");// <img class="box" src="C:\Users...>
console.log(sliderItems);
sliderItems = addDiv(sliderItems);
console.log(sliderItems);



//slidersHTMLの作成
let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("sliderShow");//add2
main.classList.add("main");
extra.classList.add("extra");

sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);


//controlsHTMLの作成
let controls = document.createElement("div");
let leftBtn = document.createElement("button");
let rightBtn = document.createElement("button");

controls.classList.add("controls");//add1
leftBtn.innerHTML = "<";
leftBtn.classList.add("button", "btn-light");
rightBtn.innerHTML = ">";
rightBtn.classList.add("button", "btn-light");

controls.append(leftBtn);
controls.append(rightBtn);
target.append(controls);


//mainの初期設定
main.append(sliderItems[0]);
main.setAttribute("slider-index", "0");






//実行関数の定義
function slideJump(type){//ボタンが押されたときに実行する[currスライドとnextスライドを定義する]type=1,-1
    let index = parseInt(main.getAttribute("slider-index"));
    let currElement = sliderItems[index];


    //indexを更新しnextElementの定義
    let newIndex = index + type;
    if(newIndex >= sliderItems.length) newIndex = 0;
    else if(newIndex < 0) newIndex = sliderItems.length - 1;
    let nextElement = sliderItems[newIndex];


    //mainに設定されているslider-indexをnewIndexに更新
    main.setAttribute("slider-Index", newIndex.toString());


    //mainとextraを更新
    main.innerHTML = "";
    main.append(currElement);
    extra.innerHTML = "";
    extra.append(nextElement);


    //animationの実行
    slideAnimation(main, extra, type);
}

function slideAnimation(main, extra, type){//mainとextraにanimationを追加しsliderShowの配置を決める関数
    //mainが消え、extraを出す
    main.classList.add("depleteAnimation");
    extra.classList.add("expandAnimation");

    sliderShow.innerHTML = "";
    if(type == 1){
        sliderShow.append(extra);
        sliderShow.append(main);
    }
    else{
        sliderShow.append(main);
        sliderShow.append(extra);
    }
}


//eventLisnerの作成
leftBtn.addEventListener("click", function(){
    slideJump(-1);
})

rightBtn.addEventListener("click", function(){
    slideJump(1);
})


//画像を真ん中にする為に使う関数
function addDiv(nodeList){
    let output = [];

    for(let i = 0; i < nodeList.length; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("pictureDiv");

        newDiv.append(nodeList[i]);

        output.push(newDiv);
    }

    return output;
}

