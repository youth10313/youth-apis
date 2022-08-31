# Youth APIs
ahmed alhasan's youth APIs.

we've created simple package for you to use our APIs in your projects easily. but we prefer you to read our [API Documention](https://developers.ahmedalhasan.com/). also do not forget to check [Youth Club](https://ahmedalhasan.club)

### How To Use?
```javascript
import YouthServers from "@youth10313/youth-apis"

const Search = YouthServers.Data.Core("Ahmed", "en");

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
Search.abort(); // this will abort the request.

```

it is so easy to use. for example if you working on an react project, your component sould be liek this:

```jsx
import YouthServers from "@youth10313/youth-apis";
import i18next from "i18next";
import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export const AnsarImamMahdi = () => {
    const dispatch = useDispatch();
    const { ansar } = useSelector(state => state.main);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const api = YouthServers.Data.Feeds.Main.Ansars.fetch(i18next.language);
    api.onChange(setLoading);
    api.onError(setError);
    api.onComelete(data => {
        dispatch({ type: "FETCH_ANSAR", payload: data });
    })

    useEffect(() => {
        api.subscribe();
        return () => api.abort();
    })
    return <div className="d-flex">
        {
            loading ? <div className="spinner" /> :

                ansar.map(person =>
                    <div className="card" key={person._id}>
                        <h4>{person.title}</h4>
                        <p>{person.desciption}</p>

                        <a href={person.url}>Read More</a>
                    </div>
                )
        }
    </div>
} 

```

contact me at Telegram if you have any questions: [Youth10313](https://t.me/youth10313)

Do not forget to donate us:
###### via USDT (TRC20): TLpGCNrfXRuQz93kpzKSvLDysNUdCPBw1g
 
