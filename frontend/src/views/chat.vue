<template>
  <div class="app">
    <input type="text" v-model="message" placeholder="pesan" />
    <button @click="send">SEND</button>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    send() {
      let socket = io("http://localhost:5000");
      socket.on("username", function (data) {
        console.log(data);
      });
      socket.on("chat", function (data) {
        console.log(data);
      });
      socket.emit("chat", {
        pesan: this.message,
        user: "pasien",
      });
    },
  },
  created() {
    let socket = io("http://localhost:5000");
    socket.on("connect", function () {
      console.log("connect");
    });
  },
};
</script>

<style>
</style>