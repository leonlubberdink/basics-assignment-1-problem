const app = Vue.createApp({
  data() {
    return {
      myName: "Leon Lubberdink",
      myAge: 41,
      imgUrl:
        "https://img.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg?w=1380&t=st=1715763235~exp=1715763835~hmac=bd10cf324305e24c39acbbb8b4f0fc0cde538685e3257a363a684feaa8d7e95e",
    };
  },
  methods: {
    random() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
