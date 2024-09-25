Array.prototype.myJoin = function (element) {
  if (!Array.isArray(this)) {
    throw new Error('массив должен быть массивом')
  }
  let str = ''
  for (i = 0; i < this.length; i++) {
    if (i === 0) {
      str += this[i]
    } else if (element === '' || !!element) {
      str += element + this[i]
    } else {
      str += ',' + this[i]
    }
  }
  return str
}