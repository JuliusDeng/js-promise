# promise

### 1-20 知识讲解 21-41 自定义Promise

### 11.50 03 lectrue

## 1 Fn.prototype(): ()的左边必然是一个函数，而.的左边必然是一个对象（你应该看了代码就知道它的数据类型）
## 
## 2 Fn.prototype()：将一个函数作为对象使用时（当使用.的时候，操作这个函数的属性或者方法的时候），可将这个函数成为“函数对象”；

## 3 函数对象会继承原型链上的方法，而实例对象是没有的（Fn.bind()、Fn.call（）等）

## 4  Fn() -函数：()的左边是函数；
##    Fn.prototype() -对象：.的左边是对象； --> 函数对象
##                                          --> （实例）对象