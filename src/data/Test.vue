<template>
    <div class="test"></div>
</template>
<script>
export default {
    name: 'Test',
    props: {},
    data()
    {
        return {
            data: null
        }
    },
    async created()
    {
        await this.getFetch().then((res) =>
        {
            this.callBack()
        })
    },
    methods: {
        getFetch()
        {
            let body = {
                "api_key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTE0ODc5MTIsInVzZXJfaWQiOjF9.mC4iaZ015L98lKjP4UPbBbbUXkg40muM1edkWHPjCK4"
            };

            return fetch('https://photon.volta.ai/wp-json/volta/v1/token_info?api_key=', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(body),
            })
                .then(response => response.json())
                .then(data =>
                {
                    this.data = data
                    console.log('Success:', data);
                })
                .catch((error) =>
                {
                    console.error('Error:', error);
                });
        },
        callBack()
        {
            console.log(this.data);
        }
    }
};
</script>
<style scoped>
</style>
