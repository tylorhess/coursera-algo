#!/usr/bin/env node

var merge = function(sArray1, sArray2) {
    var minIndex1 = 0;
    var minIndex2 = 0;
    var mergedArray = [];
    while (minIndex1 < sArray1.length && minIndex2 < sArray2.length) {
	if (sArray1[minIndex1] < sArray2[minIndex2]) {
	    mergedArray.push(sArray1[minIndex1]);
	    minIndex1++;
	} else {
	    mergedArray.push(sArray2[minIndex2]);
	    minIndex2++;
	}
    }
    var remainder;
    if (minIndex1 == sArray1.length)
	remainder = sArray2.slice(minIndex2,sArray2.length);
    else
	remainder = sArray1.slice(minIndex1,sArray1.length);
    mergedArray = mergedArray.concat(remainder);
    //console.log("["+sArray1+"] + ["+sArray2+"] = ["+mergedArray+"] remainder: ["+remainder+"]");
    return mergedArray;
};

var mergeSort = function(array) {
    if (array.length <= 1)
	return array;
    else {
	var halfIndex = array.length / 2;
	var array1 = array.slice(0,halfIndex);
	var array2 = array.slice(halfIndex,array.length);
	//console.log("split: ["+array1+"]  ["+array2+"]");
	var sortedArray1 = mergeSort(array1);
	var sortedArray2 = mergeSort(array2);
	return merge(sortedArray1,sortedArray2);
    }
};
