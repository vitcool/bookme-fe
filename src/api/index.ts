const API_URL = 'http://localhost:3000';

export const getRequest = (url: string) => {
  const URL = `${API_URL}${url}`;

  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

export const postRequest = (url: string, params: any) => {
  const URL = `${API_URL}${url}`;

  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(params),
  });
};
