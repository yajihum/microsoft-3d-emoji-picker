<div align="center">
  <h1>Microsoft 3D Emoji Picker</h1>
  <br><b>Microsoft 3D Emoji Picker</b> is an emoji picker.
  <br>This's made using the 3D version of <a href="https://github.com/microsoft/fluentui-emoji">Microsoft Fluent Emoji.</a><br>
  <br>When you select an emoji, you can access its image icon.<br>
  <br><br><br><img width="338" alt="microsoft-emoji-picker" src="https://github.com/yajihum/microsoft-3d-emoji-picker/assets/117247060/9bfd7982-7de1-49d2-b922-4aec5a4cd95f">
<br><br>
</div>

## 📕Installation

1. Install package

```
npm install ms-3d-emoji-picker
```

2. Add imports for Picker and EmojiType, and use the Picker component.

```tsx
import { Picker, EmojiType } from 'ms-3d-emoji-picker';

export const EmojiPicker = () => {
  return (
    <Picker
      isOpen={true}
      handleEmojiSelect={(selectedEmoji: EmojiType) => console.log(selectedEmoji)}
    />
  );
};
```

With this, you can use the emoji picker right away!

## 📗Example

```tsx
import { Picker, EmojiType } from 'ms-3d-emoji-picker';

function App() {
  return (
    <main>
      <Picker
        isOpen={true}
        handleEmojiSelect={(selectedEmoji: EmojiType) => console.log(selectedEmoji)}
      />
    </main>
  );
}

export default App;
```

selectedEmoji's data example

```ts
{
    url: "https://cdn.emoji.yajium.day/smileys/1.png",
    category: "smileys",
    name: "1",
    extension: "png"
}
```

### Options/Props

| Option            | Default | Description                        |
| ----------------- | ------- | ---------------------------------- |
| **isOpen**        | `false` | Whether a picker should open       |
| **handleEmojiSelect** | `{}`    | Callback when an emoji is selected |

## 📙Attention

- Strictly speaking, it's not an 'emoji picker' per se, but rather a picker for obtaining emoji icons.  
  Therefore, it cannot be used as Unicode characters, like text.
- Do not use not on **Node.js**.

## 📘Lisence

This is a emoji picker of [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji).

### Third party License

This project makes use of the following open-source software.

### Fluent Emoji

- Link：[GitHub](https://github.com/microsoft/fluentui-emoji)
- License：MIT License
- Lisence Text： [LICENSE](https://github.com/microsoft/fluentui-emoji/blob/main/LICENSE)
