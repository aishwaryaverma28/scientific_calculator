//get elements from HTML
let screen=document.querySelector("#screen");
let button=document.querySelectorAll(".btn");
let str="";

//
Array.from(button).forEach((button)=>{
    button.addEventListener("click",(e)=>{

        //condition for =
        if(e.target.innerHTML=="=")
        {
            str=eval(str);
            document.querySelector("input").value= str;
        }
        else if(e.target.innerHTML=="CE")
        {
            str="";
            document.querySelector("input").value= str;
        }
        else if(e.target.innerHTML=="sin")
        {
            let num=parseFloat(str);
            let out=Math.sin(num);
            console.log(out);
            str=toString(out);
            document.querySelector("input").value= str;
        }
        else{
        console.log(e.target.innerHTML);
        str=str + e.target.innerHTML;
        document.querySelector("#screen").value=str;
        }
    })
    
})