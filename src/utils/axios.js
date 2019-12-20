const VueAxios = {
  vm: {},
  install(Vue, instance) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    if (!instance) {
      console.error('You have to install axios');
      return;
    }
    console.log('installed axios');

    Vue.axios = instance;

    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get() {
          return instance;
        },
      },
      $http: {
        get: function get() {
          return instance;
        },
      },
    });
  },
};

/**
 * Axios挂载处理
 */
export { VueAxios };
