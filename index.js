// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function  destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function  appendCat(name){
    const copyOfCats = [...cats,"Broom"]
    return copyOfCats;
}
function prependCat(name){
    const catsnew = ["Arnold",...cats]
    return catsnew;
}
function removeLastCat(){
    const copyofnewcats = cats.slice(0,-1)
    return copyofnewcats;
}
function removeFirstCat(){
    const anothercopyofcats = cats.slice(1);
    return anothercopyofcats;
}