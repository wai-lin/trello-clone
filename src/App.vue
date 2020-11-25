<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { boards, lists, cards } from '@/database/_init-data';
import BoardModel from '@/models/Board';
import ListModel from '@/models/List';
import CardModel from '@/models/Card';

export default {
  name: 'App',
  beforeMount() {
    BoardModel.deleteAll();
    ListModel.deleteAll();
    CardModel.deleteAll();

    BoardModel.insert({
      data: boards,
    });
    ListModel.insert({
      data: lists,
    });
    CardModel.insert({
      data: cards,
    });
  },
};
</script>
