# 鉴权

Arqel API 使用 Bearer Token 方式鉴权。每个请求都需要带上 Arqel 控制台创建的 API Key。

## 请求头

```http
Authorization: Bearer <你的 API Key>
Content-Type: application/json
```

示例：

```bash
curl "$ARQEL_BASE_URL/chat/completions" \
  -H "Authorization: Bearer $ARQEL_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "请替换为控制台里可用的模型名",
    "messages": [
      { "role": "user", "content": "你好" }
    ]
  }'
```

## API Key 放在哪里

推荐：

- 本地测试：环境变量。
- 后端服务：Secret 管理系统或服务器环境变量。
- CI/CD：平台提供的 Secrets。

不推荐：

- 浏览器前端代码。
- 公开 Git 仓库。
- 截图、聊天记录、工单正文中的完整 Key。

## 常见错误

### 401 Unauthorized

通常是 Key 无效、Key 复制不完整或请求头格式错误。

正确格式：

```text
Authorization: Bearer <你的 API Key>
```

### 403 Forbidden

通常是当前 Key 或账户没有权限调用目标资源或模型。

## 安全建议

- 按用途拆分 Key。
- 定期清理不用的 Key。
- 如果怀疑泄露，立即删除或停用该 Key。
- 联系支持时不要提供完整 Key。

## 控制台能力

如果控制台提供 Key 名称、权限范围、过期时间、来源限制或用量记录，请以控制台显示为准。不要在代码里假设某个限制一定存在。

最稳妥的做法是按用途拆分 Key：本地测试、Agent 工具、后端服务分别使用不同 Key 名称，这样排查请求来源时更清楚。
