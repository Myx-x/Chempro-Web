function toggleSection(sectionName){
    
    var x = document.getElementsByTagName("section");
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if(element.className!=sectionName)element.style.display = "none";
    }
    
    var section = document.getElementById(sectionName);
    section.style.display = "block";
}


function showItemPage(name)
{
    toggleSection("store-more");
    document.getElementById("store-title").innerHTML = name;
    
    var imageDir='./images/';
    imageDir+=(name+'.jpg');
    document.getElementById("store-image").setAttribute("src", imageDir);

}