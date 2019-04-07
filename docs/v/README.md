# V validation

## 使用内置验证规则

在`input`过程中触发验证

<v-index></v-index>


 ```html
<ui-v ref="form1" :rules="rules">
 <ui-input placeholder="required validate" type="text" name="required"></ui-input>
 <ui-input placeholder="number validate" type="text" name="number"></ui-input>
 <ui-input placeholder="email validate" type="email" name="email"></ui-input>
 <ui-input placeholder="maxlength validate" type="text" name="max"></ui-input>
 <ui-input placeholder="minlength validate" type="text" name="min"></ui-input>
 <ui-input placeholder="password" type="password" name="password" v-model="password"></ui-input>
 <ui-input placeholder="password" type="password" name="password2" v-model="password2"></ui-input>
</ui-v>
```

```javascript
rules: {
 required: [{
   trigger: 'input',
   type: 'required',
   message: '这个input必须填写'
 }],
 number: [{
   trigger: 'input',
   type: 'number',
   message: '不是number'
 }],
 email: [{
   trigger: 'input',
   type: 'email',
   message: '不是email'
 }],
 max: [{
   trigger: 'input',
   type: 'maxLength',
   length: 10,
   message: '超过10个了'
 }],
 min: [{
   trigger: 'input',
   type: 'minLength',
   length: 10,
   message: '最少要10个'
 }],
 password: [{
     trigger: 'input',
     type: 'minLength',
     length: 3,
     message: '最少要3个'
   },
   {
     trigger: 'input',
     type: 'maxLength',
     length: 10,
     message: '最多不能超过10个'
   }, {
     trigger: 'input',
     type: 'required',
     message: '这个input必须填写'
   }
 ],
 password2: [{
   trigger: 'input',
   type: () => {
     return this.password === this.password2
   },
   message: '两次密码输入不一致'
 }],
}
```


## 自定义验证规则

<v-custom></v-custom>



```html
 <ui-v :rules="rules" ref="form">
  <ui-input placeholder="异步验证" type="text" name="async" :loading="loading1"></ui-input>
  <ui-input placeholder="自定义验证function，不能包含123和456" type="text" name="function" v-model="value1"></ui-input>
  <ui-input placeholder="自定义验证regex，/^\s+$/" type="text" name="regex" v-model="value2"></ui-input>
</ui-v>
```

```javascript
rules: {
 'async': [{
   trigger: 'input',
   type: () => {
     return new Promise((resolve, reject) => {
       this.loading1 = true
       setTimeout(() => {
         this.loading1 = false
         reject()
       }, 3000)
     })
   },
   message: '出错了'
 }],
 'function': [{
     trigger: 'input',
     type: (value) => {
       if (value.includes('123')) {
         return false
       } else {
         return true
       }
     },
     message: '不能包含123'
   },
   {
     trigger: 'input',
     type: (value) => {
       if (value.includes('456')) {
         return false
       } else {
         return true
       }
     },
     message: '不能包含456'
   }

 ],
 'regex': [{
   trigger: 'input',
   type: /^\s+$/,
   message: '输入什么都是错的'
 }]
},
```



## 触发规则

<v-submit></v-submit>

手动触发`trigger`为`submit`,将返回一个`promise` ，其`reject`方法返回一个包含错误信息的`Array`
触发方法支持所有的`html input`事件


```html
<ui-v :rules="rules" ref="form">
      <ui-input name="email"></ui-input>
    </ui-v>
    <ui-button size="sm" @click.native="validate">点我验证</ui-button>
```

```javascript
data() {
    return {
      rules: {
        email: [{
          trigger: 'submit',
          type: 'email',
          message: '不是email'
        }, {
          trigger: 'blur',
          type: 'required',
          message: '必须填写'
        }],

      }
    }
  },
  methods: {
    validate() {
      this.$refs['form'].validate().then(_ => {
        this.$UiToast('没错！')
      }).catch(errorArr => {
        // errorArr : [{name:'email',message:'不是email'},{name:'trigger',message:'必须填写'}]
        this.$UiToast.error('有错')
      })
    }
  }
```


#### 内置方法和事件

向某个input/textarea手动添加错误

```
this.$refs['form'].parseError({name,message})
```

手动清除input/textarea的错误

```
this.$refs['form'].clearErrors({name}) //清除所有
this.$refs['form'].removeError({name,message}) //删除单项错误

```


`add-error` 增加了错误
`remove-error` 单项错误被移除
`clear-errors` 错误被清除
`validate-start` 验证开始
`validate-finish` 验证结束
