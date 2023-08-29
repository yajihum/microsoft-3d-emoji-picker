import { EmojiType, Picker } from "ms-3d-emoji-picker";
import "ms-3d-emoji-picker/styles/index.css";
import { useState } from "react";

const dummyWords = `ごめん、同級会には行けません。 いま、シンガポールにいます。
この国を南北に縦断する地下鉄を、私は作っています。
本当は、あの頃が恋しいけれど、でも……
今はもう少しだけ、知らないふりをします。
私の作るこの地下鉄も、きっといつか、誰かの青春を乗せるから。
`;

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<EmojiType | null>(null);

  const handlePickerOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <main className="container mx-auto my-auto p-4 md:p-12">
      <div className="bg-white rounded-xl p-6 grid grid-cols-1 gap-4">
        <section className="grid grid-cols-1 gap-2">
          <div className="text-right text-sm text-gray-500">
            <p>2023年8月12日(土)</p>
            <p>天気：🌤️</p>
          </div>
          <p className="whitespace-break-spaces text-sm md:text-base">
            {dummyWords}
          </p>
        </section>
        <section>
          <div>
            {selectedEmoji ? (
              <button type="button" onClick={() => handlePickerOpen}>
                <img
                  src={selectedEmoji.url}
                  alt={selectedEmoji.name}
                  width={35}
                  height={35}
                  className="inline bg-blue-100 rounded-lg p-1"
                />
              </button>
            ) : (
              <>
                {isOpen ? (
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="inline bg-blue-100 rounded-lg px-2 py-1"
                  >
                    ー
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                    className="inline bg-blue-100 rounded-lg px-2 py-1"
                  >
                    ＋
                  </button>
                )}
              </>
            )}
          </div>
          <div className="absolute z-10 my-1">
            <Picker
              isOpen={isOpen}
              onEmojiSelect={(selectedEmoji: EmojiType) => {
                setSelectedEmoji(selectedEmoji);
                setIsOpen(false);
              }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
