import SelectionSort, {
  SelectionSortKey,
  SelectionSortDesc,
} from "../algorithms/SelectionSort";

export const ALGORITHM = {
  "Selection Sort": SelectionSort,
  // "Bubble Sort": BubbleSort,
  // "Insertion Sort": InsertionSort,
  // "Merge Sort": MergeSort,
  // "Quick Sort": QuickSort,
  // "Quick Sort 3": QuickSort3,
  // "Heap Sort": HeapSort,
  // "Shell Sort": ShellSort,
};

export const ALGORITHM_KEY = {
  "Selection Sort": SelectionSortKey,
  // "Bubble Sort": BubbleSortKey,
  // "Insertion Sort": InsertionSortKey,
  // "Merge Sort": MergeSortKey,
  // "Quick Sort": QuickSortKey,
  // "Quick Sort 3": QuickSort3Key,
  // "Heap Sort": HeapSortKey,
  // "Shell Sort": ShellSortKey,
};

export const ALGORITHM_DESC = {
  "Selection Sort": SelectionSortDesc,
  // "Bubble Sort": BubbleSortDesc,
  // "Insertion Sort": InsertionSortDesc,
  // "Merge Sort": MergeSortDesc,
  // "Quick Sort": QuickSortDesc,
  // "Quick Sort 3": QuickSort3Desc,
  // "Heap Sort": HeapSortDesc,
  // "Shell Sort": ShellSortDesc,
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
