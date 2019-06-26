<template>
  <div id="reply">
    <div
      v-if="dataLoading"
      id="dataLoading"
      style="
        text-align: center;
        border-radius: 4px;
        margin-bottom: 20px;
        box-shadow: 0 0 10px rgba(151, 151, 151, 0.3);
        padding: 30px 50px;
        margin: 20px 0;"
    >
      <a-spin/>
    </div>
    <div id="replyData" v-if="!dataLoading">
      <div id="dataWrapper">
        <div class="title" v-if="list.length!=0">
          <span class="title">收到</span>
          <span>回复</span>
          <a-button type="danger" style="visibility:hidden;">
            <a-icon type="minus"/>删除
          </a-button>
          <a-button @click="save" style="visibility:hidden;margin-right:30px;" type="primary">
            <a-icon type="save"/>保存
          </a-button>
        </div>
        <div class="receive-and-resopnse">
          <div id="item-wrapper" v-if="list.length!=0">
            <div class="item" v-for="(item ,index) in list" :key="index">
              <a-input
                style="margin-right:30px;"
                placeholder="在此编辑收到内容"
                v-model="item.receive"
                autosize
              />
              <a-input
                style="margin-right:30px;"
                placeholder="在此编辑回复内容"
                v-model="item.response"
                autosize
              />
              <a-button @click="save(item)" style="margin-right:30px;">
                <a-icon type="save"/>保存
              </a-button>
              <a-button type="danger" @click="remove(item)">
                <a-icon type="minus"/>删除
              </a-button>
            </div>
          </div>
          <div id="noData" v-if="list.length==0">
            <i class="iconfont icon-zanwushuju" style="font-size:126px;color:rgba(0,0,0,0.1);"></i>
            <span style="color:#c5c5c5">暂无数据，请点击添加按钮…</span>
          </div>
          <div style="display:flex;">
            <a-button class="add" @click="add">
              <a-icon type="plus"/>添加
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "reply",
  data() {
    return {
      list: [
        {
          receive: "苹果",
          response: "橘子",
          id: 0
        },
        {
          receive: "西柚",
          response: "樱桃",
          id: 1
        }
      ],
      loading: "",
      dataLoading: true
    };
  },
  methods: {
    add: function() {
      this.list.push({
        receive: "",
        response: "",
        id: -1
      });
    },
    remove: function(item) {
      // console.log(item);
      // this.list.splice(index, 1);
      var self = this;
      this.ajax({
        url: self.store.INTERFACE.DELETE + "/?id=" + item.id,
        method: "GET",
        success: function(res) {
          if (res.code == 200) {
            self.$message.success("删除成功", 5);
            self.show();
          }
        }
      });
    },
    show: function() {
      var self = this;
      this.ajax({
        url: self.store.INTERFACE.SHOW,
        method: "GET",
        success: function(res) {
          if (res.code == 200) {
            // console.log(res);
            self.dataLoading = false;
            self.list = res.data;
          }
        }
      });
    },
    save: function(item) {
      var self = this;
      // console.log(item);
      if (item.id == -1) {
        this.ajax({
          url: self.store.INTERFACE.ADD,
          method: "POST",
          data: {
            request: item.receive,
            response: item.response
          },
          success: function(res) {
            if (res.code == 200) {
              self.$message.success("添加成功", 5);
              console.log(res);
              self.show();
              // self.list = res.data;
            }
          }
        });
      }
      if (item.id !== -1) {
        this.ajax({
          url: self.store.INTERFACE.UPDATE + "/?id=" + item.id,
          method: "POST",
          data: {
            request: item.receive,
            response: item.response
          },
          success: function(res) {
            if (res.code == 200) {
              self.show();
              // console.log(res);
              self.$message.success("更新成功", 5);
              // self.list = res.data;
            }
          }
        });
      }
    }
  },
  mounted: function() {
    this.show();
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
.title {
  font-size: 24px;
  color: rgb(91, 91, 91);
}
</style>