"use client"

import { useEffect, useRef } from "react"

export default function EnhancedAcrylicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Color palette based on the gradient - MOVED UP before any function definitions
    const colors = {
      cyan: "#9AECEA",
      lightCyan: "#B0F0EE",
      darkCyan: "#7DCDC9",
      pink: "#F6B7EE",
      lightPink: "#FFC9F5",
      darkPink: "#E09FD7",
      white: "#FFFFFF",
      offWhite: "#F8F8F8",
    }

    // Helper function to adjust color brightness - MOVED UP as it's used by other functions
    function adjustColor(color: string, amount: number): string {
      // Convert hex to RGB
      const hex = color.replace("#", "")
      const r = Number.parseInt(hex.substring(0, 2), 16)
      const g = Number.parseInt(hex.substring(2, 4), 16)
      const b = Number.parseInt(hex.substring(4, 6), 16)

      // Adjust brightness
      const newR = Math.max(0, Math.min(255, r + amount))
      const newG = Math.max(0, Math.min(255, g + amount))
      const newB = Math.max(0, Math.min(255, b + amount))

      // Convert back to hex
      return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`
    }

    // Helper function to mix two colors - MOVED UP as it's used by other functions
    function mixColors(color1: string, color2: string, ratio: number): string {
      // Convert hex to RGB
      const hex1 = color1.replace("#", "")
      const r1 = Number.parseInt(hex1.substring(0, 2), 16)
      const g1 = Number.parseInt(hex1.substring(2, 4), 16)
      const b1 = Number.parseInt(hex1.substring(4, 6), 16)

      const hex2 = color2.replace("#", "")
      const r2 = Number.parseInt(hex2.substring(0, 2), 16)
      const g2 = Number.parseInt(hex2.substring(2, 4), 16)
      const b2 = Number.parseInt(hex2.substring(4, 6), 16)

      // Mix colors
      const r = Math.round(r1 * (1 - ratio) + r2 * ratio)
      const g = Math.round(g1 * (1 - ratio) + g2 * ratio)
      const b = Math.round(b1 * (1 - ratio) + b2 * ratio)

      // Convert back to hex
      return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
    }

    // Set canvas dimensions to match window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawEnhancedAcrylicBackground()
    }

    // Create enhanced acrylic paint background
    function drawEnhancedAcrylicBackground() {
      // Base canvas color (primed canvas)
      ctx.fillStyle = "#F5F5F5"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add canvas texture (fabric texture)
      addCanvasTexture()

      // First layer - base wash
      addColorWash()

      // Second layer - broad strokes
      addBrushStrokes(60, 30, 400, 0.4, true)

      // Third layer - medium detail strokes
      addBrushStrokes(100, 15, 200, 0.5, false)

      // Fourth layer - impasto thick paint areas
      addImpastoAreas(25)

      // Fifth layer - palette knife strokes
      addPaletteKnifeStrokes(40)

      // Sixth layer - dry brush technique
      addDryBrushStrokes(80)

      // Seventh layer - fine detail strokes
      addBrushStrokes(120, 5, 100, 0.6, false)

      // Eighth layer - paint splatters and drips
      addEnhancedPaintSplatters(50)

      // Final layer - highlights and accents
      addHighlights(30)
    }

    // Add canvas texture (fabric weave)
    function addCanvasTexture() {
      ctx.globalAlpha = 0.1
      const size = 4
      for (let x = 0; x < canvas.width; x += size) {
        for (let y = 0; y < canvas.height; y += size) {
          if ((x + y) % (size * 2) === 0) {
            ctx.fillStyle = "rgba(0,0,0,0.05)"
            ctx.fillRect(x, y, size, size)
          }
        }
      }
      ctx.globalAlpha = 1
    }

    // Add base color wash
    function addColorWash() {
      // Create gradient for base wash
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, colors.cyan)
      gradient.addColorStop(1, colors.pink)

      ctx.globalAlpha = 0.5
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add some variation to the wash
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = 100 + Math.random() * 300

        const washGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        if (Math.random() > 0.5) {
          washGradient.addColorStop(0, `${colors.lightCyan}40`)
          washGradient.addColorStop(1, `${colors.cyan}00`)
        } else {
          washGradient.addColorStop(0, `${colors.lightPink}40`)
          washGradient.addColorStop(1, `${colors.pink}00`)
        }

        ctx.fillStyle = washGradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
    }

    // Add brush strokes with enhanced texture
    function addBrushStrokes(
      count: number,
      minWidth: number,
      maxLength: number,
      opacity: number,
      isBaseLayer: boolean,
    ) {
      for (let i = 0; i < count; i++) {
        // Create a brush stroke path
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height
        const length = minWidth + Math.random() * maxLength
        const width = minWidth + Math.random() * 30
        const angle = Math.random() * Math.PI * 2

        // Create brush stroke with texture
        ctx.globalAlpha = opacity * (0.7 + Math.random() * 0.3)

        // Determine stroke color
        let strokeColor
        const colorChoice = Math.random()

        if (isBaseLayer) {
          // Base layer uses more of the main colors
          if (colorChoice < 0.4) {
            strokeColor = colors.cyan
          } else if (colorChoice < 0.8) {
            strokeColor = colors.pink
          } else {
            strokeColor = colors.white
          }
        } else {
          // Detail layers use more variations
          if (colorChoice < 0.25) {
            strokeColor = colors.lightCyan
          } else if (colorChoice < 0.5) {
            strokeColor = colors.darkCyan
          } else if (colorChoice < 0.75) {
            strokeColor = colors.lightPink
          } else if (colorChoice < 0.9) {
            strokeColor = colors.darkPink
          } else {
            strokeColor = colors.offWhite
          }
        }

        // Create brush stroke
        ctx.beginPath()

        // Add waviness to the stroke for more natural look
        const segments = 10
        const waviness = 0.3 + Math.random() * 0.7

        ctx.moveTo(startX, startY)

        for (let j = 1; j <= segments; j++) {
          const t = j / segments
          const xOffset = Math.cos(angle) * length * t
          const yOffset = Math.sin(angle) * length * t

          // Add some randomness to the path
          const perpAngle = angle + Math.PI / 2
          const perpOffset = (Math.random() - 0.5) * width * waviness

          const x = startX + xOffset + Math.cos(perpAngle) * perpOffset
          const y = startY + yOffset + Math.sin(perpAngle) * perpOffset

          ctx.lineTo(x, y)
        }

        // Vary the stroke width along the path
        ctx.lineWidth = width * (0.8 + Math.random() * 0.4)
        ctx.strokeStyle = strokeColor
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.stroke()

        // Add brush texture within the stroke
        if (!isBaseLayer && width > 10 && Math.random() > 0.5) {
          addBrushTexture(startX, startY, angle, length, width, strokeColor)
        }
      }

      ctx.globalAlpha = 1
    }

    // Add texture within brush strokes
    function addBrushTexture(x: number, y: number, angle: number, length: number, width: number, color: string) {
      const bristleCount = Math.floor(width / 2)

      ctx.globalAlpha = 0.3

      for (let i = 0; i < bristleCount; i++) {
        const bristleWidth = 1 + Math.random()

        // Position across the width of the main stroke
        const perpAngle = angle + Math.PI / 2
        const perpOffset = (Math.random() - 0.5) * width * 0.8

        const startX = x + Math.cos(perpAngle) * perpOffset
        const startY = y + Math.sin(perpAngle) * perpOffset

        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(
          startX + Math.cos(angle) * length * (0.7 + Math.random() * 0.3),
          startY + Math.sin(angle) * length * (0.7 + Math.random() * 0.3),
        )

        // Slightly lighter or darker than the main stroke
        const lightenDarken = Math.random() > 0.5 ? 20 : -20
        ctx.strokeStyle = adjustColor(color, lightenDarken)
        ctx.lineWidth = bristleWidth
        ctx.stroke()
      }

      ctx.globalAlpha = 1
    }

    // Add impasto (thick paint) areas
    function addImpastoAreas(count: number) {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = 30 + Math.random() * 100

        // Create thick paint area with texture
        const colorChoice = Math.random()
        let baseColor

        if (colorChoice < 0.3) {
          baseColor = colors.lightCyan
        } else if (colorChoice < 0.6) {
          baseColor = colors.lightPink
        } else if (colorChoice < 0.8) {
          baseColor = colors.white
        } else if (colorChoice < 0.9) {
          baseColor = colors.darkCyan
        } else {
          baseColor = colors.darkPink
        }

        // Create irregular shape for impasto area
        ctx.beginPath()

        // Create a more organic shape
        const points = 6 + Math.floor(Math.random() * 6)
        const angleStep = (Math.PI * 2) / points

        for (let j = 0; j < points; j++) {
          const angle = j * angleStep
          const radius = size * (0.5 + Math.random() * 0.5)
          const px = x + radius * Math.cos(angle)
          const py = y + radius * Math.sin(angle)

          if (j === 0) {
            ctx.moveTo(px, py)
          } else {
            // Use quadratic curves for smoother shapes
            const prevAngle = (j - 1) * angleStep
            const cpx = x + size * 0.8 * Math.cos((prevAngle + angle) / 2)
            const cpy = y + size * 0.8 * Math.sin((prevAngle + angle) / 2)
            ctx.quadraticCurveTo(cpx, cpy, px, py)
          }
        }

        ctx.closePath()

        // Fill with base color
        ctx.fillStyle = baseColor
        ctx.fill()

        // Add highlight and shadow to create 3D effect
        const highlightAngle = Math.random() * Math.PI * 2
        const shadowAngle = highlightAngle + Math.PI

        // Highlight
        const gradientHighlight = ctx.createLinearGradient(
          x + Math.cos(highlightAngle) * size * 0.5,
          y + Math.sin(highlightAngle) * size * 0.5,
          x + Math.cos(shadowAngle) * size * 0.5,
          y + Math.sin(shadowAngle) * size * 0.5,
        )

        gradientHighlight.addColorStop(0, adjustColor(baseColor, 40))
        gradientHighlight.addColorStop(0.5, baseColor)
        gradientHighlight.addColorStop(1, adjustColor(baseColor, -30))

        ctx.globalAlpha = 0.5
        ctx.fillStyle = gradientHighlight
        ctx.fill()

        // Add texture to impasto
        addImpastoTexture(x, y, size, baseColor)
      }
    }

    // Add texture to impasto areas
    function addImpastoTexture(x: number, y: number, size: number, color: string) {
      ctx.globalAlpha = 0.3

      // Add small ridges and texture
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * size * 0.7
        const tx = x + Math.cos(angle) * distance
        const ty = y + Math.sin(angle) * distance
        const length = 5 + Math.random() * 15
        const strokeAngle = Math.random() * Math.PI * 2

        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(tx + Math.cos(strokeAngle) * length, ty + Math.sin(strokeAngle) * length)

        ctx.lineWidth = 1 + Math.random() * 2
        ctx.strokeStyle = adjustColor(color, Math.random() > 0.5 ? 30 : -20)
        ctx.stroke()
      }

      ctx.globalAlpha = 1
    }

    // Add palette knife strokes
    function addPaletteKnifeStrokes(count: number) {
      for (let i = 0; i < count; i++) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height
        const length = 50 + Math.random() * 150
        const width = 10 + Math.random() * 30
        const angle = Math.random() * Math.PI * 2

        // Determine stroke color
        let strokeColor
        const colorChoice = Math.random()

        if (colorChoice < 0.25) {
          strokeColor = colors.lightCyan
        } else if (colorChoice < 0.5) {
          strokeColor = colors.lightPink
        } else if (colorChoice < 0.75) {
          strokeColor = colors.white
        } else if (colorChoice < 0.9) {
          strokeColor = mixColors(colors.lightCyan, colors.lightPink, Math.random())
        } else {
          strokeColor = mixColors(colors.darkCyan, colors.darkPink, Math.random())
        }

        // Create palette knife stroke (straight, sharp edges)
        const endX = startX + Math.cos(angle) * length
        const endY = startY + Math.sin(angle) * length

        const perpAngle = angle + Math.PI / 2
        const halfWidth = width / 2

        // Create a polygon for the knife stroke
        ctx.beginPath()
        ctx.moveTo(startX + Math.cos(perpAngle) * halfWidth, startY + Math.sin(perpAngle) * halfWidth)
        ctx.lineTo(startX - Math.cos(perpAngle) * halfWidth, startY - Math.sin(perpAngle) * halfWidth)
        ctx.lineTo(endX - Math.cos(perpAngle) * halfWidth, endY - Math.sin(perpAngle) * halfWidth)
        ctx.lineTo(endX + Math.cos(perpAngle) * halfWidth, endY + Math.sin(perpAngle) * halfWidth)
        ctx.closePath()

        // Fill with color
        ctx.fillStyle = strokeColor
        ctx.fill()

        // Add texture and edge highlights
        ctx.globalAlpha = 0.3

        // Edge highlight
        ctx.beginPath()
        ctx.moveTo(startX + Math.cos(perpAngle) * halfWidth, startY + Math.sin(perpAngle) * halfWidth)
        ctx.lineTo(endX + Math.cos(perpAngle) * halfWidth, endY + Math.sin(perpAngle) * halfWidth)

        ctx.lineWidth = 2
        ctx.strokeStyle = adjustColor(strokeColor, 40)
        ctx.stroke()

        ctx.globalAlpha = 1
      }
    }

    // Add dry brush strokes
    function addDryBrushStrokes(count: number) {
      for (let i = 0; i < count; i++) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height
        const length = 30 + Math.random() * 100
        const width = 5 + Math.random() * 15
        const angle = Math.random() * Math.PI * 2

        // Determine stroke color
        let strokeColor
        const colorChoice = Math.random()

        if (colorChoice < 0.3) {
          strokeColor = colors.cyan
        } else if (colorChoice < 0.6) {
          strokeColor = colors.pink
        } else {
          strokeColor = colors.white
        }

        // Create dry brush effect (broken, textured stroke)
        const bristleCount = Math.floor(width * 1.5)

        for (let j = 0; j < bristleCount; j++) {
          // Only some bristles make contact with the canvas
          if (Math.random() > 0.3) {
            const perpAngle = angle + Math.PI / 2
            const perpOffset = (Math.random() - 0.5) * width

            const bristleStartX = startX + Math.cos(perpAngle) * perpOffset
            const bristleStartY = startY + Math.sin(perpAngle) * perpOffset

            // Bristle length varies to create broken effect
            const bristleLength = length * (0.3 + Math.random() * 0.7)

            // Some bristles don't start at the beginning
            const startOffset = Math.random() > 0.7 ? Math.random() * length * 0.3 : 0

            const actualStartX = bristleStartX + Math.cos(angle) * startOffset
            const actualStartY = bristleStartY + Math.sin(angle) * startOffset

            ctx.beginPath()
            ctx.moveTo(actualStartX, actualStartY)
            ctx.lineTo(actualStartX + Math.cos(angle) * bristleLength, actualStartY + Math.sin(angle) * bristleLength)

            ctx.globalAlpha = 0.1 + Math.random() * 0.4
            ctx.lineWidth = 0.5 + Math.random()
            ctx.strokeStyle = strokeColor
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
    }

    // Add enhanced paint splatters and drips
    function addEnhancedPaintSplatters(count: number) {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = 3 + Math.random() * 10

        // Determine splatter color
        let splatterColor
        const colorChoice = Math.random()

        if (colorChoice < 0.3) {
          splatterColor = colors.lightCyan
        } else if (colorChoice < 0.6) {
          splatterColor = colors.lightPink
        } else if (colorChoice < 0.8) {
          splatterColor = colors.white
        } else if (colorChoice < 0.9) {
          splatterColor = colors.darkCyan
        } else {
          splatterColor = colors.darkPink
        }

        // Main splatter
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = splatterColor
        ctx.globalAlpha = 0.6
        ctx.fill()

        // Add droplets
        const dropletCount = 5 + Math.floor(Math.random() * 10)

        for (let j = 0; j < dropletCount; j++) {
          const angle = Math.random() * Math.PI * 2
          const distance = size + Math.random() * size * 3
          const dropletX = x + Math.cos(angle) * distance
          const dropletY = y + Math.sin(angle) * distance
          const dropletSize = 0.5 + Math.random() * (size / 2)

          ctx.beginPath()
          ctx.arc(dropletX, dropletY, dropletSize, 0, Math.PI * 2)
          ctx.fillStyle = splatterColor
          ctx.globalAlpha = 0.4 * Math.random()
          ctx.fill()
        }

        // Add paint drip
        if (Math.random() > 0.7) {
          const dripLength = 10 + Math.random() * 50
          const dripWidth = 1 + Math.random() * 3

          ctx.beginPath()
          ctx.moveTo(x, y)

          // Create a curved drip path
          const cp1x = x + (Math.random() - 0.5) * 10
          const cp1y = y + dripLength * 0.3
          const cp2x = x + (Math.random() - 0.5) * 10
          const cp2y = y + dripLength * 0.6
          const endX = x + (Math.random() - 0.5) * 5
          const endY = y + dripLength

          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY)

          ctx.lineWidth = dripWidth
          ctx.strokeStyle = splatterColor
          ctx.globalAlpha = 0.5
          ctx.stroke()

          // Add drip end
          ctx.beginPath()
          ctx.arc(endX, endY, dripWidth, 0, Math.PI * 2)
          ctx.fillStyle = splatterColor
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1
    }

    // Add highlights and accents
    function addHighlights(count: number) {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = 5 + Math.random() * 15

        // Create highlight
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size)
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.4)")
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.1)")
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
}
