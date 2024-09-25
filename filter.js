
Array.prototype.myFilter = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('Массив должен быть массивом')
  }
  if (typeof callback !== 'function' && typeof callback !== 'object') {
    throw new Error('функция нее была переданна')
  }
  const result = []
  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result
}