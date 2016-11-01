'use strict'
//这个函数还需要一个可以生成一个近似有序的数组的方法
//生成一个完全逆序的数组
var SortHelper = function() {
	// 生成一个数值在一定范围内的，给定元素个数的数组
	/**
	 * [generateArray description]
	 * @param {Number} num 给定的元素个数
	 * @param {Number} rangeL 取值范围中较小的边界
	 * @param {Number} rangeR 取值范围中较大的边界
	 * @output {Array} arr 数组
	 */
	this.generateArray = function(num, rangeL, rangeR) {
		if (num == null) {
			console.log('Input parameter error！The number of array can\'t be zero!');
			return false;
		};
		var arrNum = num || 10;
		var arrRangeL = rangeL === rangeR ? 1 : rangeL || 1;
		var arrRangeR = rangeL === rangeR ? 100 : rangeR || 100;
		var arr = new Array();
		if (arrRangeL > arrRangeR) {
			var temp = arrRangeL;
			arrRangeL = arrRangeR;
			arrRangeR = temp;
			//
			for (var i = 0; i < arrNum; i++) {
				arr.push(this.generateArrayReal(arrRangeL, arrRangeR));
			};
			return arr;
		} else {
			for (var i = 0; i < arrNum; i++) {
				arr.push(this.generateArrayReal(arrRangeL, arrRangeR));
			};
			return arr;
		};
	};

	// 打印数组
	/**
	 * [printArray description]
	 * @param {Array} arr 需要打印的数组
	 * @output {String} arrStr 数组形式的字符串
	 */
	this.printArray = function(arr) {
		if (arr == null || arr.length === 0) {
			console.log('Input parameter error！The array is null or nothing in it!');
			return false;
		};
		var arrStr = '[';
		for (var i = 0; i < arr.length; i++) {
			arrStr += arr[i] + ', ';
		};
		arrStr += ']';
		console.log(arrStr);
	};

	// 交换数组中的两个数
	/**
	 * [swapNum description]
	 * @param {Array} arr 参与交换的数组
	 * @param {Number} srcIndex 要交换的位置
	 * @param {Number} targetIndex 交换的目标位置
	 */
	this.swapNum = function(arr, srcIndex, targetIndex) {
		var temp = arr[srcIndex];
		arr[srcIndex] = arr[targetIndex];
		arr[targetIndex] = temp;
	};
	
	// 测试排序函数的性能
	/**
	 * [testSortFunctionPerformance description]
	 * @param {String} sortMethodName 待测试的排序方法的名字
	 * @param {Function} sortMethod 待测试的排序函数
	 * @param {Array} arr 参与测试的数组
	 * @return {Number} 排序所需消耗的时间
	 */
	this.testSortFunctionPerformance = function(sortMethodName, sortMethod, arr) {
		if (sortMethod == null) {
			console.log('Input parameter error！The sortMethod can\'t be null!');
			return false;
		};
		var startTime = parseInt(new Date().getTime());
		var result = sortMethod(arr);
		var endTime = parseInt(new Date().getTime());
		if (this.isSorted(result)) {
			console.log(sortMethodName + '算法耗时:' + (endTime - startTime) + 's.');
		};
	};

	return this;
};

SortHelper.prototype = {
	// 在一定范围内生成一个随机数
	/**
	 * [generateArrayReal description]
	 * @param {Number} rangeL 随机数范围中的较小值
	 * @param {Number} rangeR 随机数范围中的较大值
	 */
	generateArrayReal: function(rangeL, rangeR) {
		return Math.floor(Math.random()*(rangeR - rangeL + 1) + rangeL);
	},

	// 判断数组是否已经排序
	/**
	 * [isSorted description]
	 * @param {Array} arr 数组
	 * @return {Boolean} true表示已经排序，false表示传参有误或者未排序
	 */
	isSorted: function(arr) {
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
	},
};

module.exports = new SortHelper();