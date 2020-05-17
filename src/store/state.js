export const state = {
  nav: {
    drawer: false,
    loginDialog: false,
  },
  user: {
    id: 1,
  },
  images: [],
  photographers: [],
  tags: [],
  selectedTags: null,
  selectedPhotographers: null,
  snackbar: {
    status: false,
    value: 'Felmeddelandetext',
    color: 'green lighten-2',
    timeout: 5000,
  },
};