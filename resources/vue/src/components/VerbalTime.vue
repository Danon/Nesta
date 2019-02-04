<template>
   <span>
      {{text}}
      <md-tooltip>In {{seconds}} seconds</md-tooltip>
   </span>
</template>

<script>
export default {
    props: {
        date: {
            type: Date
        }
    },

    created() {
        this.offset = this.getOffset();
        this.interval = setInterval(() => this.offset = this.getOffset(), 1000);
    },

    destroyed() {
        clearInterval(this.interval);
    },

    data() {
        return {
            offset: null,
            interval: null
        }
    },

    computed: {
        seconds() {
            return Math.round(this.offset);
        },

        text() {
            const seconds = this.seconds;

            if (seconds < 1) {
                return this.$t('Overdue');
            }

            if (seconds < 60) {
                return this.$t('In {seconds} seconds', {seconds});
            }

            const minutes = Math.round(seconds / 60);
            if (minutes < 60) {
                return this.$t(`In {minutes} minutes`, {minutes});
            }
            const hours = Math.round(minutes / 60);
            if (hours < 49) {
                return this.$t('In {hours} hours', {hours});
            }

            const days = Math.round(hours / 24);
            if (days < 365) {
                return this.$t('In {days} days', {days});
            }

            return seconds;
        }
    },

    methods: {
        getOffset() {
            return (this.date.getTime() - Date.now()) / 1000;
        }
    }
}
</script>
