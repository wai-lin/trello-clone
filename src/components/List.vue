<template>
  <section>
    <div class="header">
      <h2>Title</h2>
      <button>
        <i class="icon-more-horizontal-outline"></i>
      </button>
    </div>
    <div class="body">
      <div class="main">
        <slot>No card available!</slot>
      </div>
      <div class="footer"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'List',
};
</script>

<style lang="scss" scoped>
$--list-size: 300px;

$--body-radius: map-get($--value-px, '10');
$--body-bg: map-get($--color-gray, '100');
$--body-padding: map-get($--value-rem, '1.5') map-get($--value-rem, '1');

$--header-layout: 26px / 1fr 30px;

$--main-max_height: 70vh;

section {
  width: $--list-size;
}

.body {
  background: $--body-bg;
  padding: $--body-padding;
  border: 0;
  border-radius: $--body-radius;
}

.header {
  display: grid;
  grid-template: $--header-layout;
  align-items: center;
  margin-bottom: map-get($--value-px, '10');
}

.main {
  max-height: $--main-max_height;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: map-get($--value-px, '3');
  }

  &::-webkit-scrollbar-track {
    background: map-get($--color-gray, '300');
  }

  &::-webkit-scrollbar-thumb {
    background: map-get($--color-gray, '400');
  }
}
</style>
