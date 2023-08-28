<div align="center">
  <h1>😊Microsoft 3D Emoji Picker😊</h1>
  <br><b>Microsoft 3D Emoji Picker</b> is an emoji picker.
  <br>This's made using the 3D version of <a href="https://github.com/microsoft/fluentui-emoji">Microsoft Fluent Emoji.</a><br>
  <br>When you select an emoji, you can access its image icon.<br>
  <br><br><br><img width="357" alt="image" src="https://github.com/yajihum/microsoft-3d-emoji-picker/assets/117247060/b672a3da-6cdd-4213-b2eb-e44720c7606d"><br><br>
</div>

## 📕Installation

1. Install package

```
npm install ms-3d-emoji-picker
```

2. Add the CSS file import where the Picker component is used

```ts
import "ms-3d-emoji-picker/styles/index.css";
```

## 📗Example

```tsx
import { Picker, EmojiType } from "ms-3d-emoji-picker";
import "ms-3d-emoji-picker/styles/index.css";

function App() {
  return (
    <main>
      <Picker
        isOpen={true}
        onEmojiSelect={(selectedEmoji: EmojiType) => console.log(selectedEmoji)}
      />
    </main>
  );
}

export default App;
```

selectedEmoji's data example

```ts
{
    url: "https://cdn.emoji.yajium.day/smilieys/1.png",
    category: "smilieys",
    name: "1",
    extension: "png"
}
```

### Options/Props

| Option            | Default | Description                        |
| ----------------- | ------- | ---------------------------------- |
| **isOpen**        | `false` | Whether a picker should open       |
| **onEmojiSelect** | `{}`    | Callback when an emoji is selected |

## Attension

※Strictly speaking, it's not an 'emoji picker' per se, but rather a picker for obtaining emoji icons.  
Therefore, it cannot be used as Unicode characters, like text.  
※Do not use not on **Node.js**.

## 📘Lisence

This is a emoji picker of [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji).

### Third party License

This project makes use of the following open-source software.

#### Fluent Emoji

- Link：[GitHub](https://github.com/microsoft/fluentui-emoji)
- License：MIT License
- Lisence Text： [LICENSE](https://github.com/microsoft/fluentui-emoji/blob/main/LICENSE)
