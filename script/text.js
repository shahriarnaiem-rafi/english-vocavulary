const synonyms=["rafi","hello","my"];
const createElement=(arr)=>{
    // console.log(arr);
    const hmlELements=arr.map(el=>`<span class="btn">${el}</span>`);

        console.log(hmlELements.join(" "))
   
}
createElement(synonyms);
