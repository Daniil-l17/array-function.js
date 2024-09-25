Array.prototype.myReverse = function () {
  if (!Array.isArray(this)) {
    throw new Error('массив должен быть массивом')
  }
  const result = []

  for (i = this.length - 1; i >= 0; i--) {
    result.push(this[i])
  }

  return result
}