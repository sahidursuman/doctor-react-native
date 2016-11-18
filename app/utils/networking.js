/**
 * @providesModule networking
 */

export function generatePostRequest(url, data, token) {
  const body = new FormData();
  for (var field in data) {
    body.append(field, data[field]);
  }
  const tokenString = token ? `, ${token}` : '';
  return new Request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/1mgdoctors.v2',
      'Authorization': `Token token="f77f883849e5bb2099849a055a6b608c0486a564598e048834291ec7e6fe${tokenString}"`
    },
    body,
    timeout: 5000
  });
}

export function generateGetRequest(url, { phone_number, phone_access_token }) {
  return new Request(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/1mgdoctors.v2',
      'Authorization': `Token token="f77f883849e5bb2099849a055a6b608c0486a564598e048834291ec7e6fe", app_name="onemgdoctors_website", phone_number="${phone_number}", phone_access_token="${phone_access_token}"`
    },
    timeout: 5000
  });
}