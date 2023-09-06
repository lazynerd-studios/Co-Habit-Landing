import React, { useState } from 'react';

const RichTextArea = () => {
    const [text, setText] = useState('');
    const [showEmojiPanel, setShowEmojiPanel] = useState(false);

    const handleFormat = (format) => {
        let updatedText = text;
        let selectedText = window.getSelection().toString();

        if (format === 'bold') {
            updatedText = updatedText.replace(selectedText, `<b>${selectedText}</b>`);
        } else if (format === 'italic') {
            updatedText = updatedText.replace(selectedText, `<i>${selectedText}</i>`);
        } else if (format === 'paragraph') {
            updatedText += '\n\n';
        } else if (format === 'bulletPoints') {
            updatedText += '\n• ';
        }

        setText(updatedText);
    };

    const handleAttachmentClick = async () => {
        try {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.multiple = true;
            fileInput.accept = 'image/png, image/jpeg, image/jpg, application/pdf'; // Accept PNG, JPG, JPEG, and PDF files
            // fileInput.style.display = 'none';

            fileInput.addEventListener('change', (e) => {
                const files = e.target.files;
                if (files.length > 0) {
                    // Handle the selected files (e.g., upload to a server, display them in the editor)
                    // You can customize this logic according to your needs
                    console.log('Selected files:', files);
                }
            });

            document.body.appendChild(fileInput);
            fileInput.click();
            document.body.removeChild(fileInput);
        } catch (error) {
            console.error('Error handling attachments:', error);
        }


    };


    return (
        <div>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                // cols={90}
                maxlength="500"
                className="p-4 min-h-[10rem] max-h-[15rem] font-normal rounded-t-lg border w-full"
            />

            <div className='border -mt-2 rounded-b-lg py-4 px-4 laptop:gap-4 tablet:gap-4 gap-3 flex'>

                <button onClick={() => handleFormat('bold')}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1401_605)">
                            <path d="M7.06152 5H13.0615C13.9898 5 14.88 5.36875 15.5364 6.02513C16.1928 6.6815 16.5615 7.57174 16.5615 8.5C16.5615 9.42826 16.1928 10.3185 15.5364 10.9749C14.88 11.6313 13.9898 12 13.0615 12H7.06152V5Z" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M13.0615 12H14.0615C14.9898 12 15.88 12.3687 16.5364 13.0251C17.1928 13.6815 17.5615 14.5717 17.5615 15.5C17.5615 16.4283 17.1928 17.3185 16.5364 17.9749C15.88 18.6313 14.9898 19 14.0615 19H7.06152V12" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1401_605">
                                <rect width="24" height="24" fill="white" transform="translate(0.0615234)" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>
                <button onClick={() => handleFormat('italic')}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1401_609)">
                            <path d="M11.0615 5H17.0615" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M7.06152 19H13.0615" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M14.0615 5L10.0615 19" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1401_609">
                                <rect width="24" height="24" fill="white" transform="translate(0.0615234)" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>
                <button onClick={() => handleFormat('paragraph')}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1401_614)">
                            <path d="M11.0615 6H20.0615" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M11.0615 12H20.0615" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M12.0615 18H20.0615" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M4.06152 16C4.06152 15.4696 4.27224 14.9609 4.64731 14.5858C5.02238 14.2107 5.53109 14 6.06152 14C6.59196 14 7.10066 14.2107 7.47574 14.5858C7.85081 14.9609 8.06152 15.4696 8.06152 16C8.06152 16.591 7.56152 17 7.06152 17.5L4.06152 20H8.06152" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M6.06152 10V4L4.06152 6" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1401_614">
                                <rect width="24" height="24" fill="white" transform="translate(0.0615234)" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>
                <button onClick={() => handleFormat('bulletPoints')}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1401_621)">
                            <path d="M9.06152 6H20.0615" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M9.06152 12H20.0615" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M9.06152 18H20.0615" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M5.06152 6V6.01" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M5.06152 12V12.01" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M5.06152 18V18.01" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1401_621">
                                <rect width="24" height="24" fill="white" transform="translate(0.0615234)" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>

                <button onClick={() => setShowEmojiPanel(!showEmojiPanel)}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1401_599)">
                            <path d="M12.0615 21C17.0321 21 21.0615 16.9706 21.0615 12C21.0615 7.02944 17.0321 3 12.0615 3C7.09096 3 3.06152 7.02944 3.06152 12C3.06152 16.9706 7.09096 21 12.0615 21Z" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M9.06152 10H9.07152" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M15.0615 10H15.0715" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M9.56152 15C9.8874 15.3326 10.2764 15.5968 10.7057 15.7772C11.1349 15.9576 11.5959 16.0505 12.0615 16.0505C12.5272 16.0505 12.9881 15.9576 13.4174 15.7772C13.8467 15.5968 14.2356 15.3326 14.5615 15" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1401_599">
                                <rect width="24" height="24" fill="white" transform="translate(0.0615234)" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>

                <button onClick={handleAttachmentClick}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1401_629)">
                            <path d="M10.0615 13.9999C10.3874 14.3325 10.7764 14.5967 11.2057 14.7771C11.6349 14.9575 12.0959 15.0504 12.5615 15.0504C13.0272 15.0504 13.4881 14.9575 13.9174 14.7771C14.3467 14.5967 14.7356 14.3325 15.0615 13.9999L19.0615 9.99989C19.7246 9.33685 20.0971 8.43757 20.0971 7.49989C20.0971 6.56221 19.7246 5.66293 19.0615 4.99989C18.3985 4.33685 17.4992 3.96436 16.5615 3.96436C15.6238 3.96436 14.7246 4.33685 14.0615 4.99989L13.5615 5.49989" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                            <path d="M14.0614 9.99997C13.7355 9.66737 13.3466 9.40315 12.9173 9.22276C12.488 9.04238 12.0271 8.94946 11.5614 8.94946C11.0958 8.94946 10.6348 9.04238 10.2055 9.22276C9.77626 9.40315 9.38729 9.66737 9.06141 9.99997L5.06141 14C4.39837 14.663 4.02588 15.5623 4.02588 16.5C4.02588 17.4377 4.39837 18.3369 5.06141 19C5.72445 19.663 6.62373 20.0355 7.56141 20.0355C8.49909 20.0355 9.39837 19.663 10.0614 19L10.5614 18.5" strokeLinejoin="#7C8493" strokeLinejoin-width="2" strokeLinejoin-linecap="round" strokeLinejoin-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1401_629">
                                <rect width="24" height="24" fill="white" transform="translate(0.0615234)" />
                            </clipPath>
                        </defs>
                    </svg>

                </button>
            </div>
        </div>
    );
};

export default RichTextArea;
