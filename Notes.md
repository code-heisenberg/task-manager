What is useEffect?
In React, **useEffect** is a hook that lets you run side effects in function components.

A "side effect" is:
Anything that happens outside of rendering — like:

Fetching data

Direct DOM manipulation

Reading/writing to localStorage

Setting up timers

Subscribing to events



### Syntax

```
useEffect(() => {
    // effect code runs after render
}, [])
```


### Examples
Why useEffect is Needed in Your App
In your Task Manager app, you want two side effects:

1. Load Tasks from localStorage on Page Load

This only runs once after the component mounts

Reads tasks from localStorage and initializes your state

Without this, your app starts with an empty list every time

2. Save Tasks to localStorage When They Change

Every time the tasks state changes (add/delete/complete), we want to persist it

useEffect with [tasks] ensures it only runs when tasks change


