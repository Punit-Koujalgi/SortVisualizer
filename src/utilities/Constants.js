import SelectionSort, {
  SelectionSortKey,
  SelectionSortDesc,
} from "../algorithms/SelectionSort";

import BubbleSort, {
  BubbleSortKey,
  BubbleSortDesc,
} from "../algorithms/BubbleSort";

import InsertionSort, {
  InsertionSortKey,
  InsertionSortDesc,
} from "../algorithms/InsertionSort";
import MergeSort, {
  MergeSortKey,
  MergeSortDesc,
} from "../algorithms/MergeSort";
import QuickSort, {
  QuickSortKey,
  QuickSortDesc,
} from "../algorithms/QuickSort";
import QuickSort3, {
  QuickSort3Key,
  QuickSort3Desc,
} from "../algorithms/QuickSort3";
import HeapSort, { HeapSortKey, HeapSortDesc } from "../algorithms/HeapSort";

export const ALGORITHM = {
  "Selection Sort": SelectionSort,
  "Bubble Sort": BubbleSort,
  "Insertion Sort": InsertionSort,
  "Merge Sort": MergeSort,
  "Quick Sort": QuickSort,
  "Quick Sort 3": QuickSort3,
  "Heap Sort": HeapSort,
};

export const ALGORITHM_KEY = {
  "Selection Sort": SelectionSortKey,
  "Bubble Sort": BubbleSortKey,
  "Insertion Sort": InsertionSortKey,
  "Merge Sort": MergeSortKey,
  "Quick Sort": QuickSortKey,
  "Quick Sort 3": QuickSort3Key,
  "Heap Sort": HeapSortKey,
};

export const ALGORITHM_DESC = {
  "Selection Sort": SelectionSortDesc,
  "Bubble Sort": BubbleSortDesc,
  "Insertion Sort": InsertionSortDesc,
  "Merge Sort": MergeSortDesc,
  "Quick Sort": QuickSortDesc,
  "Quick Sort 3": QuickSort3Desc,
  "Heap Sort": HeapSortDesc,
};

export const initialState = {
  array: [],
  arraySize: 10,
  trace: [],
  algorithm: null,
};

export const initialTraceState = {
  trace: [],
  traceStep: -1,
};

export const initialVisualState = {
  originalArray: [],
  array: [],
  groupA: [],
  groupB: [],
  groupC: [],
  groupD: [],
  sortedIndices: [],
};
