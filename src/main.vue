<template>
  <div>
    <div class="custom-toolbar">
      <kbutton :icon="'menu'" :fill-mode="'flat'" @click="handleClick" />
      <span class="title">Categories</span>
    </div>
    <Drawer
      :animation="false"
      :expanded="expanded"
      :position="position"
      :mode="mode"
      :mini="true"
      :width="200"
      :items="dataItems"
      :item="'CustomItem'"
      @select="onSelect"
    >
      <template v-slot:CustomItem="{ props }">
        <DrawerItem
          v-if="props.visible !== false"
          v-bind="props"
          @click="props.onClick"
        >
          <span :class="'k-icon ' + props.icon" />
          <span class="k-item-text">{{ props.text }}</span>
          <span
            v-if="props['data-expanded'] !== undefined"
            :class="props['data-expanded'] ? downClass : rightClass"
            :style="{
              position: 'absolute',
              right: '10px',
              visibility: expanded ? '' : 'hidden',
            }"
          />
        </DrawerItem>
      </template>
      <DrawerContent>
        <router-view />
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script>
import { Drawer, DrawerContent, DrawerItem } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';
import './styles.css';

export default {
  name: 'App',
  components: { Drawer, DrawerItem, DrawerContent, kbutton: Button },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  computed: {
    dataItems() {
      const newItems = this.items.map((item) => {
        const { parentId, ...others } = item;
        if (parentId !== undefined) {
          const parent = this.items.find((parent) => parent.id === parentId);
          return { ...others, visible: parent['data-expanded'] };
        }
        return item;
      });
      return newItems;
    },
  },
  data() {
    return {
      downClass: 'k-icon k-i-arrow-chevron-down',
      rightClass: 'k-icon k-i-arrow-chevron-right',
      items: [
        {
          text: 'Dashboard',
          icon: 'k-i-grid',
          id: 1,
          selected: true,
          data: {
            path: '/',
          },
        },
        {
          separator: true,
        },
        {
          text: 'Audits',
          icon: 'k-i-subreport',
          id: 2,
          ['data-expanded']: true,
          data: {
            path: '/audit',
          },
        },
        {
          text: 'Create',
          icon: 'k-i-minus',
          id: 4,
          parentId: 2,

          data: {
            path: '/createaudit',
          },
        },
        {
          separator: true,
        },
        {
          text: 'Entities Manager',
          icon: 'k-i-parameters',
          ['data-expanded']: true,
          id: 3,
          data: {
            path: '/norms',
          },
        },
        {
          text: 'Norms',
          icon: 'k-i-minus',
          id: 6,
          parentId: 3,
          data: {
            path: '/norms',
          },
        },
        {
          text: 'Controls',
          icon: 'k-i-minus',
          id: 7,
          parentId: 3,
          data: {
            path: '/controls',
          },
        },
        {
          text: 'Subcontrols',
          icon: 'k-i-minus',
          id: 8,
          parentId: 3,
          data: {
            path: '/subcontrols',
          },
        },
      ],
      expanded: true,
      position: 'start',
      mode: 'push',
    };
  },
  methods: {
    onSelect(ev) {
      const currentItem = ev.itemTarget.props;
      const isParent = currentItem['data-expanded'] !== undefined;
      const nextExpanded = !currentItem['data-expanded'];
      const newData = this.items.map((item) => {
        const {
          selected,
          ['data-expanded']: currentExpanded,
          id,
          ...others
        } = item;
        const isCurrentItem = currentItem.id === id;
        return {
          selected: isCurrentItem,
          ['data-expanded']:
            isCurrentItem && isParent ? nextExpanded : currentExpanded,
          id,
          ...others,
        };
      });
      this.$router.push(this.items[ev.itemIndex].data);

      this.items = newData;
    },
    handleClick() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style></style>
