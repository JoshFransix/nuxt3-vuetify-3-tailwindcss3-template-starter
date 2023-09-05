<template>
    <div>
        <div
            class="card tw-relative tw-w-[300px] tw-h-[200px] tw-bg-[#14203B] tw-rounded-xl tw-border-[0.1px] tw-border-[rgba(255,255,255,0.1)]">
            <div class="tw-overflow-hidden tw-m-6">
                <h1>{{ note.title.length <= 30 ? note.title : note.title.slice(0, 30) + '...' }}</h1>
                        <p class="tw-opacity-40 tw-w-full tw-text-sm tw-mt-6">{{ note.content.length <= 55 ? note.content :
                            note.content.slice(0, 55) + '...' }}</p>

                                <div
                                    class="bottom-content tw-flex tw-w-11/12 tw-justify-between tw-absolute tw-items-center tw-bottom-3">
                                    <h4 class="tw-text-brand-primary tw-text-xs ">{{ note.date }}</h4>
                                    <div class="action-btns">
                                        <v-btn @click="$emit('edit', note)" size="x-small" variant="text" icon>
                                            <v-icon small>mdi-pencil</v-icon>
                                        </v-btn>
                                        <v-btn @click="$emit('delete', note)" size="x-small" variant="text" icon>
                                            <v-icon small>mdi-delete</v-icon>
                                        </v-btn>
                                    </div>
                                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
const props = defineProps({
    note: {
        type: Object,
        default: {},
    },
})

const emit = defineEmits(['edit', 'delete'])

const { note } = props

</script>
<style lang="scss" scoped>
.card {
    transition: all .3s ease-in-out;

    &:hover .bottom-content .action-btns {
        opacity: 1;
        transition: all .3s ease-in-out;
    }

    .bottom-content {


        .action-btns {
            opacity: 0;
            transition: all .3s ease-in-out;
        }
    }
}
</style>