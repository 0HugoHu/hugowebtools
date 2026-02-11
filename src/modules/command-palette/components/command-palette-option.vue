<script setup lang="ts">
import type { PaletteOption } from '../command-palette.types';

const props = withDefaults(defineProps<{ option: PaletteOption; selected?: boolean }>(), {
  selected: false,
});
const emit = defineEmits(['activated']);
const { option } = toRefs(props);

const { selected } = toRefs(props);
</script>

<template>
  <div
    role="option"
    :aria-selected="selected"
    class="palette-option"
    :class="{ selected }"
    w-full flex cursor-pointer items-center overflow-hidden rounded pa-3 transition
    @click="() => emit('activated', option)"
  >
    <component :is="option.icon" v-if="option.icon" mr-3 h-30px w-30px shrink-0 op-50 />

    <div flex-1 overflow-hidden>
      <div truncate font-bold lh-normal op-90>
        {{ option.name }}
      </div>

      <div v-if="option.description" truncate lh-normal op-60>
        {{ option.description }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.palette-option {
  &:hover,
  &.selected {
    background-color: rgba(34, 40, 49, 0.85);
    color: #fff;
  }
}
</style>
