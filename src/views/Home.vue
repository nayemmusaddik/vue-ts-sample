<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a v-if="username" class="nav-link disabled" href=""
                  >Your Feed</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>
          <arcticle-preview
            v-for="article in feed"
            :article="article"
            :key="article.slug"
          ></arcticle-preview>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a href="" class="tag-pill tag-default">programming</a>
              <a href="" class="tag-pill tag-default">javascript</a>
              <a href="" class="tag-pill tag-default">emberjs</a>
              <a href="" class="tag-pill tag-default">angularjs</a>
              <a href="" class="tag-pill tag-default">react</a>
              <a href="" class="tag-pill tag-default">mean</a>
              <a href="" class="tag-pill tag-default">node</a>
              <a href="" class="tag-pill tag-default">rails</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import ArcticlePreview from "@/components/article/ArticlePreview.vue";
import { Article } from "@/store/models";
import articles from "@/store/modules/articles";
import users from "@/store/modules/users";

@Options({
  components: {
    ArcticlePreview,
  },
})
export default class Home extends Vue {
  feed: Article[] = [];
  get username() {
    return users.username;
  }
  created() {
    articles.loadFeed("global").then(() => {
      this.feed = articles.feed;
    });
  }
}
</script>
