Array.prototype.mySlice = function (index = 0, index2 = this.length) {
  if (!Array.isArray(this)) {
    throw new Error('массив должен быть массивом')
  }
  const result = []

  for (i = index; i < this.length; i++) {
    if (i < index2) {
      result.push(this[i])
    }
  }

  return result
}