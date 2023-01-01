# Youth APIs
ahmed alhasan's youth APIs.

we've created simple package for you to use our APIs in your projects easily. but we prefer you to read our [API Documention](https://developers.ahmedalhasan.com/). also do not forget to check [Youth Club](https://ahmedalhasan.club)


### How To Use?
```javascript
import YouthServers from "@youth10313/youth-apis";

declare page;
const Search = YouthServers.Data.Core("Ahmed", "en", page);

Search.onChange(state => {
    // loading state change
})

Search.onError(err => {
    // handle Errors
})

Search.onComplete(response => {
    // do something with response
})

Search.subscribe(); // this will make the request.
Search.abort(); // this will abort the request.

```

### Advance usage
we've provided some functions that helps you to fetch data easier.
#### 1. Convert data with Convert function before onComplete Event.
#### 2. You can briefing the data that you fetching from the server to make request size smaller.
#### 3. You can pass new params into subscribe function. any thing will be override.
```javascript
const posts = YouthServers.Data.Feeds.Blog.posts.fetch("en", { category: '__categoryId' }, '__AuthenticationToken', 1, 13, '');

posts.onError(error => {
    // any handling error code
    alert('We have an error.' + error.response?.status ? `Error Code is ${error.response.status}` : `No Internet Connection`);
})

posts.onChange(state => {
    const spinner = document.getElementById('spinner');
    spinner.style.display = state ? 'block' : 'none';
})

// here you can convert the whole data fetched from server.
posts.Convert(res => {
    res.items = res.items.map(item => `
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <a href='/path/to/${item.latinTitle}'>Read More</a>
    `);
    return res;
})

// now this event will pass converted data to your function.
posts.onComplete(res => {
    const content = document.getElementById('content');
    content?.innerHTML = '';
    res.items.forEach(item => content?.innerHTML += item)
})

function startRequest(category) {
    posts.subscribe(
        ['title', 'latinTitle', 'description'], // the server response will only contains these fields.
        { params: { category } } // you can override headers, params and any argument you passed in fetch function
        // the cid is the id you passed in fetchOne and id is the Id you want to replace.
        )
}


const cancelButton = document.getElementById('cancel-button');
cancelButton?.addEventListener('click', posts.abort) // so the user can cancel the fetching request.

const refreshButton = document.getElementById('refresh-button');
refreshButton?.addEventListener('click', () => startRequest('__selected_category_id__'))


document.addEventListener('load', () => startRequest(''))

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
    api.onComplete(data => {
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

when you want to fetch data from an api that has pagination or any kind of filters (read: [API Documention](https://developers.ahmedalhasan.com/)) you can pass the queries in two ways.
 
 1. pass them through original args:
 ```javascript
YouthServers.Data.Feeds.Blog.posts.fetch(
    locale: string,
    querystring: any = {},
    Authorization = '',
    page?: number,
    perPage?: number,
    search?: string,
    sort_by?: string,
    sort_order?: 'ASC' | 'DESC',
    date_start?: Date,
    date_end?: Date,
    category?: string | string[]
)
```

2. pass them through querystring:
 ```javascript
YouthServers.Data.Feeds.Blog.posts.fetch(
    "",
    querystring: any = {
        locale: "fa",
        page: 1,
        perPage: 100,
        ...
    },
    Authorization = ''
)
```

Also you can mix these two ways.


## HTTP Proxy

if you want to access the API through a proxy, so you can set the proxies in .env file;
```javascript
REACT_APP_AUTH_API_PROXY="http://url.proxy/"
REACT_APP_DATA_API_PROXY="http://url.proxy/"
REACT_APP_CLOUD_API_PROXY="http://url.proxy/"
REACT_APP_OFFICIAL_API_PROXY="http://url.proxy/"
```

contact me at Telegram if you have any questions: [Youth10313](https://t.me/youth10313)

Do not forget to donate us:
###### via USDT (TRC20): TLpGCNrfXRuQz93kpzKSvLDysNUdCPBw1g
 
