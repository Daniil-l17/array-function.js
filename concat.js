Array.prototype.myConcat = function customConcat(array) {
  if (!Array.isArray(array)) {
    throw new Error('должен быть масивом')
  }
  return [...this, ...array]
}
