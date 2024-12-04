# react router dom
- in which we can perform multipage activity in a single page application
- react route dom is a library in react
## steps to create a route
- step 1
    - install the library 
    - npm i react-router
- step 2
    - create a navBar with <Link>, and <NavLink>
- step 3
    - create a route using 
    ``` 
    const route = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<App />} >
            <Route path='' element={<Home />} />
            <Route path='/about' element={<About />} />
    </Route>
        )
    )
    ```
- step 4
    - user **RouterProvider** in main.jsx
    - ```
        <RouterProvider router={route} />
        ```
    