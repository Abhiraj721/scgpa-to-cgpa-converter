function helper(){
    var a=parseInt(main.sumofallsems.value)
    var b=parseInt(main.no_ofsems.value)
    var finalcgpa=a/b
    var get=document.querySelector(".getcgpa")
    get.innerHTML="<br><h3>Your cgpa:"+finalcgpa+"</h3>"

}