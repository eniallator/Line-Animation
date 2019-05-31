const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = document.body.clientWidth
canvas.height = document.documentElement.clientHeight

const minDim = Math.min(canvas.width, canvas.height)
const minSpawnTime = minDim / 3.3
const spawnRandomness = minDim / 13.5

const lines = [new Line(canvas.width / 2, canvas.height, (3 / 2) * Math.PI)]

ctx.lineWidth = minDim / 108
ctx.fillStyle = 'black'
ctx.strokeStyle = 'white'

function run() {
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (let line of lines) {
        line.update({ x: canvas.width, y: canvas.height }, lines)
        line.draw(ctx)
    }

    requestAnimationFrame(run)
}

run()
