var SortHelper = require('../module/sortHelper@2.js');
//冒泡排序
//思想：相邻元素进行比较，依次找到数组中最大值、次大值……直到全部元素都排序完成
//时间复杂度：O(n^2)
function bubbleSort(arr) {
	if (arr == null || arr.length === 0) {
		console.log('Input parameter error！The array is null or nothing in it!');
		return false;
	};
	for (var i = arr.length; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			if (arr[j] > arr[j+1]) {
				SortHelper.swapNum(arr, j, j+1);
			};
		};
	};
	return arr;
};

/*
function bubbleSortBetter(arr) {
	if (arr == null || arr.length === 0) {
		console.log('Input parameter error！The array is null or nothing in it!');
		return false;
	};
	var len = arr.length;
	while(len > 0) {
		var pos = 0;
		for (var i = 0; i < len; i++) {
			if (arr[i] > arr[i+1]) {
				pos = i;
				SortHelper.swapNum(arr, i, i+1);
			};
		};
		len = pos;
	};
	return arr;
}
 */
}

module.exports = bubbleSort;

var test = SortHelper.generateArray(10000, 0, 2000);
var result = bubbleSort(test);
SortHelper.printArray(result);
SortHelper.testSortFunctionPerformance('冒泡排序', bubbleSort, test);