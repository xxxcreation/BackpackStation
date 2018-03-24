<template>
  <div>
    <mu-appbar title="This is my training and practice app!">
      <mu-raised-button label="Add TODO" slot="right" @click="openCreator" secondary/>
    </mu-appbar>
    <mu-switch label="display done todos" v-model="displayDone" :style="{ padding: '10px 5px 20px 5px' }"/>
    <todo-creator :open="creatorOpen" v-on:add="addTodo" v-on:cancel="cancelAdding"/>
    <todo-detail v-for="todo in targetList" :key="todo.itemNumber" :todo="todo" v-on:delete="deleteTodo" v-on:done="doneTodo"/>
  </div>
</template>

<script>
  import TodoDetail from './TodoDetail.vue'
  import TodoCreator from './TodoCreator'

  export default {
    components: {
      'todo-detail': TodoDetail,
      'todo-creator': TodoCreator
    },
    name: 'TodoList',
    data: function () {
      return {
        creatorOpen: false,
        todoList: [
          {
            itemNumber: 1,
            isDone: false,
            itemName: 'item1',
            itemDescription: 'create Vue practicing app especially using component'
          },
          {
            itemNumber: 2,
            isDone: true,
            itemName: 'item2',
            itemDescription: 'simple task list app is good for practice!'
          }],
        todoSequenceNumber: 3,
        displayDone: false
      }
    },
    computed: {
      targetList: function () {
        return this.todoList.filter(s => { return (this.displayDone === false ? (s.isDone === false) : true) })
      }
    },
    methods: {
      addTodo: function (payload) {
        this.todoList.push(
          {
            itemNumber: this.todoSequenceNumber++,
            isDone: false,
            itemName: payload.itemName || 'todo!',
            itemDescription: payload.itemDescription || 'empty description is so boring...'
          }
        )
      },
      deleteTodo: function (payload) {
        this.todoList = this.todoList.filter(s => { return s.itemNumber !== payload.itemNumber })
      },
      doneTodo: function (payload) {
        this.todoList = this.todoList.map(s => {
          if (s.itemNumber === payload.itemNumber) {
            s.isDone = true
          }
          return s
        })
      },
      openCreator: function () {
        console.log(this.creatorOpen)
        this.creatorOpen = true
      },
      cancelAdding: function () {
        this.creatorOpen = false
      }
    }
  }
</script>
