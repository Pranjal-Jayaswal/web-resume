
var navset=document.querySelectorAll(".horiList li a");

for (let i = 0; i < navset.length; i++) {
    navset[i].addEventListener('click',function(event){
        event.preventDefault();
        var id= this.textContent.trim().toLowerCase();
        var cordinate=document.getElementById(id);
        
           console.log(cordinate);
            var drop=setInterval(function()  {
                var cord=cordinate.getBoundingClientRect();
                if(cord.top<=0){
                    clearInterval(drop);
                    return;
                }
                window.scrollBy(0,50);
            }, 50);
        
    });
}
