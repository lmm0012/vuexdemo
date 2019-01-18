<template>
    <div class="navBar">
        <div class="cebiancaidan" @click="showLeft">
            侧边菜单
        </div>
    </div>
</template>
<script>
export default {
    name:'navBar',
    data(){
        return{

        }
    },
    created(){

    },
    computed:{

    },
    methods:{
        showLeft:function(){
             this.$store.commit('dibuzhuangtai/caidanshow')
             console.log(this.$store.getters['dibuzhuangtai/leftShow'])
        }
    },
    
}
</script>
<style scoped>
.navBar{
    height: 40px; background-color: white; display: flex; justify-content: space-between; 
    align-items: center; padding: 0 10px; font-size: 12px;
}

</style>

