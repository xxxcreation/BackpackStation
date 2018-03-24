<template>
  <div>
    <mu-dialog :open="open" title="Add Todo!" @close="close">
      <mu-text-field label="Title" v-model="itemName"/>
      <br/>
      <mu-text-field label="Description" v-model="itemDescription" fullWidth/>
      <mu-flat-button slot="actions" @click="close" primary label="cancel"/>
      <mu-flat-button slot="actions" primary @click="add" label="add"/>
    </mu-dialog>
  </div>
</template>

<script>
  export default {
    name: 'TodoCreator',
    props: ['open'],
    data: function () {
      return {
        itemName: '',
        itemDescription: ''
      }
    },
    methods: {
      close: function () {
        this.$emit('cancel')
      },
      add: function () {
        this.$emit('add', {itemName: this.itemName, itemDescription: this.itemDescription})
        this.clearFields()
        this.close()
      },
      clearFields: function () {
        this.itemName = ''
        this.itemDescription = ''
      }
    }
  }
</script>

<style scoped>

</style>
