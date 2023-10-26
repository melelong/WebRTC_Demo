{
  /* <div>标题:<slot>xxx</slot></div>
</template>
<script setup lang="ts"></script>
<style lang=""></style> */
}
import { defineComponent } from 'vue';

export default defineComponent({
  setup(props, { slots }) {
    return () => <div>标题：{'default' in slots && slots.default()}</div>;
  },
});
