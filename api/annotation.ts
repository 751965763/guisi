/**
 * 标注相关后端接口（第一阶段为占位实现，不发起真实 HTTP 请求）。
 *
 * <p>仅返回 mock 数据 / 占位结果，所有方法体内保留
 * {@code // TODO: 调用后端 API（项目/任务/标注提交）} 注释，便于后续接入真实后端。
 */
import type { TaskData } from '#/views/annotation/types';

// TODO: 调用后端 API（项目/任务/标注提交）
export async function fetchTask(
  projectId?: string,
  taskId?: string,
): Promise<TaskData> {
  // TODO: 调用后端 API（项目/任务/标注提交）
  console.warn('[annotation.api] fetchTask 为占位实现，未发起真实请求', {
    projectId,
    taskId,
  });
  return Promise.resolve({ data: {}, predictions: [] });
}

// TODO: 调用后端 API（项目/任务/标注提交）
export async function submitAnnotation(payload: any): Promise<{ ok: boolean }> {
  // TODO: 调用后端 API（项目/任务/标注提交）
  console.warn('[annotation.api] submitAnnotation 为占位实现，未发起真实请求', {
    payload,
  });
  return Promise.resolve({ ok: true });
}
