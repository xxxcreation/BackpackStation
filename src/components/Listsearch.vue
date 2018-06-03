<template>
  <div class="tomorrow">
   <div>
    <span>Keyword：</span>
    <input type="text" v-model="searchKeyword" placeholder="Search">
    {{searchKeyword}}
   </div>
  <div>
    <table>
      <thead>
        <tr>
          <th>Days</th>
          <th>People</th>
          <th>Keyword</th>
        </tr>
      </thead>
    <tbody>
        <tr v-for="row in filteredList">
          <td>{{row.Days}}</td>
          <td>{{row.People}}</td>
          <td>{{row.Keyword}}</td>
        </tr>
    </tbody>
  </table>
  </div>
  </div>
  </div>
</template>

<script>
const firebase = require('firebase')
// Required for side-effects
require('firebase/firestore')
firebase.initializeApp({
  apiKey: 'AIzaSyB2kHSE1ReNpKUSf_HWbngTlfbFrsNz1yg',
  authDomain: 'back-pack-station.firebaseapp.com',
  projectId: 'back-pack-station'
})
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore()

export default{
  data () {
    return {
      items: [],
      searchKeyword: '' }
  },
  computed: {
    filteredList: function () {
      if (this.searchKeyword === '') {
        return this.items
      }
      let filteredList = []
      for (let item of this.items) {
        if (item.Keyword === this.searchKeyword) {
          filteredList.push(item)
        }
      }
      return filteredList
    }
  },
  created: function () {
    this.readFromFirebase()
  },
  methods: {
    readFromFirebase: function () {
      let items = []
      db.collection('items').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`)
          items.push(doc.data())
        })
      }).then(() => {
        console.log(JSON.stringify(items))
        this.items = items
      })
    }
  }
}
</script>