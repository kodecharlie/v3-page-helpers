<template>
  <div id="currentNums">
    <ul>
      <li v-for="num in getCurrentNums" :key="num">{{ num }}</li>
    </ul>
    <Pagination v-model="pagenav"/>
    <div class="mb-2">
      <button @click="showPrimaryModal" type="button" class="btn btn-primary ms-2">Primary</button>
      <button @click="showWarningModal" type="button" class="btn btn-warning ms-2">Warning</button>
      <button @click="showInfoModal" type="button" class="btn btn-info ms-2">Info</button>
    </div>
    <PageModal v-model="activeModal"/>
  </div>
</template>

<script>
import PageModal from "../components/PageModal.vue"
import Pagination from "../components/Pagination.vue"
import { Modal } from "bootstrap"

export default {
  name: 'PositiveInts',
  components: {
    Pagination, PageModal
  },
  created() {
    this.modals = {
      primary: {
        iconName: 'check-circle-fill',
        hasCancelBtn: true,
        onBtnCallback: () => this.primaryModalOK(),
        title: 'Programmable bootstrap modal',
        bodyMsg: () => 'This is the main message of the modal popup.  Note that we set up the text as the return value of a pointer function, which lends a bit more flexibility than static text.'
      },
      warning: {
        iconName: 'exclamation-triangle-fill',
        hasCancelBtn: false,
        onBtnCallback: null,
        title: 'Programmable bootstrap modal',
        bodyMsg: () => 'This is the main message of the modal popup.  Note that we set up the text as the return value of a pointer function, which lends a bit more flexibility than static text.'
      },
      info: {
        iconName: 'info-fill',
        hasCancelBtn: true,
        onBtnCallback: () => this.infoModalOK(),
        title: 'Programmable bootstrap modal',
        bodyMsg: () => 'This is the main message of the modal popup.  Note that we set up the text as the return value of a pointer function, which lends a bit more flexibility than static text.'
      }
    }
  },
  methods: {
    showPrimaryModal() {
      this.setActiveModal(this.modals.primary);
      let curModal = new Modal(this.activeModal.ref, { keyboard: false });
      curModal.show();
    },
    showWarningModal() {
      this.setActiveModal(this.modals.warning);
      let curModal = new Modal(this.activeModal.ref, { keyboard: false });
      curModal.show();
    },
    showInfoModal() {
      this.setActiveModal(this.modals.info);
      let curModal = new Modal(this.activeModal.ref, { keyboard: false });
      curModal.show();
    },
    primaryModalOK() {
      console.log('Primary modal done.');
    },
    infoModalOK() {
      console.log('Info modal done.');
    },
    setActiveModal(modalSpec) {
      this.activeModal.iconName = modalSpec.iconName;
      this.activeModal.hasCancelBtn = modalSpec.hasCancelBtn;
      this.activeModal.onBtnCallback = modalSpec.onBtnCallback;
      this.activeModal.title = modalSpec.title;
      this.activeModal.bodyMsg = modalSpec.bodyMsg();
    }
  },
  computed: {
    getCurrentNums() {
      let startNum = 10 * this.pagenav.page;
      let endNum = startNum + 10;
      var currentNums = [];
      for (let i = startNum; i < endNum; ++i) {
        currentNums.push(i);
      }
      return currentNums;
    }
  },
  data() {
    return {
      pagenav: { numPages: 10, page: 0 },
      activeModal: {

      }
    }
  }
};
</script>

<style scoped>
div#currentNums {
  text-align: left;
}
</style>