# auto add try catch


### Usage
1.  Through the Command Palette.
- `Try Catch`
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

![trycatch](https://user-images.githubusercontent.com/62171212/197775651-7cbe7758-3e67-4e27-a178-65e9ea6eb6ca.gif)
