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

  window.location.href = newURL;
  // fetch(newURL, {
  //   method: 'GET',
  //   redirect: 'follow',
  //   mode: 'no-cors'
  // })
  //   .then(response => {
  //     response.blob();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   });
}
