import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action,
} from "vuex-module-decorators";
import store from "@/store";
import { Article } from "../models";
import { clearToken, fetchGlobalFeed } from "../api";
type FeedType = "global" | "user";

@Module({
  namespaced: true,
  name: "articles",
  store,
  dynamic: true,
})
class ArticleModule extends VuexModule {
  feed: Article[] = [];

  @Mutation
  setFeed(articles: Article[]) {
    this.feed = articles;
  }
  @Action({ commit: "setFeed" })
  async loadFeed(feedType: FeedType) {
    try {
      clearToken();
      const res = await fetchGlobalFeed();
      return res.articles;
    } catch (error) {
      console.log(error);
    }
  }
}
export default getModule(ArticleModule);
