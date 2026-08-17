const loadLession = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => displayLesson(json.data));
}
const displayLesson = (lessons) => {
    // get the contaner & empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    // get into every lessson
    for (let lesson of lessons) {
        // create element
        console.log(lesson);
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
        <button  class=" btn btn-outline  btn-primary"><i class="fa-solid fa-book-open"></i>Lesson- ${lesson.level_no}</button>
        `
            ;
            levelContainer.append(btnDiv);
    }
}
loadLession();