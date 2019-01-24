<template>
    <div id="app">
        <!-- 视图 -->
        <transition name="el-fade-in-linear" mode="out-in">
            <router-view></router-view>
        </transition>
        <!-- 进度条 -->
        <!-- <vue-progress-bar></vue-progress-bar> -->
        <!-- backTop组件 -->
        <!-- <my-backTop></my-backTop> -->
    </div>
</template>