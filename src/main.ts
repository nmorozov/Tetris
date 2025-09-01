import { Game } from 'src/game'

const initCanvas = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('Could not get context')
  }

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  return ctx
}

const init = async () => {
  const canvasCtx = initCanvas()
  const game = new Game()

  try {
    canvasCtx.fillStyle = '#000'
    canvasCtx.fillRect(0, 0, canvasCtx.canvas.width, canvasCtx.canvas.height)

    game.run()
  } catch (error) {
    console.error('Failed to load assets:', error)
  }
}

document.addEventListener('DOMContentLoaded', init)
