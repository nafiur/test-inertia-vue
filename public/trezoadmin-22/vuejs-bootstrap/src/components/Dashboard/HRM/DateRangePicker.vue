<template>
  <div class="position-relative" ref="datePickerContainer">
    <input
      type="text"
      class="form-control bg-body-bg position-relative border"
      style="width: 216px; height: 30px; padding-left: 35px"
      :placeholder="formattedDateRange"
      @focus="toggleDatePicker"
    />
    <i
      class="ri-calendar-line position-absolute top-50 start-0 translate-middle-y ps-3 fs-15"
    ></i>
    <div :class="['date-picker', { active: isDatePickerActive }]">
      <DatePicker v-model="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import { format } from "date-fns";
import {
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
  defineComponent,
} from "vue";

import DatePicker from "@/components/Common/DatePicker.vue";

export default defineComponent({
  name: "DateRangePicker",
  components: {
    DatePicker,
  },
  setup() {
    const selected = ref({ start: new Date(), end: new Date() });
    const formattedDateRange = computed(() => {
      const { start, end } = selected.value;
      if (!start || !end) {
        return "Select a date range";
      }
      return `${format(start, "dd/MM/yyyy")} - ${format(end, "dd/MM/yyyy")}`;
    });

    // State to toggle the date-picker visibility
    const isDatePickerActive = ref(false);
    const datePickerContainer = ref<HTMLElement | null>(null);

    const toggleDatePicker = () => {
      isDatePickerActive.value = true;
    };

    const closeDatePicker = () => {
      isDatePickerActive.value = false;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerContainer.value &&
        !datePickerContainer.value.contains(event.target as Node)
      ) {
        closeDatePicker();
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    return {
      formattedDateRange,
      toggleDatePicker,
    };
  },
});
</script>

<style lang="scss" scoped>
.date-picker {
  position: absolute;
  inset: 0px auto auto 0px;
  margin: 0px;
  transform: translate(0px, 30px);
  display: none;
  z-index: 1;
  &.active {
    display: block;
  }
}
</style>
