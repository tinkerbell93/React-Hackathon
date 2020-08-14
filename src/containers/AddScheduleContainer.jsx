import React from "react";
import AddSchedule from "../components/AddSchedule";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addScheduleSagaActionCreator } from "../redux/modules/schedule";

export default function AddScheduleContainer() {
  const dispatch = useDispatch();
  const addSchedule = useCallback(
    (payload) => {
      dispatch(addScheduleSagaActionCreator(payload));
    },
    [dispatch]
  );
  return <AddSchedule addSchedule={addSchedule} />;
}
