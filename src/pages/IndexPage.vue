<template>
  <q-page>
    <Hero />
    <section class="px-[50px] bg-[#ECF2FB]">
      <Ministrations />
      <Posts title="گزارش و خبر " :cart-type="1" description="گزارش و خبرهای جدید و به روز را می توانید از این بخش مشاهده نمایید."
        button-link="#" />
      <Countries />
      <Posts title="اطلاعیه ها" :cart-type="2" description="جدیدترین اطلاعیه های دانشگاه را می توانید مشاهده نمایید."
        button-link="#" />
      <QA title="سوالات متداول" description="موضوع موردنظرتان را انتخاب کنید." />
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Hero from 'layouts/hero/Hero.vue';
import Ministrations from 'layouts/ministrations/ministrations.vue';
import Posts from 'src/layouts/posts/posts.vue';
import Countries from 'layouts/countries/countries.vue';
import QA from 'layouts/QA/QA.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { Hero, Ministrations, Posts, Countries ,QA },
});
</script>
