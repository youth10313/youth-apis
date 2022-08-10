# youth-apis
ahmed alhasan's youth APIs
we've created simple package for you to use our APIs in your projects easily. but we prefer you to read our [API Documention](https://developers.ahmedalhasan.com/). also do not to check [Youth Club](https://ahmedalhasan.club)

### How To Use?
```javascript
import YouthAPI from "./index"

const Search = YouthAPI.Data.Core("Ahmed", "en");

Search.onChange(state => {
    // loading state change
})

Search.onError(err => {
    // handle Errors
})

Search.onComelete(response => {
    // do something with response
})

Search.subscribe(); // this will make the request.

```

contact me at Telegram if you have any questions: [Youth10313](https://t.me/youth10313)
