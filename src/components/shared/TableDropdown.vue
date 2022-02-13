<template>
  <div>
    <a
      ref="btnDropdownRef"
      class="px-3 py-1 text-blueGray-500"
      href="#pablo"
      @click="toggleDropdown($event)"
    >
      <DotsVerticalIcon class="w-4 h-4" />
    </a>
    <div
      ref="popoverDropdownRef"
      class="z-50 float-left py-2 text-base text-left list-none bg-white rounded shadow-lg min-w-48"
      :class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <a
        href="javascript:void(0);"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        Action
      </a>
      <a
        href="javascript:void(0);"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        Another action
      </a>
      <a
        href="javascript:void(0);"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        Something else here
      </a>
    </div>
  </div>
</template>

<script>
// import { createPopper } from '@popperjs/core'
import { DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
  components: {
    DotsVerticalIcon
  },
  data () {
    return {
      dropdownPopoverShow: false
    }
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault()
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false
      } else {
        this.dropdownPopoverShow = true
        // createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
        //   placement: 'bottom-start'
        // })
      }
    }
  }
}
</script>
