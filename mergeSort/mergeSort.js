var SortHelper = require('../module/sortHelper@2.js');
//归并排序
//思想：将数组递归等分之后，进行排序
//时间复杂度：O(n*logn)
//
//js中递归深度不够的问题：采用node.js执行的时候，出现stacksize越界的现象
//js更适用于自底向上的归并排序，这种排序方法非常适合于栈这样的数据结构
function mergeSort(arr) {
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
};

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
};

/*递归在JS(Node.js)中并不适用，是由于其较深的递归深度导致栈越界的问题(罕见的内存溢出现象)
具体的代码如下：
自顶向下的归并排序
function mergeSort(arr) {
	if (arr == null || arr.length === 0) {
		console.log('Input parameter error！The array is null or nothing in it!');
		return false;
	};
	//进行排序
	mergeSortProcess(arr, 0, arr.length-1);
	return arr;
};
function mergeSortProcess(arr, leftBorder, rightBorder) {
	if (leftBorder >= rightBorder) {
		return;
	} else {
		var midIndex = Math.round((leftBorder + rightBorder) / 2);
		mergeSortProcess(arr, leftBorder, midIndex);
		mergeSortProcess(arr, midIndex+1, rightBorder);
		//优化方案
		//如果arr[mid]>arr[mid+1]的情况下才需要进行合并，否则不需要处理
		mergeSortProcessArray(arr, leftBorder, midIndex, rightBorder);
	};
};
function mergeSortProcessArray(arr, leftBorder, midIndex, rightBorder) {
	//这里还有很多东西需要修改 比如说代码的质量问题还有就是优化问题
	//如果数组太短，直接使用插入排序就好了。
	var tempArr = [r-l+1];
	for (var i = 0; i <= rightBorder; i++) {
		tempArr[i-l] = arr[i];
	};
	var i = l, j = mid + 1;
	for(var k = l; k <=r; k++) {
		if(i > mid) {
			arr[k] = tempArr[j-l];
			j++;
		} else if(j > r) {
			arr[k] = arr[i-l];
			i++;
		} else if(tempArr[i-l] < tempArr[j-l]) {
			arr[k] = tempArr[i-l];
			i++;
		} else {
			arr[k] = tempArr[j-l];
			j++;
		};
	};
};

 */

var test = SortHelper.generateArray(100000,1,2000);
var result = mergeSort(test);
SortHelper.printArray(result);
SortHelper.testSortFunctionPerformance('归并排序', mergeSort, test);