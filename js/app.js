const gallery = document.querySelector(".gallery");

const item = document.querySelectorAll(".item")
console.log(item)

gallery.addEventListener("click", (e)=>{
    console.log(e)

    if(e.target.classList.contains("filter")){
        //gallery
        gallery.querySelector(".active").classList.remove("active");

        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");
        console.log(filterValue)

        item.forEach(item =>{

            if(item.classList.contains(filterValue) || filterValue === "all"){
                item.classList.add("show");

                item.classList.remove("hide");
            }
            else{
                item.classList.add("hide");
            }
            
        })
    }
})