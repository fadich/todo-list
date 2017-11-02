let request = axios.create({
  baseURL: 'http://org.loc/todo/',
  timeout: 2000,
  headers: {'laravel_session': ''},
});

let todoList = {
  items: [],
  count: {
    active: 0,
    postponed: 0,
    done: 0,
    deleted: 0,
  },
  apiUrl: "http://org.loc/todo",

  getItems () {
    request.post('auth/sign-up' + window.location.search, fd)
      .then(function (response) {
        window.location.replace(response.data['land-to']);
      })
      .catch(function (error) {
        let errors = error.response.data.errors;

        for (let key in errors) {
          if (errors.hasOwnProperty(key)) {
            formErrors[key] = errors[key].pop();
          }
        }
      });
  }
}
