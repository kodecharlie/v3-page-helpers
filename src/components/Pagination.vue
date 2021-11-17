<template>
  <nav v-if="pagenav.numPages > 0" aria-label="Navigate through unvetted results">
    <ul class="pagination justify-content-start">
      <li class="page-item">
        <a class="page-link" @click="previousPage" href="#">Previous</a>
      </li>
      <li v-for="pp in pagenav.numPages" :key="pp" class="page-item">
        <a class="page-link" @click="navigateToPage(pp)" href="#"
          :ref="setAnchor" v-bind:class="{ 'isSelected': isSelected(pp) }">{{ pp }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="nextPage" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed, onBeforeUpdate, onUpdated } from 'vue';

export default {
  name: "Pagination",
  props: {
    modelValue: {
      type: Object,
      default: () => {}
    }
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const pagenav = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    let anchors = []
    const setAnchor = el => {
      if (el) {
        anchors.push(el)
      }
    }

    onBeforeUpdate(() => {
      anchors = []
    })

    onUpdated(() => {
      // Empty for now
    })

    const focusPageAnchor = () => {
      anchors[pagenav.value.page].focus();
    }

    const isSelected = (pp) => {
      return pagenav.value.page == (pp - 1);
    };

    return { pagenav, setAnchor, focusPageAnchor, isSelected };
  },
  methods: {
    previousPage() {
      this.pagenav.page = Math.max(0, this.pagenav.page - 1);
      this.focusPageAnchor();
    },
    navigateToPage(pp) {
      this.pagenav.page = pp - 1;
      this.focusPageAnchor();
    },
    nextPage() {
      this.pagenav.page = Math.min(this.pagenav.numPages - 1, this.pagenav.page + 1);
      this.focusPageAnchor();
    }
  },
};
</script>

<style>
/* XXX color here is same as background color used by bootstrap for focused page-links */
a.isSelected {
  background-color: rgb(234, 236, 239);
}
</style>
