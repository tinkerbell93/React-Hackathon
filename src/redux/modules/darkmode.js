const DARK_MODE = 'DARK_MODE';
const LIGHT_MODE = 'LIGHT_MODE';

export function darkMode() {
  return ({
    type: DARK_MODE
  })
}

export function lightMode() {
  return ({
    type: LIGHT_MODE
  })
}

const InitialState = {
  mode: false,
}

export default function reducer(prevState = InitialState, action) {
  switch (action.type) {
    case DARK_MODE:
      return ({
        mode: true,
      })
    case LIGHT_MODE:
      return ({
        mode: false,
      })
    default:
      return prevState
  }
}