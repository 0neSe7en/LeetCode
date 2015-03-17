# Definition for singly-linked list.
class ListNode:

    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    # @param head, a ListNode
    # @return a ListNode
    def deleteDuplicates(self, head):
        if not head:
            return head
        item = head
        while item.next:
            if item.val == item.next.val:
                item.next = item.next.next
            else:
                item = item.next
        return head

a = ListNode(1)
b = ListNode(2)
c = ListNode(2)
a.next = b
b.next = c
x = Solution()
print (x.deleteDuplicates(a))