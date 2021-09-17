function main() {
  var myNoun = "dog";
  var myVerb = "ran";
  var myAdjective = "big";
  var myAdverb = "quickly";
  var wordBlanks =
    "The " +
    myNoun +
    " that " +
    myVerb +
    " through a " +
    myAdjective +
    " gate disappeared " +
    myAdverb +
    ".";

  return wordBlanks;
}
console.log(main());
module.exports = main;
