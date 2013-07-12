#!/usr/bin/env node

var countSplitInv = function(array) {
    
};

var countInversions = function(array) {
    if (array.length <= 1)
	return 0;
    else {
        var halfIndex = array.length / 2;
        var arrayLeft = array.slice(0,halfIndex);
        var arrayRight = array.slice(halfIndex,array.length);
        var numInvLeft = countInversions(arrayLeft);
        var numInvRight = countInversions(arrayRight);
	var numInvSplit = countSplitInv(array);
        return numInvLeft + numInvRight + numInvSplit;
    }
};

