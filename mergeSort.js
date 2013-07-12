#!/usr/bin/env node
 
var mergeSort = function(array) {
    if (array.length <= 1)
        return array;
    else {
        var halfIndex = (array.length / 2) - 1;
        var sortedArray1 = mergeSort(array1);
        var sortedArray2 = mergeSort(array2);
        return merge(sortedArray1,sortedArray2);
    }
}
