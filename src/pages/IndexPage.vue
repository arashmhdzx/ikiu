<template>
  <q-page>
    <Hero />
    <section class="px-[50px]">
      <Ministrations />
    </section>
  </q-page>
</template>

<script lang="ts">
import Hero from 'layouts/hero/Hero.vue';
import Ministrations from 'layouts/ministrations/ministrations.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { Hero, Ministrations },
});
</script>
