<template>
  <div class="tomorrow">
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
        <tr v-for="row in items">
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
const items = [{'Days': '2018/4/13', 'People': '2人', 'Keyword': '渋谷'},
  {'Days': '2018/4/13', 'People': '3人', 'Keyword': '新宿'},
  {'Days': '2018/4/13', 'People': '4人', 'Keyword': '東京'}]
export default{
  name: 'sample',
  data () {
    return {
      items: items}
  }
}
</script>

<!-- <script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_DOMAIN.firebaseapp.com",
    databaseURL: "YOUR_DOMAIN.firebaseio.com",
    projectId: "YOUR_ID",
    storageBucket: "YOUR_BUCKET_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID"
  }
  firebase.initializeApp(config)
</script>-->

<style>
</style>

