<template>
  <Page >
    <StackLayout>
      <MDBottomNavigation
          :selectedIndex="selected"
          ref="bottomNavigation"
          tabsPosition="bottom"
      >
        <MDTabStrip>
          <MDTabStripItem>
            <Label text="Home"></Label>
          </MDTabStripItem>
          <MDTabStripItem class="special">
            <Label text="Account"></Label>
          </MDTabStripItem>
        </MDTabStrip>
        <MDTabContentItem>
          <StackLayout>
            <Label text="MDTabContentItem 1"></Label>
          </StackLayout>
        </MDTabContentItem>
        <MDTabContentItem>
            <StackLayout>
              <Label text="MDTabContentItem 2"></Label>
            </StackLayout>
        </MDTabContentItem>
      </MDBottomNavigation>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";

export default Vue.extend({
  data() {
    return {
      selected: 0
    }
  },
});
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
