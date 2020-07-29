

export const doApiGet = async (_url) => {
    let resp = await fetch(_url);
    let data = await resp.json();
    //console.log("doApiGst",data);
    return data;
}
export let countryCode =[];
export const doApiGetAllCountry = async (_url) => {
    let resp = await fetch(_url);
    let data = await resp.json();
    //console.log("doApiGst",data);
    countryCode = data;
    return "הצליח";
}

export const theCountryName=(_code)=>{
   let item= countryCode.filter(item=>{
        if(item.alpha3Code==_code)
        return item
    })
   // console.log("get name for code "+_code);
    if(item==0)
    return"";
    return item[0].name
}
 
