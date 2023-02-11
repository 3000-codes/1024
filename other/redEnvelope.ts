export{}
function rrr(money:number, num:number):number[] {
    let arr = [];
    let rest = money;
    let count=num;
    while(count>1){
        let min = 0.01;
        let max = rest - (count-1)*min;
        let random = Math.random() * max
        random = +random.toFixed(2);
        rest -= random;
        arr.push(random);
        count--;
    }
    rest = +rest.toFixed(2);
    arr.push(rest);
    return arr;
}
type Sum=(arr:number[])=>number;
const sum :Sum=arr=>arr.reduce((a,b)=>a+b,0);

// console.log(rrr(100, 10));
// console.log(sum(rrr(100, 10)));
const arr=rrr(100, 10);
console.log(arr);
console.log(sum(arr));