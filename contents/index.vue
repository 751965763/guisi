<script setup lang="ts">
import { ref } from 'vue';

import AnnotationEditor from '#/views/annotation/AnnotationEditor.vue';
import {
  SAMPLE_LABEL_CONFIG,
  SAMPLE_LABEL_CONFIG_AUDIO,
  SAMPLE_LABEL_CONFIG_PDF,
  SAMPLE_LABEL_CONFIG_TEXT,
  SAMPLE_LABEL_CONFIG_VIDEO,
  SAMPLE_TASK,
} from '#/views/annotation/mock/sample';

type TabKey = 'image' | 'text' | 'audio' | 'video' | 'pdf';
const tab = ref<TabKey>('image');

/** 各演示 Tab 对应的 Label Studio 配置。 */
const CONFIGS: Record<TabKey, string> = {
  image: SAMPLE_LABEL_CONFIG,
  text: SAMPLE_LABEL_CONFIG_TEXT,
  audio: SAMPLE_LABEL_CONFIG_AUDIO,
  video: SAMPLE_LABEL_CONFIG_VIDEO,
  pdf: SAMPLE_LABEL_CONFIG_PDF,
};
</script>

<template>
  <div class="annotation-page">
    <div class="ap-tabs">
      <button
        class="ap-tab"
        :class="{ active: tab === 'image' }"
        type="button"
        @click="tab = 'image'"
      >
        图像标注（矩形 / 多边形 / 关键点 / 分类）
      </button>
      <button
        class="ap-tab"
        :class="{ active: tab === 'text' }"
        type="button"
        @click="tab = 'text'"
      >
        文本 NER（实体抽取）
      </button>
      <button
        class="ap-tab"
        :class="{ active: tab === 'audio' }"
        type="button"
        @click="tab = 'audio'"
      >
        音频区间标注
      </button>
      <button
        class="ap-tab"
        :class="{ active: tab === 'video' }"
        type="button"
        @click="tab = 'video'"
      >
        视频区间标注
      </button>
      <button
        class="ap-tab"
        :class="{ active: tab === 'pdf' }"
        type="button"
        @click="tab = 'pdf'"
      >
        PDF 矩形标注
      </button>
    </div>
    <div class="ap-body">
      <AnnotationEditor
        :key="tab"
        :label-config="CONFIGS[tab]"
        :task="SAMPLE_TASK"
      />
    </div>
  </div>
</template>

<style scoped>
.annotation-page {
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.ap-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.ap-tab {
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #334155;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}
.ap-tab.active {
  background: #2563eb;
  border-color: #2563eb;
  color: #fff;
}
.ap-body {
  flex: 1;
  min-height: 0;
}
</style>
