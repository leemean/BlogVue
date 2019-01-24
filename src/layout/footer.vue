<template>
    <el-footer class="my-footer">
        <div class="container">
            <p>
                Designed by
                <strong>
                    <router-link to="/" class="my-footer-design-by">liming</router-link>
                </strong>
            </p>
        </div>
    </el-footer>
</template>

<script>
export default {
    name: "myFooter",
    data() {
        return {}
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<style>
  .my-footer {
    min-width: 100%;
    box-shadow: 0 -2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1024;
  }
  .container {
    text-align: center;
    line-height: 60px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
  }
  .my-footer-design-by {
    color: #5FB878 !important;
  }
</style>

