const LOCALSTORAGE_KEY = 'token';

export default class TokenService {
  static save(token) {
    localStorage.setItem(LOCALSTORAGE_KEY, token);
  }

  static get() {
    return localStorage.getItem(LOCALSTORAGE_KEY);
  }

  static clear() {
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}
