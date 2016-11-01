var SortHelper = require('../module/sortHelper@2.js');
var BubbleSort = require('../bubbleSort/bubbleSort.js');
//快速排序
//思想：随机选取数组中的一个元素，以该元素为界限，将数组分为两个部分。
//		递归执行上述方法，直到数组已经全部排序为止
//时间复杂度：O(n*logn)
//
//这里还缺少双路和三路的快速排序
function quickSort(arr) {
	/*if (arr == null || arr.length === 0) {
		console.log('Input parameter error！The array is null or nothing in it!');
		return false;
	};*/
	if (arr.length <= 1) {
		return arr;
	};
	var leftArr = [];
	var rightArr = [];
	var pivot = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] <= pivot) {
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		};
	};

	return quickSort(leftArr).concat([pivot], quickSort(rightArr));
};

var test = SortHelper.generateArray(10000,1,2000);
var result = quickSort(test);
//SortHelper.printArray(result);
//console.log(SortHelper.isSorted(result));
SortHelper.testSortFunctionPerformance('冒泡排序', BubbleSort, test);
SortHelper.testSortFunctionPerformance('快速排序', quickSort, test);