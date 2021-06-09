const isFasly = (value:any) => value === 0? false: !value;

interface Map {
  [key: string]: any
}
export const cleanObject = (value: Map) => {
  let result = {...value}
  Object.keys(value).forEach(key => {
    if(isFasly(value[key])){
      delete result[key]
    }
  })
  return result
}
