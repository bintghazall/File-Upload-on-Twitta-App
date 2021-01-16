<template>
    <form>
        <input type="file"
        accept="image/png, image/jpeg, image/jpg, image/tiff"
        @change="handleFileUploads">
        <div v-if="!file" @click="attachFile" class="attach-file">Attach a File</div>
        <div v-else class="image-preview">
           <!--to remove uploaded imag-->
            <span  class="cancel" @click="file=null">
                <!--<i class="fa.fas-window-close"></i>-->
                <h1>X</h1>
                <h2>Cancel</h2>
                </span>
            <img v-if="file" />

            <button>Upload</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'FileUploads',
    data() {
        return {
            file:null
        }
    },
    methods:{
        attachFile(){
            const el = document.querySelector('input')

            el.click()    
        },
        handleFileUploads(event){
            this.file = event.target.files[0];

            var reader = new FileReader();

            reader.onload = function () {
                const el = document.querySelector(".image-preview > img");
                el.src = reader.result;
            };
            reader.readAsDataURL(this.file);
        }
    }
}
</script>

<style scoped>
form{
    width: 50%;
    margin: 15vh auto
}

form > input {
    visibility: hidden;
}

.image-preview > h1{
    font-size: 10rem;
    margin-bottom: 10px;
    font-weight: 600;
    text-align: right;
}

.image-preview > img {
    display: block;
    margin: 0 auto;
    width: 100%;
}

.attach-file{
    width: 35%;
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0 auto;
    cursor: pointer;
    background-color: aquamarine;
    padding: .5rem 1rem;
    border-radius: 5px;
    text-align: center;
}
.cancel{
    display: flex;
    justify-content: space-between;
    /*gap: 80%;*/
    cursor: pointer;
}
button{
    font-size: 1.2rem;
    font-weight: 600;
    color: aliceblue;
    background-color: darkmagenta;
    border-radius: 5px;
    padding: .6rem 1rem;
    display: block;
    margin: 1rem auto;
}
</style>