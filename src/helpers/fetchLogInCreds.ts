export interface IParams {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  response_type: string;
  grant_type?: string;
  state?: string;
  [key: string]: string;
}

export default function fetchLogInCreds(url: string, params: IParams): void {
  let newURL: any = new URL(url);

  Object.keys(params).forEach(key => {
    newURL.searchParams.append(key, params[key]);
  });

  fetch(newURL, {
    method: 'GET',
    redirect: 'follow'
  }).then(response => {
    console.log(response);
    console.log(response.headers.get('Date'));
  });
}
