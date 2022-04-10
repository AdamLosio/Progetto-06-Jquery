const mieImg = ["img\/arrabbiato.png", "img\/bello.png", "img\/piangere.png", "img\/ridere.png", "img\/amare.png", "img\/amare1.png", "img\/spavento.png", "img\/shock.png", "img\/arrabbiato.png", "img\/bello.png","img\/piangere.png", "img\/ridere.png", "img\/amare.png", "img\/amare1.png", "img\/spavento.png", "img\/shock.png"];

var valClick=[]
var end=[]
var click=0
var verifica=[]

$(document).ready(function(){
    function mescola(a){
    var Lunghezza =a.length;

   for(let i=Lunghezza;i >= 0;i--){
        var NumeroCaso = Math.floor(Math.random()*i);
        var indice= a.splice(NumeroCaso[0],1);
        a.splice(NumeroCaso,0,indice[0]);}}

$("div[class=box]").append("<div class=container></div>")

function iniziaPartita(){mescola(mieImg)
    $("div[class=container]").css({"display":"flex","width":"640px","flex-wrap":"wrap",})

    for(let i=0;i<mieImg.length;i++){
        $("div[class=container]").append(`<div id=${i}></div>`)}
    
    for(i=0;i<mieImg.length;i++){
             
    $(`div[class=container] > div[id=${i}]`).append(`<img src=${mieImg[i]} class=\'images\'>`)
    $(`div[class=container]>div[id=${i}]`).css({"background": "rgb(224, 201, 169)","margin":"5px","border-radius": "5px",})}
    
    $("img").css({"opacity":"0"})
    $("img").on("click", function(){
    $(this).css({"opacity":"1"})
        
        click++
        $("span[id=clicks]").html(click)

        var valore=$(this).attr("src")

        verifica.unshift(valore)

        var id=$(this).parent().attr("id")
        valClick.unshift(id)

        if(valClick.length>2){
            valClick=[]}
        
        if(verifica.length>2){
            $("img:not(.nonClick)").css({"opacity":0})
            verifica=[]}

        //le lascio visibili 
        else if(verifica[0]===verifica[1]){
            if(valClick[0]==valClick[1]){valClick=[]}

            else{
            $(`img[src="${verifica[0]}"]`).addClass("nonClick");

            end.push(verifica[0],verifica[1])
            valClick=[]} verifica=[]}
            $("button").click(function(){
                location.reload(true);
            });
            })}
            iniziaPartita()})

