require('es6-promise').polyfill()
require('isomorphic-fetch')

function _isFunction(cb) {
  return typeof cb === 'function'
}

function _genError(message) {
  throw new Error(message)
}

function reduxAsyncGet() {
  return ({ dispatch }) => next => async action => {
    const { url, done, error } = action

    if (!url) {
      next(action)
    } else {
      if (!_isFunction(done)) {
        _genError(`done must be type of 'function' but got the '${typeof done}'.`)
      }

      try {
        const res = await fetch(url).then(r => r)
        const result = await res.json(r => r)
        done(result, dispatch)
      } catch (err) {
        if (error) {
          error(err)
        } else {
          if (err) throw err
        }
      }
    }
  }
}

export default reduxAsyncGet()
