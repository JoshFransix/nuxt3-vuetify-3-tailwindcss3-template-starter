<template>
    <div class=" tw-text-white tw-relative tw-overflow-x-hidden">
        <side-nav @add-new="addNewDialog = true" class="tw-z-50" />
        <div class="tw-flex tw-items-center tw-justify-between tw-w-full">
            <div class="left">
                <h1 class="tw-text-xl">Dashboard</h1>
            </div>

            <div class="right tw-items-center tw-flex tw-w-1/2">
                <v-text-field @keyup="logItem" v-model="search" clearable rounded bg-color="primaryLight" density="compact"
                    variant="solo" label="Search Notes" prepend-inner-icon="mdi-magnify" single-line
                    hide-details></v-text-field>
            </div>

            <div>
                <v-menu :close-on-content-click="false" transition="slide-x-reverse-transition">
                    <template v-slot:activator="{ props }">
                        <div v-bind="props" class="tw-cursor-pointer tw-rounded-full tw-p-1">
                            <v-avatar color="primary">J</v-avatar>
                            <!-- <v-icon>mdi-chevron-down</v-icon> -->
                        </div>
                    </template>
                    <v-card min-width="300px" ripple color="#14203B" border="primary" rounded>
                        <div class="tw-px-4 tw-py-3">
                            <h1>Joshua Fransix</h1>
                            <h3 class="tw-text-sm tw-mt-2">joshfransix@gmail.com</h3>
                        </div>
                        <v-divider></v-divider>
                        <v-list bg-color="transparent">
                            <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout"></v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </div>
        </div>
        <v-divider class="mt-4"></v-divider>
        <div class="tw-mt-9">
            <h1 class="tw-text-2xl">Hello, <span class="tw-text-brand-primary">Joshua!</span></h1>
            <h3 class="tw-opacity-50 tw-text-sm tw-mt-2">All your notes are here, in one place</h3>
        </div>

        <!-- Notes -->
        <div class="">
            <Notes @save-note="saveNote" @delete-note="deleteNote" :allNotes="filteredNotes()" />
        </div>

        <!-- Delete note dialog -->
        <v-dialog persistent v-model="addNewDialog" max-width="500px" scrollable>
            <div class="tw-rounded-xl tw-text-white tw-w-full tw-bg-slate-700 tw-mx-auto tw-py-12 tw-px-6 sm:tw-text-sm">
                <h1 class="fira tw-font-semibold tw-text-center tw-text-xl sm:tw-text-sm">
                    Add new note
                </h1>
                <div class="tw-text-center tw-mt-4">
                    <v-form>
                        <v-text-field type="text" outlined label="Title" v-model="newNote.title"></v-text-field>
                        <v-textarea :append-inner-icon="isRecording ? 'mdi-stop-circle' : 'mdi-microphone'"
                            @click:append-inner="toggleRecord" rows="8" outlined label="Note" v-model="newNote.content">
                        </v-textarea>
                        <div class="tw-mt-4">
                            <v-btn rounded class="mr-3" color="primaryLight" @click="addNewDialog = false"
                                depressed>Close</v-btn>
                            <v-btn @click="saveNewNote" rounded color="primary" depressed>Submit</v-btn>
                        </div>
                    </v-form>
                </div>
            </div>
        </v-dialog>

        <v-snackbar v-model="snackbar" location="top" position="fixed" multi-line>
            {{ alertText }} should not be empty

            <template v-slot:actions>
                <v-btn icon color="red" variant="text" @click="snackbar = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
<script>
import Notes from '~/components/Dashboard/Notes.vue'
import SideNav from '~/components/Nav/SideNav.vue'

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition

export default {
    components: { Notes, SideNav },
    data() {
        return {
            search: '',
            isRecording: false,
            sr: new Recognition(),
            snackbar: false,
            addNewDialog: false,
            alertText: '',
            allNotes: [
                {
                    id: 1,
                    title: 'This is note 1',
                    content: 'Content for note 1',
                    date: 'Mon Feb 14 2023'
                },
                {
                    id: 2,
                    title: 'This is note 2',
                    content: 'Content for note 2',
                    date: 'Wed June 04 2023'
                },
                {
                    id: 3,
                    title: 'This is note 3',
                    content: 'Content for note 3',
                    date: 'Thu April 24 2023'
                },
                {
                    id: 4,
                    title: 'This is note 4',
                    content: 'Content for note 4',
                    date: 'Fri Aug 04 2023'
                },
            ],
            // filteredNotes: [],
            newNote: {
                title: '',
                content: '',
                date: new Date().toDateString()
            }
        }
    },
    // computed: {
    //     filteredNotes() {


    //     }
    // },
    methods: {
        filteredNotes() {
            if (!this.allNotes || this.search == '') return this.allNotes;
            return this.allNotes.filter((item) => {
                const s = this.search.toLowerCase();
                const t = item.title.toLowerCase()
                const c = item.content.toLowerCase()
                const d = item.date.toString()
                return (
                    t.includes(s) || c.includes(s) || d.includes(s)
                )
            })
        },
        startRecording() {
            this.sr.continuous = true
            this.sr.interimResults = true

            this.sr.onstart = () => {
                console.log('SR started')
                this.isRecording = true
            }

            this.sr.onend = () => {
                console.log('SR stopped')
                this.isRecording = false
            }

            this.sr.onresult = (evt) => {
                // console.log(evt)
                const words = Array.from(evt.results)
                    .map((item) => item[0])
                    .map((item) => item.transcript).join('')

                this.newNote.content = words
            }
        },
        logItem() {
            // console.log(this.search)
            console.log(this.filteredNotes)
            console.log(this.filteredNotes.length)

        },
        toggleRecord() {
            this.startRecording()
            this.isRecording ? this.sr.stop() : this.sr.start()
        },
        saveNote(note) {
            const index = this.allNotes.findIndex((item) => item.id === note.id)
            console.log(index)
            this.allNotes[index] = note
        },
        deleteNote(note) {
            // console.log(note)
            const index = this.allNotes.findIndex((item) => item.id === note.id)
            console.log(index)
            this.allNotes.splice(index, 1)
        },
        saveNewNote() {
            if (this.newNote.title === '') {
                this.snackbar = true
                this.alertText = 'Title'
            } else if (this.newNote.content === '') {
                this.snackbar = true
                this.alertText = 'Note content'
            } else {
                this.sr.stop()
                this.allNotes.push(this.newNote)
                this.newNote = {
                    title: '',
                    content: ''
                }
                this.addNewDialog = false
            }
        },
    }
}

// const allNotes = ref([
//     {
//         id: 1,
//         title: 'This is note 1',
//         content: 'Content for note 1',
//         date: 'Feb 14, 2023'
//     },
//     {
//         id: 2,
//         title: 'This is note 2',
//         content: 'Content for note 2',
//         date: 'Jan 21, 2019'
//     },
//     {
//         id: 3,
//         title: 'This is note 3',
//         content: 'Content for note 3',
//         date: 'Feb 14, 2023'
//     },
//     {
//         id: 4,
//         title: 'This is note 4',
//         content: 'Content for note 4',
//         date: 'Jul 14, 2023'
//     },
// ])

// const saveNote = (note) => {
//     console.log(note)
//     const index = allNotes.value.find((item) => item.id === note.id)
//     console.log(index)
// }




</script>
