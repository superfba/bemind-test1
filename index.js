'use strict'


var category = [{
    c1: "abbigliamento Abbigliamento",
    c2: "estivo Estivo",
    c3: "per-il-mare Per il mare"
},
{
    c1: "abbigliamento Abbigliamento",
    c2: "estivo Estivo",
    c3: "per-la-montagna Per la montagna"
},
{
    c1: "abbigliamento Abbigliamento",
    c2: "invernale Invernale",
},
{
    c1: "arte Arte",
    c2: "quadri-e-fotografie Quadri e fotografie",
}];

var slugObject = [];

category.map(function (el) {
    let keys = Object.keys(el);
    let slugObj = {};
    for (let i = 0; i < keys.length; i++) {
        let name = el[keys[i]];
        let slug = name.substr(0, name.indexOf(' ')).trim();
        name = name.substr(name.indexOf(' ')).trim();

        slugObj[keys[i]] = { slug: slug, name: name };
    }
    slugObject.push(slugObj);    
});

console.log(slugObject);

