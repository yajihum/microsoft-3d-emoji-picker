# 😊Microsoft 3D Emoji Picker😊

Microsoft-3D-Emoji-Picker is an emoji picker made using the 3D version of Microsoft Fluent Emoji.
When you select an emoji, you can access its image icon.

※Strictly speaking, it's not an 'emoji picker' per se, but rather a picker for obtaining emoji icons. Therefore, it cannot be used as Unicode characters, like text.
※Do not use not on **Node.js**.

## 📕Installation

1. Install package

```
npm install ms-3d-emoji-picker
yarn add ms-3d-emoji-picker
pnpm add ms-3d-emoji-picker
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

## 📘Lisence

This is a emoji picker of Microsoft Fluent Emoji.

### Third party License

This project makes use of the following open-source software.

#### Fluent Emoji

- Link：[GitHub](https://github.com/microsoft/fluentui-emoji)
- License：MIT License
- Lisence Text： [LICENSE](https://github.com/microsoft/fluentui-emoji/blob/main/LICENSE)
