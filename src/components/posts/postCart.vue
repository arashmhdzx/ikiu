<template>
  <div class="flex flex-col p-2.5 post-cart-shadow bg-white rounded-[10px]">
    <div class="flex text-[#29BFB1]">
      {{ date }}
    </div>
    <img :src="imageUrl" class=" rounded-[5px] my-2.5 h-[150px]" width="300" :alt="title">
    <p>{{ title }}</p>
    <a  class="text-primary text-end">
      اطلاعات بیشتر
    </a>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  name: 'PostCart',
  props: {
    title:  {
      type: String as any,
      required: true
    },
    date:  {
      type: String as PropType<String>,
      required: true
    },
    imageUrl:  {
      type: String as any,
      required: true
    },
  },
  data() {
  return {

  }
},
});

</script>
