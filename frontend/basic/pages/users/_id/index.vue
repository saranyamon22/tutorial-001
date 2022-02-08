<template>
    <h2>Wellcome : {{$route.params.id}}</h2>
</template>

<script>
export default{
    validate(data){
        return /^\d+$/.test(data.params.id)
    }
}
</script>
