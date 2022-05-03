<template>
  <div class="modalWrapper" v-if="this.show">
    <div class="modal">
      <span class="closeModal">
        <icon name="cross" :size="20" color="#b33641" @click="this.$emit('modal:close')" />
      </span>
      <div class="d-flex flexGrid">
        <div class="imageContainer flip-box">
          <div class="flip-box-inner">
            <img v-for="(image, k) of images" :key="k" :src="image" :class="k === 'front' ? 'flip-box-front' : 'flip-box-back'" />
          </div>
          <!-- <div class="flip" v-if="Object.keys(this.images).length > 1">
            <icon name="spinner11" color="white" :size="40" />
          </div> -->
        </div>
        <div class="contentContainer">
          <h3>{{ title }}</h3>
          <p v-for="(content, k) in contents" :key="k">{{ content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "./Icon/Icon.vue"

export default {
  name: "Modal",
  components: {
    Icon
  },
  props: {
    show: Boolean,
    title: String,
    contents: Array,
    images: Object
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    console.log(this.images)
  }
}
</script>
<style scoped>
.flexGrid {
  gap: 15px;
  padding: 15px;
}
.flexGrid > * {
  flex: 1;
}
.closeModal {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.modalWrapper {
  position: fixed;
  inset: 0;
}
.modalWrapper::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
.modal {
  max-width: calc(100vw - 2rem);

  background: rgba(0, 0, 0, 0.95);
  position: absolute;
  inset: 50vh auto auto 50vw;
  transform: translate(-50%, -50%);
}
.imageContainer {
  flex: 0;
  height: auto;
}
.contentContainer {
  color: #fff;
}
.flip-box {
  background-color: transparent;
  /* border: 1px solid #f1f1f1; */
  /* perspective: 1000px; */
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}
.flip-box-front,
.flip-box-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
  background-color: transparent;
  color: black;
  position: relative;
}

.flip-box-back {
    position: absolute;
    left: 0;
    right: 0;
  background-color: transparent;
  color: white;
  transform: rotateY(180deg);
}
</style>
