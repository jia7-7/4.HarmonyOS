# 🌟 HarmonyOS 开发初探

## 0. 写在前面

- 第一题和第二题都是准备工作，帮助你创建新工程并且熟悉预览器、模拟器的使用，本次开发无需使用真机，没有华为设备也可以放心大胆的开发

- 从第三题开始正式进入鸿蒙开发的学习，如果你已有其他领域开发经验，并且觉得视频课程过于啰嗦，可选择自行学习，但是最终所有知识点必须都要覆盖到

- 推荐替代学习资源：B站黑马程序员

- 如果你觉得第四题的Codelabs过于繁琐，也可以不跟随它的思路，自行实现相同的页面效果，但请在验收时讲清楚页面布局逻辑

- 欢迎使用AI工具辅助学习、辅助开发，**在验收时描述你在哪里学习使用了AI工具，并展示你的Prompt可作为加分项**，出题团队已验证过的AI工具：Claude Sonnet 4/4.5（最佳），ChatGPT 5（可用），Qwen 3（可用），ChatGLM-4.6（可用），DevEco Studio 自带的 Code Genie（不好用），文心一言 4.5 Turbo（不好用），DeepSeek V3/R1（不可用）

- ~~题外话：出题团队现在已经全面在日常项目里引入 Claude Sonnet 4 作为AI牛马了~~

## 1. 开发入门 · 欢迎启程

**步骤：**

1. 在华为开发者联盟官网注册并实名认证开发者账号。

2. 下载并安装 **DevEco Studio 6.0**，创建一个空白工程。

3. 启动 **Previewer（预览器）**，看到 **Hello World** 即可。
   
   - 📘 参考文档：[应用开发导读 · 快速入门](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide)
   
   - 🎥 推荐视频：[华为开发者学堂课程](https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101717494752698457)

---

## 2. 第一行代码 · Hello SDU

**步骤：**

1. 打开创建的工程，将 `"Hello World"` 改为 `"Hello SDU"`。

2. 在 `Text("Hello SDU")` 后添加 `.fontColor(Color.Red)`：
   
   ```ts
   Text("Hello SDU")
    .fontColor(Color.Red)
   ```
   
   > 💡 注意：鸿蒙中单双引号都可用于字符串，且没有“字符”概念。所有代码必须用**英文输入法和符号**。

3. 打开预览器，确认 `Hello SDU` 显示为**红色**。

4. 参考课程【使用模拟器运行应用】，将应用运行到模拟器中。
   
   - 🎥 视频：[使用模拟器运行应用](https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101717494752698457?pathId=101667550095504391)

---

## 3. 构建第一个待办应用 · 从任务出发

**必做任务：**

1. 📺 观看【ArkUI 框架介绍】课程，学习并掌握以下内容：
   
   - 声明式开发范式
   
   - 常用组件及功能
   
   - 布局能力与交互统一

2. 📺 观看【声明式 UI 语法】，学习并掌握以下内容：
   
   - 组件格式、生命周期、属性
   
   - 容器组件与常见布局
   
   - 组件状态与交互
   
   - 列表数据 ForEach

3. 📖 阅读【UI 范式】文档，学习并掌握以下内容：
   
   - 基础语法描述
   
   - 声明式 UI 描述
   
   - 创建自定义组件（了解格式即可，无需深入研究）
   
   - `if/else` 控制渲染

4. ✅ 完成【Codelabs：待办列表】**作为验收成果**

**额外加分项：**

- 阅读【UI 范式】更多内容

- 尝试独立完成【案例：待办列表】，或给该项目添加你喜欢的更多功能**作为验收成果**

- 完成【闯关习题】

📺 视频课程：[待办应用开发课程](https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101717497398588123?pathId=101667550095504391)

---

## 4. 布局实践 · 构建登录页面

**步骤：**

1. 复习【声明式 UI 语法】

2. 📺 观看【布局你的页面】，学习并掌握以下内容：
   
   - 线性布局
   
   - 层叠布局（Stack）
   
   - `Column` / `Row` 及其属性

3. 📖 阅读【布局概述】，学习并掌握以下内容：
   
   - 组件内容区
   
   - `margin`、`border`、`padding`

4. 📺 观看【组件简单页面】课程，并阅读四个相关文档，掌握常见组件用法。

5. ✅ 完成【案例：页面与数据】**作为验收成果。**

📺 视频课程：[布局与页面构建](https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101717497398588123)

---

## 5. 额外加分项 · 构建可交互的待办应用

**进阶任务：**

1. 📖 阅读[状态管理概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-overview)，了解状态管理机制。

2. 📖 阅读【状态管理（V1）】，理解以下功能的用法（不要求掌握原理）：
   
   - `@State`、`@Prop`、`@Link`
   
   - `@Provide` / `@Consume`
   
   - `LocalStorage` 与 `AppStorage`
   
   - （选学）`@Observed` / `@ObjectLink`

3. 📖 阅读 [MVVM 模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-mvvm)，了解架构设计。

4. 学习组件 `TextInput` 与 `Button` 的用法。

5. 🔧 回到【Codelabs：待办列表】代码，实现以下功能：
   
   - 添加输入框，输入待办事项标题
   
   - 添加按钮，点击后动态添加待办事项
   
   - （可选）实现数据持久化
   
   - **这将是你的验收成果**
