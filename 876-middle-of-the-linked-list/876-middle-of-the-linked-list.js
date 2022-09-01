/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let point1=head
    let point2=head
    while(point2!=null && point2.next!=null) {
        point1 = point1.next
        point2 = point2.next.next
    }
    return point1
};