# 项目更新操作记录

本文件用于记录这个网站项目的日常更新与发布流程，方便每次修改后快速同步到 GitHub 并触发 Vercel 自动部署。

## 日常更新流程（推荐）
```bash
1. 查看改动
git status

2. 添加改动
git add .

3. 提交改动
git commit -m "update content"

4. 推送到 GitHub（触发 Vercel 自动部署）
git push

```

## 只改了已跟踪文件时的快捷方式

```bash
git commit -am "update content"
git push
```

## 只做预览、不影响正式站（使用分支）

1. 新建预览分支
   ```bash
   git checkout -b preview-1
   ```

2. 推送分支（Vercel 会生成 Preview 链接）
   ```bash
   git push -u origin preview-1
   ```

3. 预览结束后回到主分支
   ```bash
   git checkout main
   ```

## 常见问题

- 提示需要登录或 Token：
  使用 GitHub Personal Access Token（Classic，勾选 `repo` 权限）代替密码。

- 推送失败：
  先运行 `git status` 查看是否有未提交改动，再检查远端地址：
  ```bash
  git remote -v
  ```

