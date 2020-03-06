# ember-data-bug

Code

```js
const event = await this.store.findRecord('event', 6);
await event.query('speakers', { sort: 'name' });
await event.query('speakers', { sort: 'id' });
```

Expected:

Ember Data 3.14.1

![Screenshot from 2020-03-07 00-36-34](https://user-images.githubusercontent.com/3874064/76114374-efa9a280-600b-11ea-8749-48d819b6c8f1.png)
![Screenshot from 2020-03-07 00-36-55](https://user-images.githubusercontent.com/3874064/76114403-ff28eb80-600b-11ea-9f69-393cbc6e12e9.png)

Actual:

Ember Data 3.16+

![Screenshot from 2020-03-07 00-41-25](https://user-images.githubusercontent.com/3874064/76114579-6a72bd80-600c-11ea-9548-8bf5e57106c0.png)
![Screenshot from 2020-03-07 00-40-56](https://user-images.githubusercontent.com/3874064/76114598-79597000-600c-11ea-84b5-1cddd4d4a1a0.png)

All speakers from the first query are fetched individually and returned as a result of the second query
