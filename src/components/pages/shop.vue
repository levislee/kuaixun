<template>
    <div>
        <div class="slider">
            <div class="list">
                <div class="sss" v-for="(item,index) in list" :key="index">{{item}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[0,1,2,3]
        }
    },
    methods:{

    }
}
</script>
<<<<<<< HEAD
styl
=======
>>>>>>> 207a23ef61342ae14d444d68a53046d2ac7849cf

