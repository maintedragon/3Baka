var a =  1;
if(a > 0){
    for(var i = 1; a > i; i++){
        var ii = String(i);
        if(i % 3 === 0 || ii.indexOf("3") >= 0){
            document.write(i + "アホ<br>");
        } else {
            document.write(i + "<br>");
        }
    }
} else {
    document.write("正の数値にしてください。");
}