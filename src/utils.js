import  data  from './data.json'

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getRegions(data){

    let newArray = [];
    let uniqueObject = {};

    for(let i in data){
       let objRegion = data[i]['region'];

        uniqueObject[objRegion] = data[i];

    }

    for(let i in uniqueObject){
        newArray.push(uniqueObject[i])
    };
    return newArray;
}

export function convertBorderCode(code){
    let filter =  data.filter((countries) => countries.alpha3Code === code);
    return filter[0].name
 }