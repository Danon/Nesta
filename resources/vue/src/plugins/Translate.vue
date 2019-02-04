<template>
   <span v-text="translatedText"></span>
</template>

<script>
export default {
    props: {
        text: {
            default: null
        }
    },
    computed: {
        translatedText() {
            const getKey = () => {
                if (this.text === null) {
                    return this.$slots.default[0].text;
                }
                return this.text;
            };

            return this.$t(getKey());
        }
    }
}
</script>
