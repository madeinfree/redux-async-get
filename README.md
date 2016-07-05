# Redux Async Get

Make easy to fetch data by ES7 async function with GET method for redux middleware.

# Installation

```
npm install redux-async-get
```
# Why use it

#### use redux-async-get

Easily for your redux action code.

```javascript
const FetchUsers = () => (
  {
    url: 'https://randomuser.me/api/',
    done: (result, dispatch) => {
      if (result) {
        dispatch({
          type: FETCH_USERS,
          payload: result
        })
      }
    },
    error: (err) => { throw new Error(err) }
  }
)
```

# License

MIT
