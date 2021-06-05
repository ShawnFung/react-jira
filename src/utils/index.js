const isFasly = (value) => value === 0? false: !value;

export const cleanObject = (value) => {
  let result = {...value}
  Object.keys(value).forEach(key => {
    if(isFasly(value[key])){
      delete result[key]
    }
  })
  return result
}
