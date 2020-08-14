import React from "react";
import AddSchedule from "../components/AddSchedule";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addScheduleSagaActionCreator } from "../redux/modules/schedule";

export default function AddScheduleContainer(props) {
  const date = props.location.state.date;
  const emoji = props.location.state.emoji;
  const dispatch = useDispatch();
  const addSchedule = useCallback(
    (payload) => {
      dispatch(addScheduleSagaActionCreator(payload));
    },
    [dispatch]
  );
  return <AddSchedule addSchedule={addSchedule} date={date} emoji={emoji} />;
}
