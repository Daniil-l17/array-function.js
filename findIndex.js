Array.prototype.myFindIndex = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('массив должен быть массивом')
  }
  if (typeof callback !== 'function' && typeof callback !== 'object') {
    throw new Error('функция не была переданна')
  }

  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i
    }
  }

  return -1
}