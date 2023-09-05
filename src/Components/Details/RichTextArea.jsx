import React, { useState } from 'react';

const RichTextArea = () => {
    const [text, setText] = useState('');
    const [showEmojiPanel, setShowEmojiPanel] = useState(false);

    const handleBoldClick = () => {
        setText((prevText) => `<b>${prevText}</b>`);
    };

    const handleItalicClick = () => {
        setText((prevText) => `<i>${prevText}</i>`);
    };

    const handleParagraphClick = () => {
        setText((prevText) => `${prevText}\n\n`);
    };

    const handleBulletPointsClick = () => {
        setText((prevText) => `${prevText}\n• `);
    };

    const handleAttachmentClick = () => {
        // Implement attachment logic here (e.g., opening a file picker)
    };

    return (
        <div>
            <div>
                <button onClick={handleBoldClick}>B</button>
                <button onClick={handleItalicClick}>I</button>
                <button onClick={handleParagraphClick}>¶</button>
                <button onClick={handleBulletPointsClick}>•</button>
                <button onClick={() => setShowEmojiPanel(!showEmojiPanel)}>😀</button>
                <button onClick={handleAttachmentClick}>🔗</button>
            </div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                // cols={90}
                className="p-4 font-normal w-full"
            />
        </div>
    );
};

export default RichTextArea;
