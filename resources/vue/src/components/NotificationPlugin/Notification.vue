<template>
   <div
         @click="close()"
         data-notify="container"
         class="alert open alert-with-icon"
         role="alert"
         :class="[verticalAlign, horizontalAlign, alertType]"
         :style="customPosition"
         data-notify-position="top-center">
      <button type="button" aria-hidden="true" class="close" data-notify="dismiss" @click="close">
         <md-icon>close</md-icon>
      </button>
      <i data-notify="icon" class="material-icons">{{ icon }}</i>
      <span data-notify="message" v-html="message"></span>
   </div>
</template>

<script>
export default {
    name: "notification",
    props: {
        message: String,
        icon: String,
        verticalAlign: {
            type: String,
            default: "top"
        },
        horizontalAlign: {
            type: String,
            default: "center"
        },
        type: {
            type: String,
            default: "info"
        },
        timeout: {
            type: Number,
            default: 2500
        },
        timestamp: {
            type: Date,
            default: () => new Date()
        }
    },
    data() {
        return {
            elmHeight: 0
        };
    },
    computed: {
        hasIcon() {
            return this.icon && this.icon.length > 0;
        },
        alertType() {
            return `alert-${this.type}`;
        },
        customPosition() {
            let initialMargin = 20;
            let alertHeight = this.elmHeight + 10;
            let sameAlertsCount = this.$notifications.state.filter(alert => {
                return (
                    alert.horizontalAlign === this.horizontalAlign &&
                    alert.verticalAlign === this.verticalAlign &&
                    alert.timestamp <= this.timestamp
                );
            }).length;
            const pixels = (sameAlertsCount - 1) * alertHeight + initialMargin;
            return {
                top: pixels + 'px'
            };
        }
    },
    methods: {
        close() {
            this.$emit("on-close", this.timestamp);
        }
    },
    mounted() {
        this.elmHeight = this.$el.clientHeight;
        if (this.timeout) {
            setTimeout(this.close, this.timeout);
        }
    }
};
</script>

<style lang="scss" scoped>
   @media screen and (max-width: 991px) {
      .alert {
         width: auto !important;
         margin: 0 10px;

         &.left {
            left: 0 !important;
         }

         &.right {
            right: 0 !important;
         }

         &.center {
            margin: 0 10px !important;
         }
      }
   }

   .alert {
      z-index: 100;
      cursor: pointer;
      position: fixed;
      width: 40%;

      &.center {
         left: 0;
         right: 0;
         margin: 0 auto;
      }

      &.left {
         left: 20px;
      }

      &.right {
         right: 20px;
      }

      i.md-icon {
         color: white;
      }
   }
</style>
