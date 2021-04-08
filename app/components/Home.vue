<template>

  <Page>
    <ActionBar>
      <Label text="Home"/>
    </ActionBar>
    <RootLayout height="100%" width="100%">
    <GridLayout>
      <Button text="Open modal RootLayout" class="info" @tap="show">
      </Button>
      <ImportWithAliasComponent></ImportWithAliasComponent>
    </GridLayout>
    </RootLayout>
  </Page>

</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import {Color, getRootLayout, Label, StackLayout, View} from "@nativescript/core";
  import ImportWithAliasComponent from "@/components/ImportWithAliasComponent.vue";

  export default Vue.extend({
    components:{ImportWithAliasComponent},
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    methods:{
      show(){
        const view = this.getPopup('#EA5936', 110, -30)
        getRootLayout()
            .open(view, {

              shadeCover: {

                color: '#000',
                opacity: 0.7,
                tapToClose: false
              },
              animation: {
                enterFrom: {
                  opacity: 0,
                  translateY: 500,
                  duration: 500
                },
                exitTo: {
                  opacity: 0,
                  duration: 300
                }
              }
            })
            .catch(ex => console.error(ex)).then(() => {
          getRootLayout().bringToFront(view);
        })

      },
      getPopup(color: string, size: number, offset: number): View {
        const layout = new StackLayout()
        layout.height = size
        layout.width = size
        layout.marginTop = offset
        layout.marginLeft = offset
        layout.backgroundColor = color
        layout.borderRadius = 10
        return layout
      }
    }
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
