<template>
    <div>
        <div v-for="(whiteboard, index) in whiteboards" :key="index" class="whiteboard-container">
            <canvas ref="canvas" class="whiteboard" @mousedown="startDrawing" @mousemove="draw"
                @mouseup="stopDrawing"></canvas>
        </div>
        <button @click="addWhiteboard">+</button>
    </div>
</template>
  
<script>
export default {
    name:'Whiteboard',
    data() {
        return {
            whiteboards: [{ id: 1, width: window.innerWidth, height: window.innerHeight }],
        };
    },

    drawing: false,

    mounted() {
        this.canvas = document.getElementById('whiteboard');
        this.context = this.canvas.getContext('2d');
        this.context.lineWidth = 2;
        this.context.lineJoin = 'round';
        this.context.lineCap = 'round';
        this.context.strokeStyle = '#000';
    },
    methods: {
        addWhiteboard() {
            const newId = this.whiteboards.length + 1;
            this.whiteboards.push({ id: newId, width: window.innerWidth, height: window.innerHeight });
        },
        startDrawing(event) {
            this.drawing = true;
            this.lastX = event.offsetX;
            this.lastY = event.offsetY;
        },
        draw(event) {
            if (!this.drawing) return;
            this.context.beginPath();
            this.context.moveTo(this.lastX, this.lastY);
            this.context.lineTo(event.offsetX, event.offsetY);
            this.context.stroke();
            this.lastX = event.offsetX;
            this.lastY = event.offsetY;
        },
        stopDrawing() {
            this.drawing = false;
        }
    }
};
</script>
  
<style>
.whiteboard-container {
    margin-bottom: 20px;
    /* Adjust spacing between whiteboards */
}

.whiteboard {
    border: 1px solid black;
}
</style>
  