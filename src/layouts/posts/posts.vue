<template>
  <div class="flex flex-col py-5">
    <h2></h2>
    <p></p>
    <div class="grid grid-cols-4 gap-5" v-for="post in ">
      <PostCart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostCart from '../../components/posts/postCart.vue'

export default defineComponent({
  name: 'Posts',

  components:{
    PostCart
  },

  data() {
    return {
      data: [] as [],

    }
  },
});
</script>
