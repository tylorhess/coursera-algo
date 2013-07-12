#!/usr/bin/env node

var fs = require('fs');

fs.readFile('./IntegerArray.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    var fileString  = data.toString();
    var intArray = fileString.split('\n');
    console.log("["+intArray+"]");

});

var mergeSortAndCountSplitInv = function(countArrayLeft,countArrayRight) {
    var leftIndex = 0;
    var rightIndex = 0;
    var splitCount = 0;
    var mergedSortedArray = [];
    console.log("left: ");
    console.log(countArrayLeft);
    console.log("right: "); 
    console.log(countArrayRight);
    while (leftIndex < countArrayLeft.array.length && rightIndex < countArrayRight.array.length) {
	if (countArrayLeft.array[leftIndex] < countArrayRight.array[rightIndex]) {
	    mergedSortedArray.push(countArrayLeft.array[leftIndex]);
	    leftIndex++;
	    // no inversions
	} else {
	    mergedSortedArray.push(countArrayRight.array[rightIndex]);
	    rightIndex++;
	    // splitCount += number of items remaining in left array
	    splitCount += countArrayLeft.array.length - leftIndex;
	}
    }

    var remainder;
    if (leftIndex == countArrayLeft.array.length) {
	remainder = countArrayRight.array.slice(rightIndex, countArrayRight.array.length);
    } else {
	remainder = countArrayLeft.array.slice(leftIndex, countArrayLeft.array.length);
    }
    console.log("merged: ["+mergedSortedArray+"]  remainder: ["+remainder+"]  count: "+(countArrayLeft.count+countArrayRight.count+splitCount));
    mergedSortedArray = mergedSortedArray.concat(remainder);
    return {
	count : countArrayLeft.count+countArrayRight.count+splitCount,
	array : mergedSortedArray
    };
};

var sortAndCountInversions = function(array) {
    if (array.length <= 1)
	return {
	    count : 0,
	    array : array
	};
    else {
	var halfIndex = array.length / 2;
	var arrayLeft = array.slice(0,halfIndex);
	var arrayRight = array.slice(halfIndex,array.length);

	console.log("split: ["+arrayLeft+"]  ["+arrayRight+"]");
	// sort & count inversions in the left half
	var countArrayLeft = sortAndCountInversions(arrayLeft);
	// sort & count inversions in the right half
	var countArrayRight = sortAndCountInversions(arrayRight);
	// sort & count inversions across halves
	var countArraySplit = mergeSortAndCountSplitInv(countArrayLeft,countArrayRight);

	return countArraySplit;
    }
};
