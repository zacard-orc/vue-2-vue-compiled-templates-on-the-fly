<template>
  <div id="app">
    These links are rendered dynamically:
    <br />
    <!-- Global Components -->
    <DynamicTemplate
      template="<router-link to='/user/1'>Show user 1 page</router-link>"
    />
    <br />
    <!-- Dynamic props -->
    <DynamicTemplate
      template="<router-link :to='userlink'>Show user 2 page</router-link>"
      :userlink="userlink"
    />
    <br />
    <!-- Passing components -->
    <DynamicTemplate
      template="<em-component msg='hi, I´m a custom component' />"
      :components="components"
    />
    <br />
    <!-- Also works with lazy loaded components -->
    <DynamicTemplate
      template="<bold-component>I'm lazily loaded custom component!</bold-component>"
      :components="lazyComponents"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import DynamicTemplate from "./components/DynamicTemplate";
import EmComponent from "./components/EmComponent";

export default {
  name: "App",
  components: {
    DynamicTemplate,
  },
  data() {
    return {
      userlink: "/user/2",
      components: { EmComponent },
      lazyComponents: {
        BoldComponent: () => import("./components/BoldComponent"),
      },
    };
  },
};
</script>
