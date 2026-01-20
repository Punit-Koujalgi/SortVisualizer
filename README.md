# Sort Visualizer 🔄 - [Live Demo](https://punit-koujalgi.github.io/SortVisualizer/)

An interactive React web application that provides real-time visualization of various sorting algorithms. This educational tool helps users understand how different sorting algorithms work by providing step-by-step visual representation with color-coded elements, performance metrics, and detailed algorithm descriptions.

![Sorting Visualizer Demo](VisualizeSort.gif)

## 🚀 Features

- **7 Sorting Algorithms**: Visualize bubble sort, selection sort, insertion sort, merge sort, quick sort, quicksort 3-way partitioning, and heap sort
- **Interactive Controls**: Play, pause, adjust speed, and step through sorting animations
- **Color-Coded Visualization**: Different colors represent various states (comparing, swapping, sorted, etc.)
- **Performance Metrics**: View time and space complexity for each algorithm
- **Customizable Array Size**: Adjust the number of elements to sort (from small to large datasets)
- **Randomize Function**: Generate new random arrays to test algorithms
- **Responsive Design**: Works seamlessly across different screen sizes
- **Educational Content**: Detailed descriptions and complexity analysis for each algorithm

## 🎯 Demo

### Quick Sort Visualization
![Quick Sort Demo](VisualizeQuickSort.gif)

## 🛠️ Technology Stack

- **React** 17.0.2 - Frontend framework
- **JavaScript (ES6+)** - Core programming language
- **CSS3** - Styling and animations
- **Bootstrap** 5.0.2 - UI components and layout
- **React Icons** 4.2.0 - Icon library

## 🎮 Usage

1. **Select Algorithm**: Choose from the dropdown menu in the navigation bar
2. **Adjust Array Size**: Use the slider to change the number of elements
3. **Randomize**: Click the randomize button to generate a new array
4. **Start Visualization**: Click the play button to begin the sorting animation
5. **Control Playback**: Use play/pause and speed controls to manage the visualization
6. **Learn**: Read the algorithm descriptions and complexity information

## 🧮 Supported Algorithms

### 1. **Bubble Sort**
- **Description**: A simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order
- **Time Complexity**: 
  - Best: O(n)
  - Average: O(n²)
  - Worst: O(n²)
- **Space Complexity**: O(1)
- **Visualization**: Shows comparisons in blue and swaps in red

### 2. **Selection Sort**
- **Description**: Divides the input into sorted and unsorted regions, repeatedly finding the minimum element from the unsorted region and placing it at the beginning
- **Time Complexity**: 
  - Best: O(n²)
  - Average: O(n²)
  - Worst: O(n²)
- **Space Complexity**: O(1)
- **Visualization**: Highlights the current minimum element and its final position

### 3. **Insertion Sort**
- **Description**: Builds the final sorted array one element at a time, inserting each new element into its proper position among the previously sorted elements
- **Time Complexity**: 
  - Best: O(n)
  - Average: O(n²)
  - Worst: O(n²)
- **Space Complexity**: O(1)
- **Visualization**: Shows the sorted portion growing from left to right

### 4. **Merge Sort**
- **Description**: A divide-and-conquer algorithm that recursively divides the array into halves, sorts them, and then merges them back together
- **Time Complexity**: 
  - Best: O(n log n)
  - Average: O(n log n)
  - Worst: O(n log n)
- **Space Complexity**: O(n)
- **Visualization**: Shows the divide and merge process with color-coded subarrays

### 5. **Quick Sort**
- **Description**: Uses a pivot element to partition the array, recursively sorting elements smaller and larger than the pivot
- **Time Complexity**: 
  - Best: O(n log n)
  - Average: O(n log n)
  - Worst: O(n²)
- **Space Complexity**: O(log n)
- **Visualization**: Highlights pivot element and partitioning process

### 6. **Quick Sort 3-Way Partitioning**
- **Description**: An optimized version of quicksort that handles arrays with many duplicate elements by partitioning into three groups: less than, equal to, and greater than the pivot
- **Time Complexity**: 
  - Best: O(n)
  - Average: O(n log n)
  - Worst: O(n²)
- **Space Complexity**: O(log n)
- **Visualization**: Shows three-way partitioning with different colors for each region

### 7. **Heap Sort**
- **Description**: Uses a binary heap data structure to sort elements, first building a max heap and then repeatedly extracting the maximum element
- **Time Complexity**: 
  - Best: O(n log n)
  - Average: O(n log n)
  - Worst: O(n log n)
- **Space Complexity**: O(1)
- **Visualization**: Shows heap construction and extraction process

## 🚀 Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Punit-Koujalgi/SortVisualizer.git
   cd sort_visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to** `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.js        # Navigation and algorithm selection
│   ├── Visualizer.js    # Main visualization container
│   ├── SortChart.js     # Chart rendering component
│   ├── ColorKey.js      # Color legend component
│   ├── SortInfo.js      # Algorithm information display
│   └── Parts/           # Reusable UI components
├── algorithms/          # Sorting algorithm implementations
│   ├── BubbleSort.js
│   ├── SelectionSort.js
│   ├── InsertionSort.js
│   ├── MergeSort.js
│   ├── QuickSort.js
│   ├── QuickSort3.js
│   └── HeapSort.js
├── utilities/           # Helper functions and constants
│   ├── Constants.js     # Algorithm mappings and initial state
│   ├── ArrayFunctions.js # Array generation and manipulation
│   └── visualStates.js  # Visualization state management
└── App.js              # Main application component
```

## 🎨 Visualization Features

- **Color Coding**: Each algorithm uses specific colors to represent different operations
  - Blue: Elements being compared
  - Red: Elements being swapped
  - Green: Sorted elements
  - Yellow: Current element being processed
  - Purple: Pivot elements (in quicksort)

- **Speed Control**: Adjust animation speed from slow to fast
- **Step-by-Step Mode**: Step through the algorithm one operation at a time
- **Progress Tracking**: Visual progress bar showing sorting completion

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [SortVisualizer](https://punit-koujalgi.github.io/SortVisualizer/)
- **GitHub Repository**: [Source Code](https://github.com/Punit-Koujalgi/SortVisualizer)

