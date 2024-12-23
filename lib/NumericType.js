import NumericTypeBase from './NumericTypeBase.js';

class Byte extends NumericTypeBase {
  constructor(value) {
    super(value, Int8Array); // Range: -128 to 127
  }
}

class UnsignedByte extends NumericTypeBase {
  constructor(value) {
    super(value, Uint8Array); // Range: 0 to 255
  }
}

class Short extends NumericTypeBase {
  constructor(value) {
    super(value, Int16Array); // Range: -32768 to 32767
  }
}

class UnsignedShort extends NumericTypeBase {
  constructor(value) {
    super(value, Uint16Array); // Range: 0 to 65535
  }
}

class Int extends NumericTypeBase {
  constructor(value) {
    super(value, Int32Array); // Range: -2147483648 to 2147483647
  }
}

class UnsignedInt extends NumericTypeBase {
  constructor(value) {
    super(value, Uint32Array); // Range: 0 to 4294967295
  }
}

class Float extends NumericTypeBase {
  constructor(value) {
    super(value, Float32Array); // Approximate IEEE 754 32-bit floating point
  }
}

class Double extends NumericTypeBase {
  constructor(value) {
    super(value, Float64Array); // Approximate IEEE 754 64-bit floating point
  }
}

export {
  Byte,
  UnsignedByte,
  Short,
  UnsignedShort,
  Int,
  UnsignedInt,
  Float,
  Double,
};
