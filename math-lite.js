export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("add: يجب أن يكون كلا المعاملين رقمين");
  }
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}