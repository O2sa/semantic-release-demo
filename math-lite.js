export function add(a, b, options = { absolute: false }) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("add: يجب أن يكون كلا المعاملين رقمين");
  }
  const result = a + b;
  return options.absolute ? Math.abs(result) : result;
}

export function minus(a, b) {
  return a - b;
}