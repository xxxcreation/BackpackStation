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
// createdする。firebaseから取ってきたデータをitemsの変数に代入する
const items = [{'Days': '2018/4/13', 'People': '2人', 'Keyword': '渋谷'},
  {'Days': '2018/4/13', 'People': '3人', 'Keyword': '新宿'},
  {'Days': '2018/4/13', 'People': '4人', 'Keyword': '東京'}]
export default{
  data () {
    return {
      items: items,
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
  }}
</script>