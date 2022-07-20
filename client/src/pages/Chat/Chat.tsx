import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import avatar from '@images/logo.png';
import { Avatar } from '@mui/material';
import {
  IoChatboxEllipsesOutline,
  IoEllipsisVerticalOutline,
  IoHappyOutline,
} from 'react-icons/io5';
import EmojiPicker from '@components/EmojiPicker';
import MessageSender from '@components/MessageSender';
import MessageReceiver from '@components/MessageReceiver';

const Chat: React.FC = () => {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const iconEmojiRef = useRef<HTMLDivElement>(null);

  const handleInputMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleEmojiSelect = (data: any) => {
    setMessage((prevState: SetStateAction<string>) => `${prevState} ${data.native}`);
  };

  useEffect(() => {
    function detectClickOutside(event: any) {
      if (iconEmojiRef.current?.contains(event.target) && !event.target.props?.theme) {
        setShowIcon(!showIcon);
      }

      if (emojiPickerRef.current && !event.target.props?.theme) {
        if (showIcon) setShowIcon(false);
      }
    }
    document.addEventListener('mousedown', detectClickOutside);
    return () => {
      document.removeEventListener('mousedown', detectClickOutside);
    };
  });
  return (
    <div className="w-full relative h-full ">
      <div className="header__box sticky top-1/6 z-50 backdrop-blur-sm  flex items-center h-11 justify-between border-b border-b-purple-500 pb-3">
        <div className="flex items-center">
          <Avatar alt="Remy Sharp" src={avatar} />
          <span className="ml-5 text-xl">KidP2H Box</span>
        </div>
        <IoEllipsisVerticalOutline size={25} />
      </div>
      <div className="content-box-chat h-3/4 pt-3 overflow-scroll ">
        <MessageReceiver message="ssdjsajsjsjsjs" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
        <MessageReceiver message="sadsajdhsajdhasjkdhjasdhasjkdhaskjdhasjkdhjkshdjkahdjkashd" />
        <MessageSender message="toi nay an gi nhi" />
      </div>
      <div className="mt-3 relative w-full flex items-center ">
        <div ref={iconEmojiRef}>
          <div
            className="absolute bottom-14 right-0"
            style={{ zIndex: 99999 }}
            ref={emojiPickerRef}>
            {showIcon && (
              <div>
                <EmojiPicker onEmojiSelect={handleEmojiSelect} />
              </div>
            )}
          </div>
          <IoHappyOutline
            size={25}
            className="text-purple-500 absolute top-1/2 -translate-y-1/2 transform right-5 cursor-pointer"
          />
          <IoHappyOutline
            size={25}
            className="text-purple-500 blur-sm absolute top-1/2 -translate-y-1/2 transform right-5 cursor-pointer"
          />
        </div>
        <input
          name="search"
          placeholder="Message"
          id="username"
          className="placeholder:select-none pr-14 w-full neon text-md align-middle placeholder:text-sm placeholder:uppercase  h-12 bg-transparent rounded-lg focus: outline-0 pl-10 border-box border-purple-500 "
          onInput={handleInputMessage}
          autoComplete="off"
          value={message}
          spellCheck="false"
        />
        <IoChatboxEllipsesOutline
          color="white"
          className="absolute top-1/2 transform -translate-y-1/2 ml-3 "
          size={20}
        />
      </div>
    </div>
  );
};

export default Chat;
