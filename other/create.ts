export{}
const obj=Object.create(null,{
    name:{
        value:"zhangsan",
        enumerable:!true,
        writable:true,
        configurable:true
    },
})
console.log(obj.name)
// console.log(obj.hasOwnProperty("name"))
// console.log(obj.propertyIsEnumerable("name"))
console.log(Object.keys(obj))
for(const key in obj){
    console.log(key)
}