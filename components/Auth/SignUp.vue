<template>
    <div>
        <div v-if="!isLoading" class="tw-h-full tw-w-full">
            <v-form v-model="valid" class="sign-up-form" ref="form" @submit.prevent="processLogin">
                <div class="tw-text-center tw-mb-12">
                    <h3 class="tw-text-white tw-mb-6 tw-text-2xl tw-font-semibold">
                        Hello there,
                    </h3>
                    <span class="tw-text-[#ddd]">Please enter your details to create an account.</span>
                </div>

                <v-text-field label="Full Name" :rules="nameRules" v-model="fullName" base-color="white" rounded
                    bg-color="rgba(0,0,0,0.01)" color="primary" required variant="outlined" hide-details="auto"
                    class="mb-6"></v-text-field>

                <v-text-field :rules="emailRules" rounded clearable bg-color="rgba(0,0,0,0.01)" base-color="white"
                    variant="outlined" color="primary" label="Email" placeholder="name@company.com" type="email"
                    v-model="email" required hide-details="auto" class="mb-6"></v-text-field>

                <v-text-field :rules="passwordRules" rounded variant="outlined" bg-color="rgba(0,0,0,0.01)" color="primary"
                    label="Password" placeholder="*******" :type="showPassword ? 'text' : 'password'"
                    :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" v-model="password" required
                    hide-details="auto" class="mb-6" @click:append-inner="showPassword = !showPassword"></v-text-field>

                <div class="tw-flex tw-w-full tw-text-white tw-text-sm tw-justify-between tw-items-center">
                    <v-checkbox v-model="keepMeLoggedIn" :ripple="false" required>
                        <template #label>
                            <span class="rememberMe-text">Remember me</span>
                        </template>
                    </v-checkbox>

                    <!-- <div>
                        <span @click="toForgotPassword" class="tw-text-brand-primary tw-cursor-pointer">Forgot
                            password?</span>
                    </div> -->
                </div>

                <v-btn :disabled="!valid" color="primary" type="submit" width="121" height="50" block
                    class="disabled:tw-bg-slate-300 tw-text-white tw-rounded-lg tw-py-8 tw-mt-6 tw-font-bold tw-transition tw-duration-200 hover:tw-bg-gray-300"
                    :loading="isLoading"><span>Create Account</span></v-btn>
            </v-form>
            <h2 class="tw-text-sm tw-text-[#a1a1a1] tw-mt-4">
                Already have an account,
                <span @click="$emit('login')" class="tw-text-brand-primary tw-cursor-pointer">Login?</span>
            </h2>
        </div>
    </div>
</template>
<script setup>
const email = useState('email', () => '')
const fullName = useState('fullName', '')
const password = useState('password', '')
const isLoading = useState('isLoading', () => false)
const valid = useState('valid', () => false)
const keepMeLoggedIn = useState('keepMeLoggedIn', () => false)
const showPassword = useState('showPassword', () => false)

const processLogin = () => {
    console.log(email.value)

}

const nameRules = [

    value => {
        if (value) return true

        return 'Full name is required.'
    },
    value => {
        if (value?.length >= 5) return true

        return 'Full name must be greater than 5 characters.'
    },
]

const passwordRules = [
    value => {
        if (value) return true
        return 'Password is required.'
    },
    value => {
        if (value?.length >= 5) return true
        return 'Password must be more than 4 characters.'
    },
]

const emailRules = [
    value => {
        if (value) return true
        return 'E-mail is required.'
    },
    value => {
        if (/.+@.+\..+/.test(value)) return true
        return 'E-mail must be valid.'
    },
]


</script>