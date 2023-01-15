function digitCount(num: string): boolean {
const map:Map<number,number>=new Map()
for(let i=0,len=num.length;i<len;i++){
    const tmp=map.get(+num[i])||0
    map.set(+num[i],tmp+1)
}
for(let [key,value] of map){
    console.log(key,value);
    
}
for(let i=0,len=num.length;i<len;i++){
    if(map.get(i)===undefined&&+num[i]!==0){
        return false
    }else if(map.get(i)!==undefined&&map.get(i)!==+num[i]){
        return false
    }
}
return true
};

digitCount("1210")