import React, { useEffect, useRef } from 'react';
import { Picker } from 'emoji-mart';
import data from '@emoji-mart/data';

/* eslint-disable */
const EmojiPicker = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new Picker({
      ...props,
      data,
      ref,
      theme: 'dark',
      native: true,
      emojiTooltip: true,
    });
  }, []);

  return <div ref={ref} />;
};

export default React.memo(EmojiPicker);
