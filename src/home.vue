<template>
    <div id="home">
        <el-container>
            <my-header></my-header>
            <router-view></router-view>
            <my-footer></my-footer>
        </el-container>
    </div>
</template>

<script>
import myHeader from "@/layout/header"
import myFooter from "@/layout/footer"
export default {
    name: 'home',
    components:{ myHeader,myFooter }
}
</script>

<style>
</style>