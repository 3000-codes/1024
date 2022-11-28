const a={val:'a'}
const b={val:'b'}
const c={val:'c'}
a.next=b
b.next=c

//遍历链表
let p=a
while(p){
    console.log(p.val);
    p=p.next
}

//插入链表:b,c之间插入d
const d={val:'d'}
b.next=d
d.next=c

//移除节点：b,c之间移除d

b.next=c

//反转链表
