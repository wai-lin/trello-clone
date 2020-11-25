<template>
  <div class="card" @click.self="$emit('click')">
    <div class="header">
      <p>{{ name }}</p>
    </div>
    <div class="main"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: {
      type: String,
      default: 'Untitled',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$--card-bg: $--color-white;
$--card-padding: map-get($--value-rem, '1');
$--card-radius: map-get($--value-px, '10');
$--card-shadow: map-get($--shadow, 'sm');

.card {
  background: $--card-bg;
  padding: $--card-padding;
  margin-bottom: map-get($--value-rem, '0.75');
  border: 0;
  border-radius: $--card-radius;
  box-shadow: $--card-shadow;
}
</style>
