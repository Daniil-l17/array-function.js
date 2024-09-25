function customConcat(array1, array2) {
  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    throw new Error('должен быть масивом')
  }
  return [...array1, ...array2]
}