<template>
  <div id="item">
    <mu-card :style="todo.isDone ? doneTheme : theme ">
      <mu-card-header>
        {{ todo.itemName }}
      </mu-card-header>
      <mu-card-text>
        {{ todo.itemDescription }}
      </mu-card-text>
      <mu-card-actions>
        <mu-raised-button label="DONE" @click="doneTodo" primary/>
        <mu-flat-button label="delete" @click="deleteTodo"/>
      </mu-card-actions>
    </mu-card>
  </div>
</template>

<script>
  export default {
    name: 'TodoDetail',
    props: ['todo', 'ind'],
    data: function () {
      return {
        theme: {},
        doneTheme: {
          backgroundColor: '#9e9e9e'
        }
      }
    },
    methods: {
      doneTodo: function () {
        this.$emit('done', { itemNumber: this.todo.itemNumber })
      },
      deleteTodo: function () {
        this.$emit('delete', { itemNumber: this.todo.itemNumber })
      }
    }
  }
</script>

<style scoped>
  #item {
    font-size: 1.2rem;
    padding: 5px 5px 5px 5px
  }
</style>
