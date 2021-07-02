import {
  VuexModule,
  Module,
  getModule,
  MutationAction,
} from "vuex-module-decorators";
import store from "@/store";
import { Login, Profile, User, UserRequest } from "@/store/models";
import {
  fetchProfile,
  fetchUser,
  login,
  setToken,
  updateUser,
} from "@/store/api";

@Module({
  namespaced: true,
  name: "users",
  store,
  dynamic: true,
})
class UserModule extends VuexModule {
  user: User | null = null;
  profile: Profile | null = null;

  get username() {
    return (this.user && this.user.username) || null;
  }

  @MutationAction
  async login(req: Login) {
    try {
      const res = await login(req);
      setToken(res.user.token);
      return res;
    } catch (error) {
      console.error(error);
      throw new Error("Invaid Username or Password!");
    }
  }
  @MutationAction
  async loadProfile(username: string) {
    try {
      return await fetchProfile(username);
    } catch (error) {
      console.error(error);
    }
  }
  @MutationAction
  async loadUser() {
    try {
      return await fetchUser();
    } catch (error) {
      console.error(error);
    }
  }

  @MutationAction
  async updateUser(req: UserRequest) {
    try {
      return await updateUser(req);
    } catch (error) {
      console.log(error);
    }
  }
}

export default getModule(UserModule);
