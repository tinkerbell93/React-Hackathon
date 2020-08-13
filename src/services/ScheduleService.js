import axios from 'axios';

const SCHEDULE_API_URL = 'https://api.marktube.tv/v1/book';
export default class ScheduleService {
  static async getSchedule(token) {
    const response = await axios.get(SCHEDULE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
  static async addSchedule(
    token,
    schedule,
  ) {
    const response = await axios.post(SCHEDULE_API_URL, schedule, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
  static async editSchedule(
    token,
    scheduleId,
    schedule,
  ) {
    const response = await axios.patch(
      `${SCHEDULE_API_URL}/${scheduleId}`,
      schedule, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  }
  static async deleteSchedule(token, scheduleId) {
    await axios.delete(`${SCHEDULE_API_URL}/${scheduleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}