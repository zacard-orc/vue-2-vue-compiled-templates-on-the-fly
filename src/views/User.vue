<template>
  <div>
    <h1>User page</h1>
    <div>{{ $route.params.id }}</div>
    Go back to home: <router-link to="/">home</router-link>
  </div>
</template>
