这是笔者的leetcode刷题笔记仓库，每个题目开头的注释里都有leetcode对应的链接，我都尽量用多中方法和思路对每一个题目写出题解
# 1. 安装依赖

  ```
  npm install --save-dev jest
  npm install babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime babel-preset-env @babel/preset-env
  ```
  编辑package.json

  ```
  {
    "scripts": {
      "test": "jest"
    }
  }
  ```

  编辑.babelrc
  ```
  {
    "presets": ["@babel/preset-env"]
}
  ```

# 2. 创建js文件

  ```js
  export const sum = (a, b)=> {
    return a + b;
  }
  ```

  ```js
  import {sum} from './sum.js'

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  ```

# 3. 启动测试

  ```
  npm test
  ```
显示如下即为成功
![测试](./images/test.png)

**leetcode的刷题在dev分支里面，你可直接clone dev分支**

```
git clone -b dev https://github.com/JakeZhangZJK/algorithm.git

cd leetcode

npm i

npm test
```
**注：dev分支会长期更新，直到刷完leetcode，在leetcode目录下运行`npm test`会将所有题目都跑一遍测试，运行时间可能比较长。所以建议clone main分支后新建一个自己的分支，测试一个题目就从dev分支里面复制一个过来**


