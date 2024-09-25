Array.prototype.myIncludes = function (element) {
  if (!Array.isArray(this)) {
    throw new Error('массив должен быть массивом')
  }
  if (typeof element !== 'string' && typeof element !== 'number') {
    throw new Error('функция не была переданна')
  }
  for (i = 0; i < this.length; i++) {
    if (this[i] === element) {
      return true
    }
  }
  return false
}
