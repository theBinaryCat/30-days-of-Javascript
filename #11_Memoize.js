// Solution 1  not optimized

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let argArray = []
    let resultArray = []
    return function(...args) {
       const argsString = JSON.stringify(args)
        if (!argArray.includes(argsString)) {
            argArray.push(argsString)
            resultArray.push(fn(...args))
            return resultArray[resultArray.length-1]
        }
        else{
           return resultArray[argArray.indexOf(argsString)]
        }
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */


 // SOlution 2   optimized
 function memoize(fn) {
    let memoMap = new Map()
     return function(...args){
       let argString = args.join(',')
      if(!memoMap.has(argString)){
        let result = fn(...args)
        memoMap.set(argString, result)
        return result
      }else{
        return memoMap.get(argString)
      }
     }
   }


// Solution 3

function memoize(fn) {
    
    const memo = {}
    return function(...args){
      const key = JSON.stringify(args)
      if(key in memo){
        return memo[key]
      }
      
        const result = fn(...args)
        memo[key] = result
        return result
      
      
    }
  }