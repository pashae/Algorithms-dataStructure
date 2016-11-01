var SortHelper = require('../module/sortHelper@2.js');

function selectionSort(arr) {
	if (arr == null || arr.length === 0) {
		return false;
	};
	//进行排序
	for (var i = 0; i < arr.length; i++) {
		//指定位置
		var minIndex = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			};
		};
		SortHelper.swapNum(arr, i, minIndex);
	};
	return arr;
};

var test = SortHelper.generateArray(100,2,2000);
var result = selectionSort(test);
SortHelper.printArray(result);
SortHelper.testSortFunctionPerformance('选择排序', selectionSort, test);
