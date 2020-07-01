<template>
  <div class="search-comic m-auto" style="width: 500px;">
    <input
      id="nhapMessage"
      class="w-75 rounded border shadow-sm"
      style="height:2.5rem"
      @blur="blurInput"
      type="text"
      @input="updateMessage"
    />
    <div class="parent position-relative m-auto">
      <ul
        id="suggest"
        class="mx-auto p-0 position-absolute"
        style="width: 500px;
        top: 0;
        left: 0;
        background: floralwhite;
        "
      >
        <li
          v-for="comic in comics"
          :key="comic.name"
          class="child"
          style="height: 95px;
  list-style: none;"
        >
          <a class="row item text-decoration-none" :href="comic.link">
            <img
              class="col-sm-3 rounded-circle"
              style="
                  height: 75px;"
              :src="comic.image"
            />
            <div class="col-sm-9 col-right text-left">
              <h6 class="mt-1 text-dark font-bold text-break .text-truncate">{{ comic.name }}</h6>
              <p class="font-italic">{{ comic.chapter }}</p>
            </div>
          </a>
          <hr style="margin:5px 0px;padding:0px" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      message: "",
      url: "",
      info: "",
      //comics:[{image:'',link:'',name:'',chapter:''}],
      comics: [],
      items: [{ message: "ban" }, { message: "chao" }],
      count: 0
    };
  },

  methods: {
    updateMessage(e) {
      this.message = e.target.value;
      if (this.message != "") {
        if (this.count != 0) {
          clearTimeout(this.count);
          this.count = setTimeout(this.saukhinhan, 500);
        } else {
          this.count = setTimeout(this.saukhinhan, 500);
        }
      } else {
        this.comics = [];
      }
    },
    saukhinhan() {
      this.url =
        "http://localhost:3000/comic/search/" +
        this.message.toLowerCase().replace(/ /g, "+");
      this.$store.commit("updateMessage", this.message);
      axios.get(this.url).then(res => {
        //Thuc hien xu ly du lieu trong day
        if (res != null) {
          this.xulyData(res);
        }
      });
    },
    blurInput() {
      //this.comics = [];
    },
    xulyData(res) {
      var pattern1 = /href="(.*)?"(\w|\W)+?src="((\w|\W)+?)"(\w|\W)+?h3>((\w|\W)+?)<(\w|\W)+?i>((\w|\W)+?)</g;
      var pattern2 = /href="(.*)?"(\w|\W)+?src="((\w|\W)+?)"(\w|\W)+?h3>((\w|\W)+?)<(\w|\W)+?i>((\w|\W)+?)</;
      var array1 = res.data.match(pattern1);
      this.comics = [];
      //this.setData('chao')
      if (array1 != null) {
        array1.forEach(data1 => {
          var array2 = data1.match(pattern2);
          this.comics.push({
            image: array2[3],
            link: array2[1],
            name: array2[6],
            chapter: array2[9]
          });
          // this.suggestComics.push({image:'chao'})
        });
      }
    }
  }
};
</script>

<style >
.child :hover {
  background: gainsboro;
  /* padding: 0; */
  /* margin: 0px; */
}
#nhapMessage :hover {
  border-color: darkgray;
}
</style>