var SortHelper = require('../module/sortHelper@2.js');
var SortMethod = require('../sortFunction/sortMethod.js');

var test = SortHelper.generateArray(100000,1,2000);
//var result1 = SortMethod.quickSort(test);
//var result2 = SortMethod.insertionSort(test);
SortHelper.testSortFunctionPerformance('快速排序',SortMethod.quickSort,test);
SortHelper.testSortFunctionPerformance('选择排序',SortMethod.selectionSort,test);
SortHelper.testSortFunctionPerformance('冒泡排序',SortMethod.bubbleSort,test);
SortHelper.testSortFunctionPerformance('插入排序',SortMethod.insertionSort,test); 