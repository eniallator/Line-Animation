const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const minSpawnTime = 120
const spawnRandomness = 40

const lines = [new Line(canvas.width / 2, canvas.height, (3 / 2) * Math.PI)]

ctx.lineWidth = 5
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
