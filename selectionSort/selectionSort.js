var SortHelper = require('../module/sortHelper@2.js');
//选择排序
//思想：依次指定数组中的位置，将数组中合适的元素插入到该位置中
//时间复杂度：O(n^2)
function selectionSort(arr) {
	if (arr == null || arr.length === 0) {
		console.log('Input parameter error！The array is null or nothing in it!');
		return false;
	};
	//进行排序
	for (var i = 0; i < arr.length; i++) {
		//指定位置
		var minIndex = i;
		for (var j = i + 1; j < arr.length; j++) {
			//找到合适元素的下标
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			};
		};
		SortHelper.swapNum(arr, i, minIndex);
	};
	return arr;
};

var test1 = [10,9,8,7,6,5,4,3,2,1];
var test2 = SortHelper.generateArray(20000,1,20000);
console.log(typeof test2);
var result = selectionSort(test2);
SortHelper.printArray(result);
var bubbleSort = require('../bubbleSort/bubbleSort.js');
SortHelper.testSortFunctionPerformance('选择排序', selectionSort, test2);
SortHelper.testSortFunctionPerformance('冒泡排序', bubbleSort, test2);