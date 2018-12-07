# Typer

<typer-typer></typer-typer>

<code-code title="usage">
```html
<ui-typer content="Typer 模拟打字机效果" loop cursor="🦛"></ui-typer>
```
</code-code>

props

|prop|type|default|description|
|--|--|--|--|
|content|String|required||
|speed|Number|4|1-5|
|loop|Boolean|false||
|loopDelay|Number|1000|循环暂停时间|
|cursor|String|||

events

`stop` 当第一次动画完成，loop模式下没有此事件

`back` 开始loop