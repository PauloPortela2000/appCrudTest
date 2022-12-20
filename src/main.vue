<template>
  <div>
    <div class="custom-toolbar">
      <kbutton :icon="'menu'" :fill-mode="'flat'" @click="handleClick" />
      <span class="title">Go 360 Audit</span>
    </div>
    <Drawer
      :expanded="expanded"
      :position="position"
      :mode="mode"
      :items="
        items.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))
      "
      @select="onSelect"
    >
      <DrawerContent>
        <router-view />
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script>
import { Drawer, DrawerContent } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';

export default {
  name: 'App',
  components: { Drawer, DrawerContent, kbutton: Button },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  data() {
    return {
      items: [
        {
          text: 'Home',
          selected: true,
          data: {
            path: '/',
          },
        },
        {
          text: 'Products',
          data: {
            path: '/products',
          },
        },
        {
          text: 'About',
          data: {
            path: '/about',
          },
        },
      ],
      expanded: true,
      selectedId: 0,
      position: 'start',
      mode: 'push',
    };
  },
  methods: {
    onSelect(e) {
      this.selectedId = e.itemIndex;
      this.$router.push(this.items[e.itemIndex].data);
    },
    handleClick() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style></style>
