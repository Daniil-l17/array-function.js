Array.prototype.myConcat = function (array) {
  if (!Array.isArray(array)) {
    throw new Error('должен быть масивом')
  }
  return [...this, ...array]
}
