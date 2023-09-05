<template>
    <div>
        <div>
            <nav-bar />
        </div>
        <section id="home" class="tw-pt-32">
            <div class="tw-flex tw-text-white tw-flex-col tw-items-center tw-justify-center">
                <h1 class="tw-text-3xl tw-leading-[1.4rem] tw-text-center tw-font-bold ">Sculpting the future<span
                        class="tw-text-brand-primary"> Jotspace</span></h1>
                <p class="tw-my-7 fira">Write and organize your thoughts <span class="tw-text-brand-primary">.</span></p>
                <div>
                    <landing-image class="tw-w-[500px] tw-h-[500px]" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import LandingImage from '~/assets/svg/landing.vue'
import NavBar from '~/components/Nav/NavBar.vue'

definePageMeta({
    layout: "landing",
});

</script>