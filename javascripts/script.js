function toggleSection(sectionName){
    
    var x = document.getElementsByTagName("section");
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if(element.className!=sectionName)element.style.display = "none";
    }
    
    var section = document.getElementById(sectionName);
    section.style.display = "block";
}