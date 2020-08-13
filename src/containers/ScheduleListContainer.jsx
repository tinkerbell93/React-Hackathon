import React from 'react';
import ScheduleList from '../components/ScheduleList'
import { useSelector, useDispatch } from 'react-redux';
import { getScheduleSagaActionCreator } from '../redux/modules/schedule';


export default function BookListContainer({ token }) {
  const schedule = useSelector(state => state.schedule.schedule);
  const loading = useSelector(state => state.schedule.loading);
  const error = useSelector(state => state.schedule.error);
  const dispatch = useDispatch();
  const getSchedule = React.useCallback(() => {
    dispatch(getScheduleSagaActionCreator());
  }, [dispatch])

  return (
    <ScheduleList schedule={schedule} loading={loading} error={error} getSchedule={getSchedule} />
  )

}