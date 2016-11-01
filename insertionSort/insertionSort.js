var SortHelper = require('../module/sortHelper@2.js');
//插入排序
//思想：玩牌的时候垒牌的过程
//		新拿到一张牌，依次与手中的牌进行比较，之后放入合适的位置
//时间复杂度：O(n^2)，是相同时间复杂度下速度最快的排序
function insertionSort(arr) {
	if (arr == null || arr.length === 0) {
		console.log('Input parameter error！The array is null or nothing in it!');
		return false;
	};
	for (var i = 1; i < arr.length; i++) {
		//提取当前元素
		var currentElem = arr[i];
		//找到当前元素应该插入的位置索引，并保存到变量j中
		for (var j = i; j > 0 && arr[j-1] > currentElem; j--) {
			arr[j] = arr[j-1]; 
		};
		//将i位置的元素插入到指定的位置
		arr[j] = currentElem;
	};
	return arr;
};

module.exports = insertionSort;

var test = SortHelper.generateArray(1000, 0, 2000);
var result = insertionSort(test);
SortHelper.printArray(result);
SortHelper.testSortFunctionPerformance('插入排序', insertionSort, test);