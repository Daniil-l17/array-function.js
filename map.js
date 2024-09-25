


Array.prototype.myMap = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('массив должен быть массивом')
  }
  if (typeof callback !== 'function' && typeof callback !== 'object') {
    throw new Error('функция не была переданна')
  }
  const result = []
  for (i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }
  return result
}