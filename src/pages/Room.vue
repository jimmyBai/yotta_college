<template>
  <div class="g-inherit m-main">
    <div class="m-room-entry g-flex-c">
        <div class="album">
        </div>
        <p class="desc"></p>
      </span>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import config from '../configs'

export default {
  mounted: function () {
    this.$nextTick(function () {
      location.href = `#/roomChat/` + window.document.getElementById('roomid').value
    })
  }
}
</script>
