function introduction(name){
    return `Hi, my name is ${name}.`;
}
introduction("Aki");

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Aki","JavaScript")
function introductionWithLanguage(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}
introductionWithLanguageOptional("Frank");
function introductionWithLanguageOptional(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

