# Vue3 快速上手

## 1.Vue3 簡介

- 2020 年 9 月 18 日，Vue.js 發布 3.0 版本，代號：One Piece（海賊王）
- com.com 2 個 ue 年多、[ 200+次提交](https://github/vuejs-next/graphmit-activity)、[ 20RFC ](https : //github. vuejs/rfcs/tree/master/active-rfcs)、[600+次 PR ](https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp% 2Fdependabot-preview+)、[ 99 位貢獻者](https://github.com/vuejs/vue-next/graphs/contributors)
- github 上的 tags 地址：https://github.com/vuejs/vue-next/releases/tag/v3.0.0

## 2.Vue3 帶來開源

### 1.性能的提升

-包裝尺寸減少 41%

-快速渲染快 55%, 更新渲染快 13%

-內存減少 54%

……

### 2.源碼的升級

-使用 Proxy 而不是 defineProperty 響應式

-虛擬 DOM 的實現和 Tree-Shaking

……

### 3.擁抱 TypeScript

- Vue3 可以更好的支持 TypeScript

### 4.新的特性

1.組合 API（組合 API）

    -設置配置
    -參考與反應
    - watch與watchEffect
    -提供與註入
    - ......

2.新的組合組件 -片段 -傳送 -懸念 3.其他改變

    -新的生命週期鉤子
    -數據選項應按時聲明為一個函數
    -移除作為 v-on 的物質支持符的 keyCode
    - ......

# 一、創建 Vue3.0 工程

## 1.使用 vue-cli 創建

官方文檔：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

```bash
# #查看@vue/cli版本，確保@vue/cli版本在4.5.0以上
Vue--版本
# # 安裝或者升級你的@vue/cli
npm install -g @vue/cli
##創建
vue create vue_test
##啟動
cd vue_test
npm run serve
```

## 2. 使用 vite 創建

官方文檔：https://v3.cn.vuejs.org/guide/installation.html#vite

vite 官網：https://vitejs.cn

-什麼是 vite？——新一代高端製造工具。 -優勢： -開發環境中，無需打包操作，可快速的冷啟動。 -輕量快速的熱重載（HMR）。 -的真正完成程序，不再等待整個應用程序編譯。 -傳統製造與 vite 製造對比圖

<img src="./public/vue_webpack架構.png" style="width:500px;height:280px;float:left" />
<img src="./public/vue_vite架構.png" style="width:480px;height:280px" />

```bash
##創建工程
npm init vite-app <project-name>
##進入工程目錄
cd  <project-name>
##安裝依賴
npm install
##運行
npm run dev
```

# 二、常用 Composition API

官方文檔：https://v3.cn.vuejs.org/guide/composition-api-introduction.html

## 1.拉開序幕的設置

1. 理解：Vue3.0 中一個新的配置項，是一個函數。
2. setup 是所有<strong style="color:#DD5145">Composition API（組合 API）</strong><i style="color:gray;font-weight:bold">“表演的舞台”</i >。
3. 組件方法中所要的均配置：數據、等等。
4. 設置類的返回值：
   1. 如果返回一個對象，對像中的屬性、方法，則在模板中均可以直接使用。（重點！）
   2. <span style="color:#aad">若返回一個渲染函數：則可以自定義渲染內容。（了解）</span>
5. 注意點：
   1. 盡量不要與 Vue2.x 配置混用
      - Vue2.x 配置（data、methos、computed...）中<strong style="color:#DD5145">可以訪問</strong>setup 中的屬性、方法。
      - 但在 setup 中<strong style="color:#DD5145">不能訪問</strong>Vue2.x 配置（data、methos、computed...）。
      - 如果有重名，設置優先。
   2. setup 是一個異步函數，因為返回值不再是返回的對象，承諾的屬性，模板不到重新變成對像中的。 ）

## 2.ref 函數

- 作用：定義一個響應式的數據
- 語法：`const xxx = ref(initValue)`
  - 創建一個包含響應式數據的<strong style="color:#DD5145">引用對象（reference object，簡稱 ref object）</strong>。
  - JS 中操作數據：`xxx.value`
  - 模板中讀取數據：`不需要.value，直接：`<div>{{xxx}}</div>`
- 備註：
  - 接收的數據可以是：基本類型，也可以是對像類型。
  - 基本類型的數據：響應式仍然是靠`Object.defineProperty()`的`get`與`set`完成的。
  - 對像類型的數據：內部<i style="color:gray;font-weight:bold">“求助”</i>了 Vue3.0 中的一個新函數——`reactive`函數。

## 3.reactive 函數

- 作用：定義一個<strong style="color:#DD5145">對像類型</strong>的響應式數據（基本類型不要使用它，使用`ref`函數）
- 語法：`const 代理對象= reactive(源對象)`接收一個對象（或目錄），返回一個<strong style="color:#DD5145">代理對象（Proxy 的實例對象，簡稱代理對象） ）</strong>
- 反應式定義的響應式數據是“深層次的”。
- 基於 ES6 的 Proxy 實現，通過內部代理對像操作源對象內部數據進行操作。

## 4.Vue3.0 中的響應式處理

### vue2.x 的響應式

- 實現原理：

  - 對象類型：通过`Object.defineProperty()`對屬性的讀取、修改進行攔截（數據劫持）。

  - 數組類型：通過重寫更新數組的一系列方法來實現攔截。（對數組的變更方法進行修改）。

    ```js
    Object.defineProperty(data, "count", {
      get() {},
      set() {},
    });
    ```

- 存在问题：
  - 新增屬性、刪除屬性, 界面不會更新。
  - 直接通過下標修改數組, 界面不會自動更新。

### Vue3.0 的響應式

- 實現原理:

  - 通過 Proxy（代理）: 攔截對象中任意屬性的變化, 包括: 屬性值的讀寫、屬性的添加、屬性的刪除等。
  - 通過 Reflect（反射）: 對原對象的屬性進行操作。
  - MDN 文檔中描述的 Proxy 与 Reflect：

    - Proxy：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

    - Reflect：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

      ```js
      new Proxy(data, {
        // 攔截讀取屬性值
        get(target, prop) {
          return Reflect.get(target, prop);
        },
        // 攔截設置屬性值或添加新屬性
        set(target, prop, value) {
          return Reflect.set(target, prop, value);
        },
        // 攔截刪除屬性
        deleteProperty(target, prop) {
          return Reflect.deleteProperty(target, prop);
        },
      });

      proxy.name = "tom";
      ```

## 5.reactive 對比 ref

- 從定義數據角度對比：
  - 引用定義：<strong style="color:#DD5145">基本類型數據</strong>。
  - 響應式定義使用：<strong style="color:#DD5145">對象（或目錄）類型數據</strong>。
  - 備註：ref 也可以內部使用<strong style="color:#DD5145">對象（或目錄）類型數據</strong>，它會自動通過``reactive```轉為<strong style= "color:#DD5145">代理對象</strong>。
- 從原理角度對比：
  - ref 通過`Object.defineProperty()`的`get`與`set`來實現響應式（數據劫持）。
  - 響應劫持通過使用<strong style="color:#DD5145">Proxy</strong>實現響應式（數據持證），並通過<strong style="color:#DD5145">Reflect</strong>操作<strong style="color:orange">源對象</strong>內部的數據。
- 從使用角度對比：
  - ref 定義的數據：操作數據<strong style="color:#DD5145">需要</strong> ` .value``，讀取數據時模板中直接讀取<strong style="color:# DD5145">不需要</strong>  `value```。
  - 反應性定義的數據：操作數據與讀取數據：<strong style="color:#DD5145">均不需要</strong> ``.value```。

## 6.setup 的注意事項

- 設置執行的時機

  - 在執行一次之前創建之前，這是未定義的。

- 設置的參數
  - props：對象，包含：組件外部提交過來，並且內部組件接收了的屬性。
  - 上下文：對像對象
    - attrs: 對象值，包含：組件外部傳遞過來，但沒有在 props 配置中聲明的屬性，相當於`this.$attrs`。
    - slot：收到的插槽內容，相當於`this.$slots`。
    - emit: 分發事件的函數，相當於`this.$emit`。

## 7.計算屬性與監視

### 1.computed 函数

- 與 Vue2.x 中 computed 配置功能一致

- 寫法

  ```js
  import {computed} from 'vue'

  setup(){
      ...
  	//計算屬性--簡寫
      let fullName = computed(()=>{
          return person.firstName + '-' + person.lastName
      })
      //計算屬性--完整寫法
      let fullName = computed({
          get(){
              return person.firstName + '-' + person.lastName
          },
          set(value){
              const nameArr = value.split('-')
              person.firstName = nameArr[0]
              person.lastName = nameArr[1]
          }
      })
  }
  ```

  ### 2.watch 函数

- 與 Vue2.x 中 watch 配置功能一致

- 兩個小"坑"：

  - 監視 reactive 定義的響應式數據時：oldValue 無法正確獲取、強制開啟了深度監視（deep 配置失效）。
  - 監視 reactive 定義的響應式數據中某個屬性時：deep 配置有效。

  ```js
  //情况一：監視ref定義的響應式數據
  watch(
    sum,
    (newValue, oldValue) => {
      console.log("sum變化了", newValue, oldValue);
    },
    { immediate: true }
  );

  //情况二：監視多個ref定義的響應式數據
  watch([sum, msg], (newValue, oldValue) => {
    console.log("sum或ms變化了", newValue, oldValue);
  });

  /* 情況三：監視reactive定義的響應式數據
  			若watch監視的是reactive定義的響應式數據，則無法正確獲得oldValue！ ！
  			若watch監視的是reactive定義的響應式數據，則強制開啟了深度監視 
  */
  watch(
    person,
    (newValue, oldValue) => {
      console.log("person變化了", newValue, oldValue);
    },
    { immediate: true, deep: false }
  ); //此處的deep配置不再奏效

  //情況四：監視reactive定義的響應式數據中的某個屬性
  watch(
    () => person.job,
    (newValue, oldValue) => {
      console.log("person的job變化了", newValue, oldValue);
    },
    { immediate: true, deep: true }
  );

  //情況五：監視reactive定義的響應式數據中的某些屬性
  watch(
    [() => person.job, () => person.name],
    (newValue, oldValue) => {
      console.log("person的job變化了", newValue, oldValue);
    },
    { immediate: true, deep: true }
  );

  //特殊情况
  watch(
    () => person.job,
    (newValue, oldValue) => {
      console.log("person的job變化了", newValue, oldValue);
    },
    { deep: true }
  ); //此處由於監視的是reactive素定義的對像中的某個屬性，所以deep配置有效
  ```

### 3.watchEffect 函数

- watch 的套路是：既要指明監視的屬性，也要指明監視的回调。

- watchEffect 的套路是：不用指明監視哪個屬性，監視的回調中用到哪個屬性，那就監視哪個屬性。

- watchEffect 有點像 computed：

  - 但 computed 注重計算出來的值（回調函數的返回值），所以必需要寫返回值。
  - 而 watchEffect 更注重的是過程（回调函數的函數体），所以不用寫返回值。

  ```js
  //watchEffect所指定的回調中用到的數據只要發生變化，則直接重新執行回調。
  watchEffect(() => {
    const x1 = sum.value;
    const x2 = person.age;
    console.log("watchEffect配置的回調執行了");
  });
  ```

## 8.生命週期

<div style="border:1px solid black;width:380px;float:left;margin-right:20px;"><strong>vue2.x的生命週期</strong><img src="https://cn.vuejs.org/images/lifecycle.png" alt="lifecycle_2" style="zoom:33%;width:1200px" /></div>

<div style="border:1px solid black;width:510px;height :985px;float:left"><strong>vue3.0的生命週期</strong><img src="https://v3.cn.vuejs.org/images/lifecycle.svg" alt="lifecycle_2" style ="縮放:33%;寬度:2500px" /></div>

- Vue3.0 中可以繼續使用 Vue2.x 中的生命週期鉤子，但有兩個被更名：
  - ` beforeDestroy`改名為`beforeUnmount`
  - `銷毀`改名為`卸載`
- Vue3.0 也提供了 Composition API 形式的生命週期鉤子，與 Vue2.x 中鉤子的關係如下：
  - `beforeCreate` ===> `setup()`
  - `created` =======> `setup()`
  - `beforeMount` ===> `onBeforeMount`
  - `mounted` =======> `onMounted`
  - `beforeUpdate` ===> `onBeforeUpdate`
  - `更新` =======> `onUpdated`
  - `beforeUnmount` ==> `onBeforeUnmount`
  - ` unmounted` =====> `onUnmounted`

## 9.自定義 hook 函數

- 什麼是 hook？——本質是一個函數，把 setup 中使用的 Composition API 進行封裝。

- 類似於 vue2.x 中的 mixin。

- 自定義 hook 的優勢：復用代碼，讓設置中的邏輯更清晰易懂。

## 10.toRef

- 作用: 創建一個 ref 對象，其 value 值指向另一個對像中的某個屬性。
- 語法:`const name = toRef(person,'name')`
- 應用: 要將響應式對像中的某個屬性單獨提供給外部使用時。

- 擴展：`toRefs` 與`toRef`功能一致，但可以批量創建多个 ref 對象，語法：`toRefs(person)`

# 三、其它組合 API

## 1.shallowReactive 與 shallowRef

- shallowReactive：只處理對象最外層屬性的響應式（淺響應式）。
- shallowRef：只處理基本數據類型的響應式，不進行對象的響應式處理。

- 什麼時候使用？
  - 如果有一個對像數據，結構比較深，但變化時只是外層屬性變化===> shallowReactive。
  - 如果不會有一個對像數據，功能就不會修改該對像中的屬性，而是生的新對象來替換 ===> shallowRef。

## 2.readonly 與 shallowReadonly

- 一個響應式數據變成只讀的（讓深讀）。
- shallow 一個響應式數據變成只讀的：只讀的（讓淺讀）。
- 應用場景：不希望數據（尤其是這個數據是來自與其他組件修改的時候）被時。

## 3.toRaw 與 markRaw

- toRaw：
  - 作用：將一個由`reactive`生成的<strong style="color:orange">響應式對象</strong>轉為<strong style="color:orange">普通對象</strong> 。
  - 使用場景：用於讀取響應式對象的普通對象，對這個普通對象的所有操作，不會引發更新頁面。
- 標記原始：
  - 作用：一個標記式的對象，永遠不會再成為響應對象。
  - 應用場景： 1.有些值不應該被設置為響應式的，例如復雜的類庫。 2.當渲染具有不可變數據源的大列表時，跳過響應式轉換可以提高性能。

## 4.customRef

- 作用：創建一個自定義的 ref，並對其依賴項跟蹤和更新觸發進行顯示控制。

- 實現防抖效果：

  ```vue
  <template>
    <input type="text" v-model="keyword" />
    <h3>{{ keyword }}</h3>
  </template>

  <script>
  import { ref, customRef } from "vue";
  export default {
    name: "Demo",
    setup() {
      // let keyword = ref('hello') //使用Vue準備好的内置ref
      //自定义一个myRef
      function myRef(value, delay) {
        let timer;
        //通过customRef去實現自定義
        return customRef((track, trigger) => {
          return {
            get() {
              track(); //告诉Vue這個value值是需要被“追蹤”的
              return value;
            },
            set(newValue) {
              clearTimeout(timer);
              timer = setTimeout(() => {
                value = newValue;
                trigger(); //告訴Vue去更新界面
              }, delay);
            },
          };
        });
      }
      let keyword = myRef("hello", 500); //使用程序員自定義的ref
      return {
        keyword,
      };
    },
  };
  </script>
  ```

## 5.provide 与 inject

<img src="https://v3.cn.vuejs.org/images/components_provide.png" style="width:300px" />

- 作用：實現<strong style="color:#DD5145">祖與後代祖件間的</strong>通信

- 套路：父组件有一个 `provide` 選項來提供數據，後代組件有一個 `inject` 選項來開始使用這些數據

- 具體寫法：

  1. 祖組件中：

     ```js
     setup(){
         ......
         let car = reactive({name:'benz',price:'40万'})
         provide('car',car)
         ......
     }
     ```

  2. 後代組件中：

     ```js
     setup(props,context){
         ......
         const car = inject('car')
         return {car}
         ......
     }
     ```

## 6.響應式數據的判斷

- isRef: 檢查一個值是否為一個 ref 對象
- isReactive: 檢查一個對像是否是由 `reactive` 創建的響應式代理
- isReadonly: 檢查一個對像是否是由 `readonly` 創建的只讀代理
- isProxy: 檢查一個對像是否是由 `reactive` 或者 `readonly` 方法創建的代理

# 四、Composition API 的優勢

## 1.Options API 存在的問題

使用傳統 OptionsAPI 中，新增或者修改一個需求，就需要分別在 data，methods，computed 裡修改 。

<div style="width:600px;height:370px;overflow:hidden;float:left">
    <img src="./public/vue2-p1.gif" style="width:600px;float:left" />
</div>
<div style="width:300px;height:370px;overflow:hidden;float:left">
    <img src="./public/vue2-p2.gif" style="zoom:50%;width:560px;left" /> 
</div>

## 2.Composition API 的優勢

我們可以更加優雅的組織我們的代碼，函數。讓相關功能的代碼更加有序的組織在一起。

<div style="width:500px;height:340px;overflow:hidden;float:left">
    <img src="./public/vue3-p1.gif"style="height:360px"/>
</div>
<div style="width:430px;height:340px;overflow:hidden;float:left">
    <img src="./public/vue3-p2.gif"style="height:360px"/>
</div>

# 五、新的组件

## 1.Fragment

- 在 Vue2 中: 組件必須有一個根標籤
- 在 Vue3 中: 組件可以沒有根標籤, 內部會將多個標籤包含在一個 Fragment 虛擬元素中
- 好處: 減少標籤層級, 減小內存佔用

## 2.Teleport

- 什麼是 Teleport? —— `Teleport` 是一種能夠將我們的<strong style="color:#DD5145">組件 html 結構</strong>移動到指定位置的技術。

  ```vue
  <teleport to="移動位置">
  	<div v-if="isShow" class="mask">
  		<div class="dialog">
  			<h3>我是一個彈窗</h3>
  			<button @click="isShow = false">關閉彈窗</button>
  		</div>
  	</div>
  </teleport>
  ```

## 3.Suspense

- 等待異步組件時渲染一些額外內容，讓應用有更好的用戶體驗

- 使用步驟：

  - 異步引入組件

    ```js
    import { defineAsyncComponent } from "vue";
    const Child = defineAsyncComponent(() => import("./components/Child.vue"));
    ```

  - 使用`Suspense`包裹組件，並配置好`default` 與 `fallback`

    ```vue
    <template>
      <div class="app">
        <h3>我是App组件</h3>
        <Suspense>
          <template v-slot:default>
            <Child />
          </template>
          <template v-slot:fallback>
            <h3>加載中.....</h3>
          </template>
        </Suspense>
      </div>
    </template>
    ```

# 六、其他

## 1.全局 API 的轉移

- Vue 2.x 有許多全局 API 和配置。

  - 例如：註冊全局組件、註冊全局指令等。

    ```js
    //註冊全局組件
    Vue.component('MyButton', {
      data: () => ({
        count: 0
      }),
      template: '<button @click="count++">Clicked {{ count }} times.</button>'
    })

    //註冊全局指令
    Vue.directive('focus', {
      inserted: el => el.focus()
    }
    ```

- Vue3.0 中對這些 API 做出了調整：
  - 將全局的 API，即：`Vue.xxx`調整到應用實例（`app`）上
    | 2.x 全局 API（`Vue`） | 3.x 實例 API (`app`) |
    | ------------------------- | ------------------------------------------- |
    | Vue.config.xxxx | app.config.xxxx |
    | Vue.config.productionTip | <strong style="color:#DD5145">移除</strong> |
    | Vue.component | app.component |
    | Vue.directive | app.directive |
    | Vue.mixin | app.mixin |
    | Vue.use | app.use |
    | Vue.prototype | app.config.globalProperties |

## 2.其他改變

- data 選項應始終被聲明為一個函數。
- 過度類名的更改：

  - Vue2.x 寫法
    ```css
    .v-enter,
    .v-leave-to {
      opacity: 0;
    }
    .v-leave,
    .v-enter-to {
      opacity: 1;
    }
    ```
  - Vue3.x 写法

    ```css
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }

    .v-leave-from,
    .v-enter-to {
      opacity: 1;
    }
    ```

- <strong style="color:#DD5145">移除</strong>keyCode 作為 v-on 的修飾符，同時也不再支持`config.keyCodes`
- <strong style="color:#DD5145">移除</strong>`v-on.native`修飾符
  - 父組件中綁定事件
    ```vue
    <my-component
      v-on:close="handleComponentEvent"
      v-on:click="handleNativeClickEvent"
    />
    ```
  - 子組件中聲明自定義事件
    ```vue
    <script>
    export default {
      emits: ["close"],
    };
    </script>
    ```
- <strong style="color:#DD5145">移除</strong>過濾器（filter）
  > 過濾器雖然這看起來很方便，但它需要一個自定義語法，打破大括號內表達式是 “只是 JavaScript” 的假設，這不僅有學習成本，而且有實現成本！建議用方法調用或計算屬性去替換過濾器。
- ......
