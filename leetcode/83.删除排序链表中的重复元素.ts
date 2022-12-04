/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates (head: ListNode | null): ListNode | null {
  let p1 = head
  while (p1 && p1.next) {
    if (p1.val === p1.next.val) {
      p1.next = p1.next.next
    //   p1.val = p1.next.val
    } else {
      p1 = p1.next
    }
  }
  return head
};
// @lc code=end
