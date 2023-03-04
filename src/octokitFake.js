export default class OctokitFake {
  constructor(data) {
    this.data = data;
  }

  repos = {
    listForUser: () => {
      // return Promise.resolve([{ language: 'php' }, { language: 'javascript' }]); // так как метод асинхронный
      return Promise.resolve({ data: this.data });
    },
  };
}
