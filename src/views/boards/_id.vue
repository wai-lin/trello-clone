<template>
  <div>
    <List>
      <Card name="Unnamed" />
    </List>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
// import BoardModel from '@/models/Board';
import ListModel from '@/models/List';
// import CardModel from '@/models/Card';

import List from '@/components/List';
import Card from '@/components/Card';

export default {
  name: 'ViewsBoardsId',
  components: {
    List,
    Card,
  },
  computed: {
    routeParams() {
      return this.$route.params;
    },
    currentLists() {
      return ListModel.query()
        .where('board_id', this.routeParams.id)
        .get();
    },
    currentListWithCards() {
      return ListModel.query()
        .where('board_id', this.routeParams.id)
        .with('cards')
        .get();
    },
  },
};
</script>
