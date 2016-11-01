var SortHelper = require('../module/sortHelper@2.js');
//归并排序
//思想：将数组递归等分之后，进行排序
//时间复杂度：O(n*logn)
//取自《数据结构与算法Javascript描述》
//js中递归深度不够的问题：采用node.js执行的时候，出现stacksize月结额度现象
//js更适用于自底向上的归并排序，这种排序方法非常适合于栈这样的数据结构
//
//
//有问题没有解决，无法实现功能
function s(arr) {
	console.log(arr);
	console.log(arr.length)
	if (arr == null || arr.length === 0) {
		//console.log('Input parameter error！The array is null or nothing in it!');
		return false;
	};
	//进行排序
	if (arr.length < 2) {
		return;
	};
	/*
	@param:step表示每次分组的长度
	 */
	var step = 1, len = arr.length;
	var leftBorder, rightBorder;
	while(step < len) {
		leftBorder = 0;
		rightBorder = step;
		while(rightBorder + step <= len) {
			mergeSortProcessArray(arr, leftBorder, leftBorder+step, rightBorder, rightBorder+step);
			leftBorder = rightBorder + step;
			rightBorder = leftBorder + step;
		};
		if (rightBorder < len) {
			mergeSortProcessArray(arr, leftBorder, leftBorder+step, rightBorder, len);
		};
		step *= 2;
	};
};

function mergeSortProcessArray(arr, leftStartBorder, leftEndBorder, rightStartBorder, rightEndBorder) {
	var rightArr = new Array(rightEndBorder - rightStartBorder +1);
	var leftArr = new Array(leftEndBorder - leftStartBorder +1);
	var k = rightStartBorder;
	for (var i = 0; i < rightArr.length-1; i++) {
		rightArr[i] = arr[k];
		++k;
	};
	k = leftStartBorder;
	for (var i = 0; i < leftArr.length; i++) {
		leftArr[i] = arr[k];
		++k;
	};
	rightArr[rightArr.length-1] = Infinity;	//哨兵值
	leftArr[leftArr.length-1] = Infinity;
	var m = 0, n = 0;
	for (var k = leftStartBorder; k < rightEndBorder; k++) {
		if (leftArr[m] <= rightArr[n]) {
			arr[k] = leftArr[n];
			m++;
		} else {
			arr[k] = rightArr[n];
			n++;
		};
	};
};

var fuck = SortHelper.generateArray(4,1,2000);
console.log(typeof fuck);
var result = s(fuck);
//SortHelper.printArray(result);
SortHelper.testSortFunctionPerformance('归并排序', s, fuck);