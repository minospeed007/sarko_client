// Decode JWT to get expiry (simplified example)
import jwtDecode from 'jwt-decode';

function checkTokenAndRefresh() {
  const token = getCookie('access_token'); // or fetch from local storage
  if (!token) return;

  const decoded = jwtDecode(token);
  const exp = decoded.exp * 1000; // JWT 'exp' is in seconds
  const now = Date.now();

  if (exp - now < 2 * 60 * 1000) { // less than 2 mins remaining
    axios.post('/api/auth/refresh-token', {}, { withCredentials: true })
      .then(() => console.log('Token refreshed'))
      .catch(err => console.error('Refresh failed', err));
  }
}
