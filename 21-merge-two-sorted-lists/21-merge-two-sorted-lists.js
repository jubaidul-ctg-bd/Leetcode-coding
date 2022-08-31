/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var MergeSortedList = function(lst1, lst2) {
    let result = null; 

	// Base Cases
	if (!lst1 || lst1 == null) 
		return (lst2); 
	else if (!lst2 || lst2 == null) 
		return (lst1); 

	// recursively merging two lists
	if (lst1.val <= lst2.val) { 
		result = lst1; 
		result.next = MergeSortedList(lst1.next, lst2); 
	} 
	else { 
		result = lst2; 
		result.next = MergeSortedList(lst1, lst2.next); 
	} 
	return result; 
};
var mergeTwoLists = function(list1, list2) {
    return MergeSortedList(list1, list2)
};