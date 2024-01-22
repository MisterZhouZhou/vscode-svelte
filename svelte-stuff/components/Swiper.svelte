<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  onMount(async () => {
    console.log('$---on mount');
  });
  onDestroy(() => {

  });

  function buttonHandler() {
    console.log('$---button 点击');
  }
</script>

<style lang="less">
  .center {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="center">
  <h1>hello center!!!</h1>
  <button class="button" on:click={buttonHandler}>点击</button>
</div>