<template>
  <div>
    <div class="row">
      <li>
        <div class="cell">{{ movie.title }}</div>
        <div class="cell">{{ movie.director }}</div>
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