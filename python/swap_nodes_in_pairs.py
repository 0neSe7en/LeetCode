class Solution(object):
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head:
            return head
        current = 0
        current_head = head
        while current_head.next:
            if current % 2 == 0:
                current_head.val, current_head.next.val = current_head.next.val, current_head.val
            current += 1
            current_head = current_head.next
        return head

