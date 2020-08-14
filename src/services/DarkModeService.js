import {
  lightMode,
  darkMode
} from "../redux/modules/darkmode";

export default class DarkModeService {
  static modeChange(mode, dispatch) {
    if (mode) {
      dispatch(lightMode());
    } else {
      dispatch(darkMode());
    }
  }
}