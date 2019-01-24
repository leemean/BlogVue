<template>
    <div id="index">
        <el-container>
            <my-header></my-header>
            <router-view class="my-container"></router-view>
            <my-footer></my-footer>
        </el-container>
    </div>
</template>

<script>
import myHeader from "@/layout/header"
import myFooter from "@/layout/footer"
export default {
    name: 'index',
    components:{ myHeader,myFooter }
}
</script>

<style>
</style>
