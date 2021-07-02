<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/register">Need an account?</router-link>
          </p>

          <ul v-if="loginErr" class="error-messages">
            <li>{{ loginErr }}</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </fieldset>
            <button
              @click="login()"
              type="button"
              class="btn btn-lg btn-primary pull-xs-right"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import users from "@/store/modules/users";

export default class Login extends Vue {
  email = "";
  password = "";
  loginErr = "";

  login() {
    users
      .login({
        email: this.email,
        password: this.password,
      })
      .then(() => this.$router.push("/"))
      .catch((error) => {
        this.loginErr = error.message;
      });
  }
}
</script>
