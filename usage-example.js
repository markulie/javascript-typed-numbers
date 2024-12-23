// Importing from your local library folder
import { Byte, Float } from './index.js'

// Example usage
const byte = new Byte(200)
console.log(byte.getValue()) // Output: -56 (wrapped value)

const float = new Float(3.14159)
console.log(float.getValue()) // Output: 3.1415927410125732
