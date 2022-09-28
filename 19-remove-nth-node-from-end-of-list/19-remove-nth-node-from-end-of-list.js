/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let tempList = new ListNode(0);
    tempList.next = head;
	
    let slow = tempList
    let fast = tempList
    
    
    for(let i=0; i<=n; i++) fast = fast.next;
    
    while(fast) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return tempList.next
};

