<template>
  <div>
    <div class="">
      Dashboard Here
    </div>
    <div class="mt-4">
      <theme-button @click="alert()">Alert</theme-button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from "vuex";
import themeButton from "../../components/form/Button";
export default {
  name: "Dashboard",
  components: {
    themeButton
  },
  data() {
    return {
      number: 0
    };
  },
  created() {
    this.flash({
      status: "warning",
      message: "This api response alert",
      headline: "Success"
    });

      window.fbAsyncInit = function() {
          FB.init({
              appId      : 1119955541736029,
              cookie     : true,
              xfbml      : true,
              version    : 'v8.0'
          });

          FB.AppEvents.logPageView();

          FB.getLoginStatus(function(response) {
              // statusChangeCallback(response);
              console.log(statusChangeCallback(response));
          });


      };

      (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  },
  methods: {
    ...mapActions("flash", ["flash"]),
    alert() {
      this.number = this.number + 1;
      this.flash({ status: "info", headline: "The number is " + this.number });
    }
  }
};
</script>
