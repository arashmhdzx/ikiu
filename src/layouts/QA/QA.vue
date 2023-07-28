<template>
  <div class="flex flex-col py-5">
    <h2 class="font-bold text-[32px] text-center mb-2.5">{{ title }}</h2>
    <p class="text-center">{{ description }}</p>
    <div class="grid grid-cols-2 gap-5 mt-10">
      <q-expansion-item expand-separator  class="bg-white post-cart-shadow rounded-[10px] p-4" label="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ">
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
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


export default defineComponent({
  name: 'QA',

  props: {

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
  },

  data() {
    return {
    }
  },
});
</script>
