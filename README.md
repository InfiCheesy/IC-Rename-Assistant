<h1 align="center">
  <img src="./logo/IC开发LOGO.svg" alt="IC Rename Assistant Logo" height="40" style="vertical-align:-2px;" /> IC Rename Assistant
</h1>

<p align="center"><em>115 网盘批量重命名助手（电影 / 电视剧自动规范命名）</em></p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.5.0-2ea44f" alt="Version 1.5.0" />
  <img src="https://img.shields.io/badge/platform-Tampermonkey-orange" alt="Tampermonkey" />
  <img src="https://img.shields.io/badge/site-115.com-2563eb" alt="115.com" />
</p>

## 功能特性
- 自动切换 115 旧版页面并读取当前已勾选文件
- 支持批量重命名电影与电视剧文件
- 电影命名格式：`电影名 (年份)`
- 电视剧命名格式：`剧名.S01E01`
- 支持集数偏移（例如 `E01 + 3 => E04`）
- 支持同时重命名当前母文件夹
- 支持 TMDB 搜索标准名称（需你自己的 TMDB Read Token）
- 支持预览导出与失败项导出

## 使用方式
1. 安装 Tampermonkey（或同类用户脚本管理器）。
2. 新建脚本并粘贴 [`source .js`](./source%20.js) 内容。
3. 打开 `https://115.com/` 文件列表页，勾选需要重命名的文件。
4. 在面板中确认片名、季数、集数偏移等参数后执行重命名。

## 说明
- TMDB Token 只保存在浏览器本地（`localStorage`）。
- 如果你不填写 TMDB Token，也可以使用基础重命名功能。
- 建议先用“预览/导出”确认结果再执行正式重命名。

## 文件结构
```text
IC-Rename-Assistant/
├─ source .js
└─ logo/
   └─ IC开发LOGO.svg
```

## License
MIT
