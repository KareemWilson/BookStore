import axios from 'axios';

export default axios.create({
  baseURL:
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/T4OzABrRKCy1XBnIRlpr/books',
  headers: {
    'Content-type': 'application/json',
  },
});
