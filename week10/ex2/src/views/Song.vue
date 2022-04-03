<script setup>
import { useRoute } from "vue-router";
import MusicList from "../data/music-list.json";

const route = useRoute();
console.log(route.params.slug);
const song = MusicList.find((song) => {
  return song.slug === route.params.slug;
});
</script>

<template>
  <div
    class="song-detail"
    :class="{
      rising: song.rank > song.position.positionLastWeek,
      falling: song.rank < song.position.positionLastWeek,
      same: song.rank === song.position.positionLastWeek,
    }"
  >
    <h1>{{ song.rank }}</h1>
    <h2>{{ song.title }}</h2>
    <img :src="song.cover" :alt="song - title" />
    <p>Artist: {{ song.artist }}</p>
  </div>
</template>
    <style scoped>
.song-detail.rising {
  border: 1px solid green;
}
.song-detail.falling {
  border: 1px solid red;
}
.song-detail.same {
  border: 1px solid orange;
}
</style>
