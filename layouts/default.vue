<template>
    <v-app class="body">
        <!-- <side-nav @add-new="addNewNote" :show-side-nav="sideNavOpened" @drawer="updateDrawer" class="tw-z-50" /> -->
        <div
            class="tw-fixed tw-w-full tw-z-30 tw-bg-brand-light px-3 tw-hidden print:tw-transform print:tw-translate-y-[-290px] md:tw-block">
            <div class="tw-flex tw-justify-between tw-items-center">
                <!-- <prime-logo-two :width="'100'" /> -->
                <div class="logo tw-font-bold tw-text-xl">
                    <h1>Jot<span class="tw-text-brand-primary">Loom</span><span></span></h1>
                </div>
                <v-btn icon @click="sideNavOpened = !sideNavOpened">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </div>
        </div>
        <div class="tw-pl-[14.5rem] tw-pr-8 tw- tw-mt-8">
            <slot />
        </div>
    </v-app>
</template>
<script setup>
import SideNav from '~/components/Nav/SideNav.vue'

let sideNavOpened = useState('sideNavOpened', () => false)
let addNote = useState(() => false)

const updateDrawer = (drawer) => {
    sideNavOpened = drawer
}
const showSideNav = (drawer) => {
    sideNavOpened = drawer
}

const addNewNote = () => {
    addNote.value = true
    console.log(addNote.value)
}

</script>
<style lang="scss">
.body {
    background: #0F172A !important;
    position: relative;
}


.v-overlay {
    .v-overlay__scrim {
        opacity: 1 !important;
        background: rgba(0, 15, 53, 0.1) !important;
        mix-blend-mode: normal;
        border-color: rgba(0, 15, 53, 0.1) !important;
    }

    &.v-overlay--active .v-overlay__scrim {
        backdrop-filter: blur(2px);
    }
}
</style>
  