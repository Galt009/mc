<template>
  <div id="login">
    <!-- 这是登陆页面 -->
    <div class="a">
      <input placeholder="请输入用户名" class="k" />
      <br />
      <input type="password" name="pwd" placeholder="请输入密码" class="k" />
      <br />
      <router-link to="">
        <button class="btn" :class="{ btn1: more }" @click="touch()">
          <span>{{ msg1 }}</span>
        </button>
      </router-link>
      <br />
      <router-link to="">
        <button class="btn" :class="{ btn1: !more }" @click="touch()">
          <span>{{ msg2 }}</span>
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
// import dl from "../../images/login.jpg";
export default {
  name: "login",
  data() {
    return {
      msg1: "登录",
      msg2: "注册",
      more: true
    };
  },
  methods: {
    touch() {
      this.more = !this.more;
    }
  }
};
</script>
<style lang="scss" scoped>
#login {
  // padding: 0;
  // width: 1920px;
  // height: 1080px;
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("../../images/login.jpg") center center no-repeat;
}
.a {
  width: 500px;
  height: 500px;
  position: absolute;
  // top: 300px;
  // right: 50px;
  margin: auto;
  top: 240px;
  left: 0;
  bottom: 0;
  right: 0;
  // background-color: red;
  text-align: center;
}
.k {
  background-color: #dcdfe6;
  border-radius: 17px;
  border: 1px solid #dcdfe6;
  height: 40px;
  width: 320px;
  margin-bottom: 20px;
  text-align: center;
  box-sizing: border-box;
  outline: none;
}
.btn {
  border-radius: 15px;
  border: 1px solid #dcdfe6;
  height: 30px;
  width: 70px;
  box-sizing: border-box;
  color: rgb(97, 44, 44);
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
}
.btn1 {
  background-color: rgb(64, 201, 155);
  border: 1px solid rgb(64, 201, 155);
}
</style>
