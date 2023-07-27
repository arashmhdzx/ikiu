<template>
  <div class="flex flex-col header rounded-b-[100px]">
    <div class="flex flex-col items-center mt-10">
      <h1 class="text-center leading-[48px] text-[32px] font-bold">
        سامانه خدمات الکترونیک معاونت دانشجویی <br />
        دانشگاه بین المللی امام خمینی(ره)
      </h1>
      <p class="text-center leading-6 font-light mt-5">
        این سامانه با هدف یکپارچه سازی سامانه خوابگاه، سامانه تغذیه و سامانه کنترل تردد برای ارائه خدمات با کیفیت در
        جهت <br />
        رفاه حال دانشجویان به روزرسانی شده است. در این سامانه کلیه خدمات به صورت الکترونیکی انجام می شود. همچنین جهت
        بهره <br />
        وری بهتر از تهیه و توزیع غذا، سامانه تغذیه بر پایه پردازش چهره دانشجو راه اندازی شده است.
      </p>
    </div>
    <div class="flex mt-10 justify-center">
      <div class="flex flex-col">
        <div class="hero-image-r"></div>
        <div class="bg-primary mt-2.5 p-2.5 rounded-[20px]">
          <q-btn class="h-fit  border-primary rounded-[10px] font-bold" color="white" unelevated to="#"
            text-color="#121212">
            <div class="text-center px-2.5">
              ورود به سامانه دانشجو
            </div>
          </q-btn>
        </div>
      </div>
      <!-- center boxes -->
      <div class="flex mx-5">
        <div class="flex flex-col ml-2.5">
          <div class="flex justify-end mb-6">
            <q-btn class="h-fit w-fit bg-[#363636] rounded-[10px] px-9 py-5" unelevated to="#" text-color="white">
              <div class="text-center  rounded-[10px]">
                معرفی خوابگاه
              </div>
            </q-btn>
          </div>
          <q-box class="flex flex-col max-w-[320px] rounded-b-[20px] rounded-tl-[20px] text-white p-3 bg-primary">
            <h3 class="font-bold text-center ">جدیدترین اطلاعیه ها - شماره یک</h3>
            <p class=" mt-[30px]">
              این سامانه با هدف یکپارچه سازی سامانه خوابگاه، سامانه تغذیه برای ارائه خدمات با کیفیت در جهت رفاه حال
              دانشجویان به روزرسانی شده است. در این سامانه کلیه خدمات به صورت الکترونیکی انجام می شود. همچنین جهت بهره وری
              بهتر از تهیه و توزیع غذا، سامانه تغذیه بر پایه پردازش چهره دانشجو راه اندازی شده است.
            </p>
            <q-btn class="h-fit p-2.5 mt-6 bg-[#DBDBDB] rounded-[10px] justify-between" unelevated to="#" text-color="#121212">
              <div class="text-center text-main-text font-bold">
                توضیحات بیشتر
              </div>
              <q-icon left name="map" />
            </q-btn>
          </q-box>
        </div>
        <div class="flex flex-col ml-2.5">
          <div class="flex justify-start mb-6">
            <q-btn class="h-fit w-fit bg-[#DBDBDB] rounded-[10px] px-9 py-5" unelevated to="#" text-color="#363636">
              <div class="text-center  rounded-[10px]">
                معرفی خوابگاه
              </div>
            </q-btn>
          </div>
          <q-box class="flex flex-col max-w-[320px] rounded-b-[20px] rounded-tr-[20px] text-white p-3 bg-primary">
            <h3 class="font-bold text-center ">جدیدترین اطلاعیه ها - شماره یک</h3>
            <p class=" mt-[30px]">
              این سامانه با هدف یکپارچه سازی سامانه خوابگاه، سامانه تغذیه برای ارائه خدمات با کیفیت در جهت رفاه حال
              دانشجویان به روزرسانی شده است. در این سامانه کلیه خدمات به صورت الکترونیکی انجام می شود. همچنین جهت بهره وری
              بهتر از تهیه و توزیع غذا، سامانه تغذیه بر پایه پردازش چهره دانشجو راه اندازی شده است.
            </p>
            <q-btn class="h-fit p-2.5 mt-6 bg-[#DBDBDB] rounded-[10px] justify-between" unelevated to="#" text-color="#121212">
              <q-icon right name="map" />
              <div class="text-center text-main-text font-bold">
                توضیحات بیشتر
              </div>
            </q-btn>
          </q-box>
        </div>

      </div>
      <!-- left box -->
      <div class="flex flex-col">
        <div class="hero-image-l"></div>
        <div class="bg-primary mt-2.5 p-2.5 rounded-[20px]">
          <q-btn class="h-fit  border-primary rounded-[10px] font-bold" color="white" unelevated to="#"
            text-color="#121212">
            <div class="text-center px-2.5">
              ورود به سامانه والدین
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hero',
  data() {
    return {

    }
  },
});
</script>
