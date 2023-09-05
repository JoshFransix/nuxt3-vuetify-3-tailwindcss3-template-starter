// import getSymbolFromCurrency from 'currency-symbol-map'

const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
  
  /**
   * // Returns a function, that, as long as it continues to be invoked, will not
   // be triggered. The function will be called after it stops being called for
   // `wait` milliseconds.
   * @param func
   * @param wait
   * @returns {(function(...[*]): void)|*}
   */
  const debounce = (func, wait) => {
    let timeout
  
    // This is the function that is returned and will be executed many times
    // We spread (...args) to capture any number of parameters we want to pass
    return function executedFunction(...args) {
      // The callback function to be executed after
      // the debounce time has elapsed
      const later = () => {
        // null timeout to indicate the debounce ended
        timeout = null
  
        // Execute the callback
        func(...args)
      }
      // This will reset the waiting every function execution.
      // This is the step that prevents the function from
      // being executed because it will never reach the
      // inside of the previous setTimeout
      clearTimeout(timeout)
  
      // Restart the debounce waiting period.
      // setTimeout returns a truthy value (it differs in web vs Node)
      timeout = setTimeout(later, wait)
    }
  }
  
  const fieldsValidated = (fields) => {
    return Object.keys(fields).every((field) => {
      return fields[field] && fields[field].valid
    })
  }
  
  const capitaliseEachWord = (word) => {
    const wordArray = word.split(' ')
    for (let i = 0; i < wordArray.length; i += 1) {
      wordArray[i] =
        wordArray[i].charAt(0).toUpperCase() + wordArray[i].substring(1)
    }
    return wordArray.join(' ')
  }
  
  // const formatCurrency = (value, decimal = false, currency = 'NGN') => {
  //   return (
  //     getSymbolFromCurrency(currency) +
  //     new Intl.NumberFormat('en-US', {
  //       minimumFractionDigits: decimal ? 2 : 0,
  //       maximumFractionDigits: decimal ? 2 : 0,
  //     }).format(value)
  //   )
  // }
  
  const truncateString = (str, num = 20) => {
    if (str === null || str === undefined || str === '') {
      return
    }
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }
  
  const disableDateBeforeToday = (date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }
  
  const timePickerOptions = {
    start: '00:00',
    step: '00:30',
    end: '23:30',
  }
  // const base64toFile = (dataurl, filename) => {
  //   let arr = dataurl.split(','),
  //     mime = arr[0].match(/:(.*?);/)[1],
  //     bstr = atob(arr[1]),
  //     n = bstr.length,
  //     u8arr = new Uint8Array(n)
  
  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n)
  //   }
  
  //   return new File([u8arr], filename, { type: mime })
  // }
  
  const createFormData = (payload) => {
    const data = new FormData()
    data.append('file', payload.file)
    data.append('fileType', payload.fileType)
    data.append('meta', JSON.stringify(payload.meta))
    return data
  }
  // const cloudinaryImageTransform = (url, preset, defaultImg) => {
  //   if (url && url.match(/^https?:\/\/res\.cloudinary\.com/)) {
  //     return url.replace('upload', `upload/${preset}`)
  //   }
  //   return url ? url : defaultImg
  // }
  
  // const validateUrl = (link) => {
  //   if (link == null || link.length < 1) return null
  //   if (link.indexOf('https://') == 0 || link.indexOf('http://') == 0) {
  //     return link
  //   } else {
  //     return `https://${link}`
  //   }
  // }
  
  const isObjectEmpty = (obj) => {
    if (obj == null || obj == undefined) return true
    return Object.keys(obj).length === 0 && obj.constructor === Object
  }
  
  const helper = {
    isValidEmail,
    debounce,
    fieldsValidated,
    capitaliseEachWord,
    //   formatCurrency,
    truncateString,
    disableDateBeforeToday,
    timePickerOptions,
    //   base64toFile,
    createFormData,
    //   cloudinaryImageTransform,
    //   validateUrl,
    isObjectEmpty,
  }
  export { helper }
  