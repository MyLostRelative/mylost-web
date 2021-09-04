export let API_URL = 'https://mylost-api.herokuapp.com';

class Path {
  api(method: string): string {
    return API_URL + method;
  }
}

export const urlHelper: Path = new Path();
