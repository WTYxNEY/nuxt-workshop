<template>
  <div>
    <b-carousel id="slider" indicators controls>
      <div v-for="item in items" :key="item.caption">
        <b-carousel-slide
          :caption=item.caption
          :text=item.text
          :img-src=item.image
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          caption: 'A',
          image: 'https://picsum.photos/600/300/?image=24',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
          caption: 'B',
          image: 'https://picsum.photos/600/300/?image=26',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
          caption: 'C',
          image: 'https://picsum.photos/600/300/?image=27',
          text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
