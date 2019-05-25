<template>
  <div id="reply">
    <div class="title">
      <span>收到</span>
      <span>回复</span>
        <a-button type="danger" visibility: hidden>
          <a-icon type="minus"/>删除
        </a-button>
    </div>
    <div class="wrapper">
      <div class="item" v-for="(item ,index) in list" :key="index">
        <a-input
          placeholder="Autosize height based on content lines"
          v-model="item.receive"
          autosize
        />
        <a-input
          placeholder="Autosize height based on content lines"
          v-model="item.responce"
          autosize
        />
        <a-button type="danger">
          <a-icon type="minus"/>删除
        </a-button>
      </div>

      <a-button class="add" type="primary">
        <a-icon type="plus"/>添加
      </a-button>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name:'reply',
  data() {
    return {
      list: [
        {
          receive: "收到a",
          responce: "回复a"
        },
        {
          receive: "收到b",
          responce: "回复b"
        }
      ]
    };
  }
};
</script>
<style>
.title {
  margin: 10px;
  display: flex;
}
.title span {
  flex-grow: 1;
}
.wrapper {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
.item {
  display: flex;
  flex-direction: row;
  margin: 10px;
}
.add {
  margin: 10px;
  width: 100px;
}
</style>