<template>
  <q-layout dir="rtl" view="lHh Lpr lFf" class="">
    <q-header color="text-primary">
      <q-toolbar class="primary-box text-main-text justify-between bg-secondary">
        <div class="flex">
          <a href="#" class="pl-5 border-l border-[#3FD6C7]">ورود به سامانه دانشجو</a>
          <a href="#" class="px-5 border-l border-[#3FD6C7]">ورود به سامانه دانشجو</a>
          <a href="#" class="pr-5 ">ورود به سامانه دانشجو</a>
        </div>
        <div dir="ltr">
          <q-btn-dropdown color="white" text-color="#121212"  no-caps @click="">
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon left name="map" />
                <div class="text-center">
                  فارسی
                </div>
              </div>
            </template>

            <q-list>
              <q-item clickable v-close-popup @click="">
                <q-item-section avatar>
                  <q-avatar icon="folder" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="">
                <q-item-section avatar>
                  <q-avatar icon="assignment" color="secondary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Vacation</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <!-- <q-btn-dropdown v-model="showDropdown" :options="dropdownOptions" label="فارسی"
            :content-class="dropdownContentClass" class="bg-white" dropdown-icon="/" icon-right="asd">
          </q-btn-dropdown> -->
        </div>

      </q-toolbar>

      <q-toolbar class="primary-box justify-between">
        <div class="flex items-center">
          <div class="flex items-center ml-[50px]">
            <img src="/public/icons/header/ikiu-logo.svg" width="50" alt="دانشگاه بین المللی امام خمینی" class="ml-5">
            <img src="/public/icons/header/ikiu.svg" width="190" alt="دانشگاه بین المللی امام خمینی">
          </div>
          <div class="flex">
            <q-btn-dropdown class="h-fit" unelevated text-color="#121212">
              <template v-slot:label>
                <div class="row items-center no-wrap">
                  <q-icon left name="map" />
                  <div class="text-center px-2.5">
                    دسته بندی ها
                  </div>
                </div>
              </template>

              <q-list>
                <q-item clickable v-close-popup @click="">
                  <q-item-section avatar>
                    <q-avatar icon="folder" color="primary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="">
                  <q-item-section avatar>
                    <q-avatar icon="assignment" color="secondary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Vacation</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>

            <q-btn class="h-fit" unelevated to="#" text-color="#121212">
              <q-icon left name="map" />
              <div class="text-center px-2.5">
                آیین نامه ها و فرم ها
              </div>
            </q-btn>
            <q-btn class="h-fit" unelevated to="#" text-color="#121212">
              <q-icon left name="map" />
              <div class="text-center px-2.5">
                سوالات متداول
              </div>
            </q-btn>
            <q-btn class="h-fit" unelevated to="#" text-color="#121212">
              <q-icon left name="map" />
              <div class="text-center px-2.5">
                تماس با ما
              </div>
            </q-btn>


          </div>
        </div>

        <div class="flex items-center">
          <q-item-section>
            <p>۰۲۸-۳۳۳۳۳۳</p>
            <p>تماس با پشتیبانی</p>
          </q-item-section>
          <div class="pr-2.5">icon</div>
        </div>
      </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer">
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { QBtnDropdown, QBtn, QList } from 'quasar'



export default defineComponent({
  name: 'MainLayout',
  components: {
    QBtnDropdown,
    QBtn,
    QList,
  },
  data() {
    return {
      showDropdown: false,
      dropdownOptions: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
      dropdownContentClass: 'bg-white',
      dropdownMenuClass: 'bg-white text-[#121212]',
    }
  },
});
</script>

<style lang="scss">
.footer {
  position: static;
}
</style>
