import React from "react";
import SelectEmoji from "../components/SelectEmoji";

export default function SelectEmojiContainer(props) {
  const date = props.location.state.date;
  return <SelectEmoji date={date} />;
}
