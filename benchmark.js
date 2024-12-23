// Create arrays for comparison
const arraySize = 10_000_000; // 1 million elements
const jsArray = new Array(arraySize).fill(0).map((_, i) => i); // JavaScript numbers
const int8Array = new Int8Array(arraySize); // Int8
const int16Array = new Int16Array(arraySize); // Int16
const int32Array = new Int32Array(arraySize); // Int32
const float32Array = new Float32Array(arraySize); // Float32
const float64Array = new Float64Array(arraySize); // Float64

// Fill the arrays with data
for (let i = 0; i < arraySize; i++) {
  int8Array[i] = i % 256 - 128; // Wrap within -128 to 127
  int16Array[i] = i % 65536 - 32768; // Wrap within -32768 to 32767
  int32Array[i] = i; // Store integers directly
  float32Array[i] = i + 0.5; // Store as float
  float64Array[i] = i + 0.5; // Store as double
}

// Function to benchmark addition on an array
function benchmarkAddition(array, name) {
  console.time(name);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.timeEnd(name);
  return sum;
}

// Run performance tests
console.log(' - - Performance Test...');
benchmarkAddition(jsArray, 'Number');
benchmarkAddition(int8Array, 'Int8Array');
benchmarkAddition(int16Array, 'Int16Array');
benchmarkAddition(int32Array, 'Int32Array');
benchmarkAddition(float32Array, 'Float32Array');
benchmarkAddition(float64Array, 'Float64Array');

// Memory usage calculation
function memoryUsage(array, name) {
  const bytesPerElement = array.BYTES_PER_ELEMENT || 8; // Default 8 for JS numbers
  const totalBytes = array.length * bytesPerElement;
  console.log(`${name} Memory Usage: ${(totalBytes / 1024).toFixed(2)} KB`);
}

// Display memory usage
console.log(' - - Memory Usage Test...');
memoryUsage(jsArray, 'Number');
memoryUsage(int8Array, 'Int8Array');
memoryUsage(int16Array, 'Int16Array');
memoryUsage(int32Array, 'Int32Array');
memoryUsage(float32Array, 'Float32Array');
memoryUsage(float64Array, 'Float64Array');
