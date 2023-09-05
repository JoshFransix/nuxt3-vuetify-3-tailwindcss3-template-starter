<template>
    <div>
        <v-navigation-drawer v-model="drawer" fixed temporary width="70%" class="px-4">
            <div class="tw-flex tw-justify-between tw-items-center">
                <div class="logo tw-font-bold tw-text-xl">
                    <h1>Jot<span class="tw-text-brand-primary">Loom</span><span></span></h1>
                </div>
                <div>
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/">Features</nuxt-link>
                    <nuxt-link to="/">About Us</nuxt-link>
                    <nuxt-link to="/">Contact Us</nuxt-link>
                </div>
                <div>
                    <nuxt-link to="/auth?login">
                        <div class="tw-text-brand-primary">
                            <h1>Log In</h1>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/auth?signup">
                        <div class="tw-text-white tw-px-4 tw-py-2 tw-rounded-md tw-bg-brand-primary">
                            <h1>Sign Up</h1>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </v-navigation-drawer>
        <v-app-bar elevate-on-scroll elevation="0" color="secondary" app height="85">
            <div class="tw-w-10/12 tw-mx-auto tw-flex tw-justify-between tw-items-center">
                <nuxt-link to="/">
                    <div class="logo tw-font-bold tw-text-xl">
                        <h1>Jot<span class="tw-text-brand-primary">Loom</span><span></span></h1>
                    </div>
                </nuxt-link>
                <div class="nav-links">
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/">Features</nuxt-link>
                    <nuxt-link to="/">About Us</nuxt-link>
                    <nuxt-link to="/">Contact Us</nuxt-link>
                </div>
                <div class="tw-flex tw-items-center">
                    <nuxt-link to="/auth?login">
                        <div class="tw-text-brand-primary tw-px-4">
                            <h1>Log In</h1>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/auth?signup">
                        <div class="tw-text-white tw-px-4 tw-py-2 tw-rounded-full tw-bg-brand-primary">
                            <h1>Sign Up</h1>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </v-app-bar>
        <h1>My name is David</h1>
    </div>
</template>

<script>
export default {

    data() {
        return {
            drawer: false
        }
    }
}
</script>

<style lang="scss">
.nav-links a {
    margin: 0 1rem;
}
</style>