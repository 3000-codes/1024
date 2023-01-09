type LinkNode = {
    val: string,
    next?: LinkNode | null
}

const a:LinkNode={val:'a'}
const b:LinkNode={val:'b'}
const c:LinkNode={val:'c'}
a.next=b
b.next=c

//遍历链表
let p=a
while(p){
    console.log(p.val);
    p=p.next as LinkNode
}

//插入链表:b,c之间插入d
const d:LinkNode={val:'d'}
b.next=d
d.next=c

//移除节点：b,c之间移除d

b.next=c

//反转链表
