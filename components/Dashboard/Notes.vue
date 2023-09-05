<template>
    <div class="tw-relative tw-mt-9 tw-grid tw-grid-cols-4 tw-gap-4 xl:tw-grid-cols-3">
        <Note @click="() => console.log(allNotes)" v-for="note in allNotes" :key="note.title" @edit="editNote"
            @delete="openDelete" :note="note" />
        <!-- <template >
            <v-fade-transition>
            </v-fade-transition>
        </template> -->

        <!-- Edit note dialog -->
        <v-dialog persistent v-model="editNoteDialog" max-width="500px" scrollable>
            <div class="tw-rounded-xl tw-text-white tw-w-full tw-bg-slate-700 tw-mx-auto tw-py-12 tw-px-6 sm:tw-text-sm">
                <h1 class="fira tw-font-semibold tw-text-center tw-text-xl sm:tw-text-sm">
                    Edit Note
                </h1>
                <div class="tw-text-center tw-mt-4">
                    <v-form>
                        <v-text-field type="text" outlined label="Title" v-model="updatedNote.title"></v-text-field>
                        <v-textarea persistent-hint hint="click on the mic icon to start/stop recording"
                            :append-inner-icon="isRecording ? 'mdi-stop-circle' : 'mdi-microphone'"
                            @click:append-inner="toggleRecord" rows="8" outlined label="Note" v-model="updatedNote.content">
                        </v-textarea>
                        <div class="tw-mt-4">
                            <!-- <v-btn rounded class="mr-3" color="primaryLight" @click="editNoteDialog = false"
                                depressed>Close</v-btn> -->
                            <v-btn @click="saveNote" rounded color="primary" depressed>Save</v-btn>
                        </div>
                    </v-form>
                </div>
            </div>
        </v-dialog>

        <!-- Delete note dialog -->
        <v-dialog persistent v-model="deleteNoteDialog" max-width="500px" scrollable>
            <div class="tw-rounded-xl tw-text-white tw-w-full tw-bg-slate-700 tw-mx-auto tw-py-12 tw-px-6 sm:tw-text-sm">
                <h1 class="fira tw-font-semibold tw-text-center tw-text-xl sm:tw-text-sm">
                    Delete Note
                </h1>
                <div class="tw-text-center tw-mt-4">
                    <h3 class="tw-text-sm">Are you sure you want to delete this note?</h3>
                    <div class="tw-mt-8">
                        <v-btn rounded class="mr-3" color="primaryLight" @click="deleteNoteDialog = false" depressed>Go
                            back</v-btn>
                        <v-btn @click="deleteNote" rounded color="primary" depressed>Continue</v-btn>
                    </div>
                </div>
            </div>
        </v-dialog>
    </div>
</template>
<script setup>
import Note from './Note.vue'

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition

let editNoteDialog = useState(() => false)
let deleteNoteDialog = useState(() => false)
let updatedNote = ref({})

const isRecording = ref(false)
const sr = new Recognition()


const emit = defineEmits(['save-note', 'delete-note'])

const props = defineProps({
    addNew: {
        type: Boolean,
        default: false
    },
    allNotes: {
        type: Array,
        default: []
    }
})

const { addNew, allNotes } = props

const startRecording = () => {
    // this.isRecording = !this.isRecording
    sr.continuous = true
    sr.interimResults = true

    sr.onstart = () => {
        console.log('SR started')
        isRecording.value = true
    }

    sr.onend = () => {
        console.log('SR stopped')
        isRecording.value = false
    }

    sr.onresult = (evt) => {
        const words = Array.from(evt.results)
            .map((item) => item[0])
            .map((item) => item.transcript).join('')

        updatedNote.content = words
    }
}

const toggleRecord = () => {
    startRecording()
    isRecording.value ? sr.stop() : sr.start()
}
const editNote = (note) => {
    // console.log(note)
    updatedNote = note
    editNoteDialog.value = true
}

const saveNote = () => {
    // console.log(updatedNote)
    sr.stop()
    emit('save-note', updatedNote)
    editNoteDialog.value = false;
}

const openDelete = (note) => {
    updatedNote = note
    deleteNoteDialog.value = true;
}

const deleteNote = () => {
    emit('delete-note', updatedNote)
    deleteNoteDialog.value = false;
}

// watch(addNew, (bool, newValue) => {
//     console.log(newValue)
//     console.log(addNew)
// })

</script>