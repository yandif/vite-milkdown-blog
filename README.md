
## Vite 2.0 + React + Ant Design 开发环境搭建

#### Vite 初始化 React 项目
`npm init @vitejs/app vite-react-app --template react`

#### Vite 配置
- `server.port`：开发环境端口配置。
- `env`：获得环境变量（开发、测试、正式）。
- `axios`：根据环境变量二次封装 axios HTTP 请求库。
- `Ant Design`：按需加载组件。
- `Ant Design`：theme 主题色配置。
- `resolve.alias`：配置路径变量。
- `server.proxy`：开发环境接口代理

### milkdown
```bash
npm i @milkdown/core @milkdown/react @milkdown/plugin-listener @milkdown/preset-gfm @milkdown/plugin-history @milkdown/plugin-prism @milkdown/plugin-tooltip @milkdown/plugin-math @milkdown/plugin-slash @milkdown/plugin-cursor @milkdown/theme-nord prism-themes
```
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
```