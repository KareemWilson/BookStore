import http from '../http';

const getBooks = () => http.get('/');

const addBook = (data) => http.post('/', data);

const deleteBook = (id) => http.delete(`/${id}`, { item_id: id });

const bookServices = {
  getBooks,
  addBook,
  deleteBook,
};

export default bookServices;
