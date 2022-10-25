# auto add try catch


### Usage
1.  Through the Command Palette.
- `addTryCacth`
2. Through the shortcut
- `mac "cmd + o + o"`
- `win "ctrl + o + o"`

```js
async function getValue() {
  const a = await p();
};
```

```js
async function getValue() {
   try {
     const a = await p();
   }catch(e){
    console.log(e)
   }
};
```
