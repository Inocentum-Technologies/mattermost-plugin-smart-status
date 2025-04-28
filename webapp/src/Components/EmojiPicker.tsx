import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import React, { useState } from "react";

interface PropsType {
    id: string;
    value: string;
    onChange: (id: string, value: string) => void;
    setSaveNeeded: () => void;
}

export default ({
    id,
    value,
    onChange,
    setSaveNeeded
}: PropsType) => {
    const [selectedEmoji, setSelectedEmoji] = useState<string>(value);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        const newValue = `${emojiData.emoji}::${emojiData.names[0].replace(/[-\s]/g, "_")}`;
        setSelectedEmoji(newValue);

        onChange(id, newValue);
        setSaveNeeded()

        setShowEmojiPicker(false);
    }

    return (
        <div>
            <input
                placeholder="Select emoji"
                className="form-control"
                value={selectedEmoji.split('::')[0]}
                onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
            <EmojiPicker
                open={showEmojiPicker}
                skinTonesDisabled
                previewConfig={{
                    defaultEmoji: '📅',
                    defaultCaption: 'calendar',
                    showPreview: true
                }}
                onEmojiClick={handleEmojiClick} />
        </div>

    );
}