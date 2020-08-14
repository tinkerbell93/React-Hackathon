import React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { editScheduleSagaActionCreator } from "../redux/modules/schedule";
import EditSchedule from "../components/EditSchedule";

export default function EditScheduleContainer(props) {
  const schedule = props.location.state.schedule;
  const emoji = props.location.state.emoji;
  const dispatch = useDispatch();

  const editSchedule = useCallback(
    (scheduleId, payload) => {
      dispatch(editScheduleSagaActionCreator(scheduleId, payload));
    },
    [dispatch]
  );
  return (
    <EditSchedule
      editSchedule={editSchedule}
      schedule={schedule}
      emoji={emoji}
    />
  );
}
