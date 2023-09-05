<template>
    <div class="auth-landing">
        <div>
            <div class="left">
                <v-slide-x-transition leave-absolute hide-on-leave>
                    <div class="tw-w-8/12 tw-mx-auto tw-mt-10 md:tw-w-10/12" v-if="!signUp">
                        <AuthLogin @signup="toSignUp" />
                    </div>
                </v-slide-x-transition>
                <v-slide-x-transition leave-absolute hide-on-leave>
                    <div class="tw-w-8/12 tw-mx-auto tw-mt-10 md:tw-w-10/12" v-if="signUp">
                        <AuthSignUp @login="toLogin" />
                    </div>
                </v-slide-x-transition>
            </div>
        </div>

        <div
            class="right tw-select-none tw-pointer-events-none tw-bg-brand-primary tw-flex tw-justify-center tw-items-center tw-h-full">
            <!-- <landing-image class="tw-w-1/2 tw-h-1/2" /> -->
            <img v-if="signUp" src="@/assets/svg/saly-11.svg" alt="" class="tw-w-2/3 tw-h-2/3">
            <img v-else src="@/assets/svg/saly-10.svg" alt="" class="tw-w-2/3 tw-h-2/3">
        </div>
        <div @click="$router.push('/')" class="tw-absolute tw-top-9 tw-left-9">
            <v-btn color="transparent" icon>
                <v-icon color="primary">mdi-arrow-left</v-icon>
                <v-tooltip activator="parent" location="bottom">Back to home</v-tooltip>
            </v-btn>
        </div>
    </div>
</template>
<script setup>
const route = useRoute()
const router = useRouter()

definePageMeta({
    layout: "landing",
});

const signUp = useState('signUp', () => false)

onBeforeMount(() => {
    if ('login' in route.query || 'signin' in route.query) {
        signUp.value = false
    } else if ('signup' in route.query) {
        signUp.value = true
    }
})

const toLogin = () => {
    console.log('login')
    router.push('/auth?login')
    signUp.value = false
}
const toSignUp = () => {
    console.log('signup')
    router.push('/auth?signup')
    signUp.value = true
}
</script>
<style lang="scss" scoped>
.auth-landing {
    height: 100vh;
    display: flex;
    align-items: center;
    overflow-y: hidden;

    .left {
        width: 50vw;
        transition: all 0.3s ease-in-out;

        .logo {
            user-select: none;
            pointer-events: none;
        }

        @media screen and (max-width: 600px) {
            width: 100vw;

        }
    }

    .right {
        width: 50vw;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        transition: all 0.3s ease-in-out;

        @media screen and (max-width: 600px) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            display: none;
        }
    }
}
</style>