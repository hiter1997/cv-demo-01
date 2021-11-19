let html = document.querySelector("#html")
let style = document.querySelector("#style")

let string = `/* 你好，我叫宇文
* 你的电脑已经被我控制了
* 我现在要画一个太极
* 一个大方块
**/
.pic{
    border: 3px solid black;
    width: 200px;
    height: 200px;
}
/* 变成大圆形*/
.pic{
    border-radius: 50%;

}
/* 中间切一刀
 * 一黑一白
 **/
.pic{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 黑中有白
 * 白中有黑
 **/
.pic::before{
    width: 97px;
    height: 97px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
.pic::after{
    width: 97px;
    height: 97px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/* 易有太极
* 是生两仪
* 两仪生四象
* 四象生八卦
* 八卦定吉凶
* 吉凶生大业
* ---《周易·系辞上》
 **/
`;

let n = 0;
let string2 = ""
let step = ()=>{

    
    setTimeout(() => {
        if ("\n"===string[n]) {
            string2 += "<br>";
        }else if(" "===string[n]){
            string2 += "&nbsp;";
        }else{
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length-1) {
            n +=1;
            step();
        }
    }, 10);
}

step();
