<?php

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution
{

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2)
    {
        $int1 = ($this->revList($l1));
        $int2 = ($this->revList($l2));
        return $this->intToLinkedList(bcadd($int1, $int2));
    }

    function revList($listNode)
    {
        $number = '';

        while ($listNode !== null) {
            $number = $listNode->val . $number;
            $listNode = $listNode->next;
        }

        return $number;
    }
    function intToLinkedList($number)
    {
        $dummy = new ListNode();
        $current = $dummy;

        // Iterate through the number string in reverse
        for ($i = strlen($number) - 1; $i >= 0; $i--) {
            $current->next = new ListNode((int)$number[$i]);
            $current = $current->next;
        }

        return $dummy->next;
    }
}
