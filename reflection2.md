## Why is context useful?

Context is useful because it allows us to share data directly between components across the component tree without manually passing props through every level. It acts like a global 
shared state for a section of the app, and any component that consumes the Context will re-render whenever the Context value changes.

## How is it different from local state?

The main difference is scope and accesibility. `useState` is only accesible by the component that defines it and its immediate children via props. On the other hand `useContext` can be shared 
accross any components that is wrapped in a Provider, regardless of the tree's depth.

## What would prop drilling look like here?

Our current components that use the shared data are `CounterDisplay` and `CounterControls`. If we added more components in between them, such as a Sidebar or another wrapper component, 
those intermediate components would also need to receive `count`, `increment`, and `decrement` as props just so they could pass them down further.

Even though those components do not use the data themselves, they still have to handle and forward the props. That unnecessary passing of props through multiple layers of components
is called **prop drilling**.
