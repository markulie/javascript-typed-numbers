class NumericTypeBase {
  #buffer;

  constructor(value, ArrayType) {
    this.ArrayType = ArrayType;
    this.#buffer = new this.ArrayType(1);
    this.setValue(value);
  }

  setValue(value) {
    this.#buffer[0] = value; // Value is inherently clamped by the typed array
  }

  getValue() {
    return this.#buffer[0];
  }

  toString() {
    return this.getValue().toString();
  }
}

export default NumericTypeBase;
