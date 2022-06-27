<template>
  <Dialog :open="open" @close="close">
    <DialogPanel as="div" class="styling">
      <DialogTitle>Deactivate account</DialogTitle>
      <DialogDescription>
        This will permanently deactivate your account
      </DialogDescription>

      <p>
        Aasdasdsaddsa
      </p>

      <button @click="close()">Deactivate</button>
      <button @click="close()">Cancel</button>
    </DialogPanel>
  </Dialog>
</template>


<script setup>
import { toRefs, defineProps, defineEmits } from 'vue'


import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

const props = defineProps({
    open: Boolean,
})

const emit = defineEmits(['closeAddProduct'])
const { open } = toRefs(props)

function close() {
    emit('closeAddProduct', false)
}
</script>

<style>
.styling {
  position: absolute;
  z-index: 10;
}
</style>