//引入排序辅助
var SortHelper = require('../module/sortHelper@2.js');

var SortMethod = function() {
	//归并排序的辅助方法
	function mergeSortProcessArray(arr, leftBorder, midIndex, rightBorder) {
		var tempArr = [rightBorder-leftBorder+1];
		for (var i = leftBorder; i <= rightBorder; i++) {
			tempArr[i-leftBorder] = arr[i];
		};
		//i代表左半部分指针，j代表右半部分指针
		var i = leftBorder, j = midIndex + 1;
		for(var k = leftBorder; k <= rightBorder; k++) {
			if(i > midIndex) {
				arr[k] = tempArr[j-leftBorder];
				j++;
			} else if(j > rightBorder) {
				arr[k] = tempArr[i-leftBorder];
				i++;
			} else if(tempArr[i-leftBorder] < tempArr[j-leftBorder]) {
				arr[k] = tempArr[i-leftBorder];
				i++;
			} else {
				arr[k] = tempArr[j-leftBorder];
				j++;
			};
		};
	}
};

SortMethod.prototype = {
	//冒泡排序
	//思想：相邻元素进行比较，依次找到数组中最大值、次大值……直到全部元素都排序完成
	//时间复杂度：O(n^2)
	bubbleSort: function(arr) {
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
	},

	//改进的冒泡排序
	//思想：每次遍历过后，记录下需要交换的元素的位置，即只进行一次交换
	bubbleSortBetter: function(arr) {
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
	},

	//插入排序
	//思想：玩牌的时候垒牌的过程
	//		新拿到一张牌，依次与手中的牌进行比较，之后放入合适的位置
	//时间复杂度：O(n^2)，是相同时间复杂度下速度最快的排序
	insertionSort: function(arr) {
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
	},

	//选择排序
	//思想：依次指定数组中的位置，将数组中合适的元素插入到该位置中
	//时间复杂度：O(n^2)
	selectionSort: function(arr) {
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
	},

	//归并排序
	//思想：将数组递归等分之后，进行排序
	//时间复杂度：O(n*logn)
	//js更适用于自底向上的归并排序，这种排序方法非常适合于栈这样的数据结构
	mergeSort: function(arr) {
		if (arr == null || arr.length === 0) {
			console.log('Input parameter error！The array is null or nothing in it!');
			return false;
		};
		//进行排序
		/*
		@param:step表示每次分组的长度
		 */
		for(var step = 1; step <= arr.length; step += step) {
			for(var i = 0; i+step < arr.length; i += step*2) {
				//对arr[i...i+step-1]和arr[i+step...i+2*step-1]
				mergeSortProcessArray(arr, i, i+step-1,Math.min(i+2*step-1,arr.length-1));
			};
		};
		return arr;
	},

	//快速排序
	//思想：随机选取数组中的一个元素，以该元素为界限，将数组分为两个部分。
	//		递归执行上述方法，直到数组已经全部排序为止
	//时间复杂度：O(n*logn)
	quickSort: function(arr) {
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

		return (arguments.callee(leftArr)).concat([pivot], arguments.callee(rightArr));
	}
};


module.exports = new SortMethod();