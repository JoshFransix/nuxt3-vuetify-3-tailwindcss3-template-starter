<template>
    <div class="">
        <div class="print:tw-transform print:tw-translate-x-[-280px] tw-z-50">
            <v-navigation-drawer width="200" mobile-breakpoint="767" color="primaryLight" v-model="drawer">
                <div class="tw-pt-10 tw-flex tw-h-full tw-flex-col">
                    <div class="tw-mb-20 tw-text-center logo tw-font-bold tw-text-xl">
                        <h1>Jot<span class="tw-text-brand-primary">Loom</span><span></span></h1>
                    </div>

                    <div class="tw-mt-[5rem]">
                        <v-list color="primary" nav>
                            <v-list-item exact link to="/dashboard"
                                :active="$route.path.toLowerCase().includes('dashboard')" prepend-icon="mdi-home"
                                title="My Dashboard" value="myfiles"></v-list-item>
                            <v-list-item @click="$emit('add-new')" :active="$route.path.toLowerCase().includes('add-new')"
                                prepend-icon="mdi-plus" title="Add new note" value="shared"></v-list-item>
                            <!-- <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item> -->
                        </v-list>
                    </div>

                    <div class="tw-absolute tw-w-full tw-bottom-4 tw-mx-auto tw-flex tw-justify-center">
                        <v-btn color="primary" icon>
                            <v-icon>mdi-logout</v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-navigation-drawer>
        </div>
    </div>
</template>
<script setup>
const drawer = useState('drawer', () => true)
const emit = defineEmits(['drawer', 'add-new'])

const props = defineProps({
    showSideNav: {
        type: Boolean,
        default: false,
    },
})

const { showSideNav } = props

watch(showSideNav, (bool, showSideNav) => {
    drawer.value = bool
})

watch(drawer, (d, drawerValue) => {
    emit('drawer', drawer.value)
})



// watch: {
//     showSideNav(bool) {
//       drawer = bool
//     },
//     drawer(d) {
//       this.$emit('drawer', this.drawer)
//     },
//   },
</script>
<style lang="scss" scoped>
:deep {


    .ripple-bg {
        color: rgb(52, 53, 73) !important;
    }

    .ripple-border-radius {
        border-radius: 8px;
    }
}

.main-nav-links {
    padding-left: 0;

    .v-list-item {
        cursor: pointer;
        background-color: red;



        &::before {
            transition: all 0.3s ease-in-out;
            background-color: red;
            border-radius: 8px;
        }

        &:hover::before,
        &:focus::before {
            opacity: 0.25;
            background-color: red;
        }

        &::after {
            transition: none;
            background-color: red;
        }

        .v-list-item__title {
            transition: all 0.2s ease-in-out;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            background-color: transparent;
            opacity: 0;

            &:hover:not(.red--text) {
                transition: all 0.2s ease-in-out;
                opacity: 0.7;
            }
        }

        &.v-list-item--active {
            border-radius: 8px;
            background-color: transparent;
            border-left: 8px solid #4b5563;
            color: #fff;

            svg {

                path,
                circle {
                    fill: #7aacf7 !important;
                }
            }

            .v-list-item__title {
                opacity: 0;
                color: red !important;
                background-color: transparent;
            }
        }
    }
}
</style>
