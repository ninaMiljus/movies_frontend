<template>
  <div>
    <div class="row">
      <li>
        <span class="cell">{{ movie.title }} </span>
        <span class="cell">{{ movie.director }}</span>
        <button @click="remove" class="btn btn-danger">Remove</button>
      </li>
    </div>
  </div>
</template>

<script>
    export default {
        props: ["movie"],
    };
</script>

<style scoped></style>