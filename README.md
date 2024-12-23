# Typed Numbers Library

**Typed Numbers** is a lightweight JavaScript library that brings Java/C#-like numeric data types to JavaScript, using the power of Typed Arrays. This library provides precise control over numeric values, ensuring they behave as expected within their specific ranges and formats, just like in strongly-typed languages such as C#.

The main goal of **Typed Numbers** is **optimization**. JavaScript’s native `number` type is based on IEEE 754 double-precision floating-point, which consumes 64 bits of memory for every number—whether it's an integer or a floating-point value. This can be inefficient when working with integer-only values, especially for large datasets or performance-critical applications. **Typed Numbers** allows you to use specific, memory-efficient numeric types (e.g., `Byte`, `Short`, `Int`) to reduce memory usage and increase performance.

With **Typed Numbers**, you can easily create and manipulate various numeric types, ensuring your JavaScript code handles numbers with the desired precision, safety, and optimization.

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/markulie/javascript-typed-numbers.git
```

Add the library files to your project and use them locally.

---

## ⚡ Usage

### **Using the Library Locally**

If you’re working offline or using the library as local files:

```javascript
// Importing from your local library folder
import { Byte, Float } from './javascript-typed-numbers/index.js';

// Example usage
const byte = new Byte(200);
console.log(byte.getValue()); // Output: -56 (wrapped value)

const float = new Float(3.14159);
console.log(float.getValue()); // Output: 3.1415927410125732
```

---

## 📊 Performance Tests

### **Performance Test Results**
Tested on an array size of ten million elements:

- **Performance (Time in milliseconds):**
  ```
  Number:           12.285ms
  Int8Array:        25.458ms
  Int16Array:       32.808ms
  Int32Array:       39.171ms
  Float32Array:    202.259ms
  Float64Array:    199.668ms
  ```

- **Memory Usage (in KB):**
  ```
  Number Memory Usage:       78125.00 KB
  Int8Array Memory Usage:     9765.63 KB
  Int16Array Memory Usage:   19531.25 KB
  Int32Array Memory Usage:   39062.50 KB
  Float32Array Memory Usage: 39062.50 KB
  Float64Array Memory Usage: 78125.00 KB
  ```

These results highlight how **Typed Numbers** can significantly optimize memory usage compared to JavaScript's default `number` type, particularly for integer-based arrays.

---

## 🌟 Features

- **Memory Optimization**: JavaScript’s native `number` type uses 64 bits for every value. **Typed Numbers** lets you use more efficient types like `Byte`, `Short`, and `Int`, saving memory and improving performance when you don’t need full 64-bit precision.
- **Safe Numeric Handling**: Ensure your numeric values are clamped and wrapped within the valid range, just like in C# and other strongly-typed languages.
- **Precision Control**: Use `Float` and `Double` to represent floating-point numbers with high precision.
- **Modular and Lightweight**: This library is small, fast, and easy to integrate into any JavaScript project.
- **Typed Arrays**: The library is built on JavaScript’s `TypedArray` API, which ensures optimal performance and memory efficiency.

---

## 🌍 Example

Here’s a more detailed example of using different numeric types:

```javascript
import { Byte, Int, Float, Double, UnsignedInt } from './javascript-typed-numbers/index.js';

// Working with Byte - will wrap around value to fit in range (-128 to 127)
const byte = new Byte(200);
console.log(byte.getValue()); // Output: -56

// Working with UnsignedInt - exceeds maximum range, will wrap around
const unsignedInt = new UnsignedInt(5000000000);
console.log(unsignedInt.getValue()); // Output: 705032704 (wrapped)

// Handling floating point precision with Float and Double
const piFloat = new Float(3.141592653589793);
console.log(piFloat.getValue()); // Output: 3.1415927410125732 (precision loss)

const piDouble = new Double(3.141592653589793);
console.log(piDouble.getValue()); // Output: 3.141592653589793 (high precision)
```

---

## 📄 License

This library is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

### Key Highlights:
- **Memory Optimization**: By using Typed Arrays, **Typed Numbers** helps you optimize memory usage, reducing the overhead of JavaScript's 64-bit `number` type, especially for integer values.
- **Range Control**: Values outside the valid range are automatically wrapped, maintaining the integrity of your data types.
- **Consistency**: Java/C#-like behavior in JavaScript to ensure your numbers act predictably.
- **Precision**: Floating-point types offer flexibility for dealing with high precision numbers.

---

By using **Typed Numbers**, you gain more control over your numbers in JavaScript and ensure they behave just like the types you’re accustomed to in C# or other strongly typed languages. Perfect for applications where data integrity, memory optimization, and performance are critical!