'use strict'

//生成一个随机的数组
exports.generateArray = function(num, rangeL, rangeR) {
	if (num == null) {
		console.log('Input parameter error！The number of array can\'t be zero!');
		return false;
	};
	var arrNum = num || 10;
	var arrRangeL = rangeL === rangeR ? 1 : rangeL || 1;
	var arrRangeR = rangeL === rangeR ? 100 : rangeR || 100;
	var arr = [];
	if (arrRangeL > arrRangeR) {
		var temp = arrRangeL;
		arrRangeL = arrRangeR;
		arrRangeR = temp;
		//
		for (var i = 0; i < arrNum; i++) {
			arr.push(generateArrayReal(arrRangeL, arrRangeR));
		};
		return arr;
	} else {
		for (var i = 0; i < arrNum; i++) {
			arr.push(generateArrayReal(arrRangeL, arrRangeR));
		};
		return arr;
	};
	//生成一个在[rangeL,rangeR]范围内的随机整数
	function generateArrayReal(rangeL, rangeR) {
		return Math.floor(Math.random()*(rangeR - rangeL + 1) + rangeL);
	};
};


//打印整个数组
/*
@param:arr数组
 */
exports.printArray = function(arr) {
	if (arr == null || arr.length === 0) {
		console.log('Input parameter error！The array is null or nothing in it!');
		return false;
	};
	var str = '[';
	for (var i = 0; i < arr.length; i++) {
		str += arr[i] + ', ';
	};
	str += ']';
	console.log(str);
};

//交换数组中的两个数据
/*
@param:arr数组
@param:srcIndex需要改变的原始位置
@param:targetIndex已经找到的目标位置
 */
exports.swapNum = function(arr, srcIndex, targetIndex) {
	var temp = arr[srcIndex];
	arr[srcIndex] = arr[targetIndex];
	arr[targetIndex] = temp;
};

//判断一个数组是否已经排序
/*
@param:arr数组
 */
exports.isSorted = function(arr) {
	if (arr == null || arr.length === 0) {
		console.log('Input parameter error！The array is null or nothing in it!');
		return false;
	};
	for (var i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i+1]) {
			return false;
		};
	};
	return true;
};

//测试排序算法的性能
/*
@param:sortMethodName排序方法名
@param:sortMethod排序方法
@param:arr传入的测试数组
 */
exports.testSortFunctionPerformance = function(sortMethodName, sortMethod, arr) {
	if (sortMethod == null) {
		console.log('Input parameter error！The sortMethod can\'t be null!');
		return false;
	};
	var startTime = parseInt(new Date().getTime());
	sortMethod(arr);
	var endTime = parseInt(new Date().getTime());
	if (isSorted(arr)) {
		console.log(sortMethodName + '算法耗时:' + (endTime - startTime) + 's.');
	};

	function isSorted(arr) {
		if (arr == null || arr.length === 0) {
			console.log('Input parameter error！The array is null or nothing in it!');
			return false;
		};
		for (var i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i+1]) {
				return false;
			};
		};
		return true;
	}
}