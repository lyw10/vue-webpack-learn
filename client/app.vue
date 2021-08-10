<template>
<div id="app">
    <div id="cover">
        
    </div>
    <Header></Header>
    <p>{{count}}</p>
    <!-- <p>{{counterFun}}</p> -->
    <p>{{fullName}}</p>
    <!-- <router-link :to="{name:'App'}">app</router-link> -->
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
    <router-view/>
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a"/> -->
</div>
</template>

<script>
import{mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
// console.log(Header.docs)
export default {
    components:{
        Header,
        Footer,
        // Todo
    },
    mounted(){
      // console.log(this.$route);

      //store
      console.log(this.$store);
      // let i =1;
      // setInterval(()=>{
      //   this.$store.commit('updateCount',i++)
      // },2000)

      // this.$store.dispatch('updateCountAsycn',{
      //   num:5,
      //   time:2000,
      // })

      //mapActions
      // this.updateCountAsycn({
      //   num:5,
      //   time:2000,
      // })
      //mapMutations
      let i =1;
      setInterval(()=>{
        this.updateCount({
          num:i++,
          num2:2
          })
      },2000)
    },
    methods:{
      ...mapActions(['updateCountAsycn']),
      ...mapMutations(['updateCount'])
    },
    computed:{
      //mapState
      //值
      ...mapState(['count']),
      //对象
      // ...mapState({
      //   counterObj:'count'
      // }),
      //方法
      // ...mapState({
      //   counterFun:(state) => state.count =10
      // }),
      //普通
      // count(){
      //   return this.$store.state.count
      // },

      //mapGetters(同mapState)
      ...mapGetters(['fullName'])
      // fullName(){
      //   return this.$store.getters.fullName
      // }
    }
}
</script>

<style  lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  }
  #cover{
    position absolute
    left 0
    right 0
    top 0
    bottom 0   
    background-color #999 
    opacity 0.2
    z-index -1
  }
</style>