const popupFun = () =>
{
    let allpopups = document.querySelectorAll("[data-popup]");
    allpopups.forEach(element=>{
        element.addEventListener("click", function(e){
            let dataValue = e.target.getAttribute("data-popup");
            let showpopup = document.querySelectorAll(`[data-popupcontent="${dataValue}"]`);
            let allPopup = document.querySelectorAll(`[data-popupcontent]`);
            //removes all the popup if opened
            allPopup.forEach(element =>{
                element.classList.remove("showpopup");
            })
            //shows the popup based on attr value 
            showpopup.forEach(element =>{   
                element.classList.add("showpopup");
                let overlay = document.createElement("div");
                overlay.classList.add("overlay");
                document.body.insertBefore(overlay, element);
                //close on clicking the overlay 
                overlay.addEventListener("click", function(e){
                    e.target.remove();
                    element.classList.remove("showpopup");
                });
            })
        }) 
    })
 
}
export default popupFun;