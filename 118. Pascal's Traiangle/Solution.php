<?php
/*
Pascal's Triangle
Leet code link
https://leetcode.com/problems/pascals-triangle/?envType=daily-question&envId=2023-09-08
*/
class Solution
{

    /**
     * @param Integer $numRows
     * @return Integer[][]
     */
    function generate($numRows)
    {
        if ($numRows == 0) {
            //returns nothing when num rows is 0
            return [];
        } else if ($numRows == 1) {
            //returns [[1]] when the num row is 1
            return [[1]];
        }
        //init the triangle array
        $triangle = [];
        for ($i = 0; $i < $numRows; $i++) {
            $row = [];
            for ($j = 0; $j <= $i; $j++) {
                if ($j == 0 || $i == 0) {
                    $row[] = 1;
                } else {
                    $row[] = $triangle[$i - 1][$j - 1] + $triangle[$i - 1][$j];
                }
            }
            $triangle[] = $row;
        }
        return $triangle;
    }
}
