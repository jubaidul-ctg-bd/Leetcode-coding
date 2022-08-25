/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function makeNode(value) {
  return {
    val: value,
    next: null
  }
}

var addTwoNumbers = function(l1, l2) {
    let s = ''
    let node = l1
    let s2 = ''
    let node2 = l2
    let carry = 0
    let current = {}
    let head = 0
    let newNode = {}
    while(node || node2) {
        let tmp = 0
        if(node && node2) {
            tmp = (node.val+node2.val+carry)%10
            carry = Math.floor((node.val+node2.val+carry)/10)
            node = node.next
            node2 = node2.next
        } else if(node) {
            tmp = (node.val+carry)%10
            carry = Math.floor((node.val+carry)/10)
            node = node.next
        } else if(node2) {
            tmp = (node2.val+carry)%10
            carry = Math.floor((node2.val+carry)/10)
            node2 = node2.next
        }
        
        if(head) {
            current.next = makeNode(tmp)
            current = current.next
        } else {
            current = {
              val: tmp,
              next: null
            }
            head = 1
            newNode = {
              val: tmp,
              next: null
            }
            current = newNode
        }
        
    }
    if(carry) {
        current.next = makeNode(carry)
        current = current.next
    }

    return newNode
};