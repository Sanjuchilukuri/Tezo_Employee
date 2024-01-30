let isNavBarOpen = false;
let isDropDown = false; 
function openNav(){
    if( !isNavBarOpen)
    {
        document.getElementById("sidebar").style.width="335px";
        document.getElementById("header").style.marginLeft="330px";
        isNavBarOpen=true;
        document.querySelector('.nav-img').style.rotate = '';
    }
    else
    {
        document.getElementById("sidebar").style.width="0px";
        document.querySelector('.nav-img').style.rotate = '180deg'
        document.getElementById("header").style.marginLeft="0px";
        isNavBarOpen=false;
    }
}
function dropdown(str)
{
    const dropDownList = document.querySelector(str);
    let childElements = dropDownList.children;
    let listItems = childElements[1];
    if( !isDropDown )
    {
        listItems.style.display="block";
        childElements[0].classList.add("active");
        isDropDown = true;
    }
    else
    {
        listItems.style.display="none";
        childElements[0].classList.remove("active");
        isDropDown = false;
    }

} 
openNav();