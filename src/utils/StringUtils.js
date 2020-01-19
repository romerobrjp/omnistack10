module.exports = {
  parseStringAsArray(stringArray){
    return stringArray.split(',').map(tech => tech.trim());
  }
}