<template>
  <div class="flex flex-col py-5">
    <h2 class="font-bold text-[32px] text-center mb-2.5">{{ title }}</h2>
    <p class="text-center">{{ description }}</p>
    <div class="grid grid-cols-4 gap-5" v-if="cartType === 1" >
      <!-- <component :is="currentComponent" /> -->
      <PostCart title="افتخار آفرینی بانوان قزوین" date="١٨ بهمن ١٤٠٢"
        image-url="https://picsum.photos/seed/picsum/200/300" />
    </div>
    <div class="grid grid-cols-4 gap-5" v-else="cartType === 2" >
      <!-- <component :is="currentComponent" /> -->
      <PostCart2 title="افتخار آفرینی بانوان قزوین" description="amsdlmads" date="١٨ بهمن ١٤٠٢"
        image-url="https://picsum.photos/seed/picsum/200/300" />
    </div>

    <div class="flex justify-center mt-10">
      <q-btn class="h-fit px-10 py-2.5 mt-6 bg-primary rounded-[10px] justify-between" unelevated :to="buttonLink"
        text-color="#fff">
        <div class="text-center text-white font-bold">
          توضیحات بیشتر
        </div>
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import PostCart from '../../components/posts/postCart.vue'
import PostCart2 from '../../components/posts/postsCart2.vue'

export default defineComponent({
  name: 'Posts',

  props: {
    cartType: {
      type: Number as PropType<number>
    },
    title: {
      type: String as PropType<String>,
      required: true
    },
    description: {
      type: String as PropType<String>,
      required: true
    },
    buttonLink: {
      type: String as PropType<String>,
    },
  },
  components: {
    PostCart,
    PostCart2
  },
  computed: {
    currentComponent() {
      return this.cartType === 1 ? PostCart : PostCart2;
    },
  },
  data() {
    return {
    }
  },
});
</script>
