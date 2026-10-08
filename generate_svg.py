import re

# Colors
TEAL = "#00645a"
MINT = "#8ed4aa"
STAR = "#00645a"
SUBTITLE = "#b0b8c2"

def create_svg(teal_color=TEAL, mint_color=MINT, star_color=STAR, subtitle_color=SUBTITLE, transparent_bg=True):
    # Viewbox 1000 x 850 or tighter around logo (X: 100 to 920, Y: 220 to 720 -> viewBox="100 220 820 500")
    # Let's use a standard viewBox 0 0 1000 700 with clean offset
    
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="100 220 800 480" width="100%" height="100%">
  <!-- AMCLA Logo Oficial - Vector SVG (Fondo Transparente) -->
  <defs>
    <style>
      .amcla-teal {{ fill: {teal_color}; }}
      .amcla-mint {{ fill: {mint_color}; }}
      .amcla-star {{ fill: {star_color}; }}
      .amcla-sub {{ fill: {subtitle_color}; font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; font-weight: 800; }}
    </style>
  </defs>

  <!-- ISOTIPO SUPERIOR: Hoja Crest con Estrella y Nervadura -->
  <g id="isotipo" transform="translate(0, 0)">
    <!-- Silueta principal de la hoja en verde menta -->
    <path class="amcla-mint" fill-rule="evenodd" d="
      M 488 285
      C 498 262 522 258 550 258
      C 572 258 584 270 584 294
      L 584 340
      C 584 372 558 398 522 400
      C 488 402 460 388 445 372
      L 458 360
      C 484 376 512 376 534 362
      C 552 350 562 330 562 306
      L 562 284
      C 542 282 516 288 498 304
      Z
    " />

    <!-- Trazo dinámico interior (nervadura / hoja blanca / tallo) -->
    <path class="amcla-mint" d="
      M 445 388
      C 470 350 502 312 542 292
      L 535 306
      C 500 326 472 360 452 396
      Z
    " />

    <!-- Estrella de 5 puntas en el vértice superior izquierdo -->
    <polygon class="amcla-star" points="
      495,242 
      501,257 
      517,257 
      504,267 
      509,282 
      495,273 
      481,282 
      486,267 
      473,257 
      489,257
    " />
  </g>

  <!-- PALABRA 'amcLA' -->
  <g id="wordmark">
    <!-- 1. Letra 'A' (Teal) -->
    <!-- Arco superior redondeado, patas verticales, travesaño medio y recorte inferior -->
    <path class="amcla-teal" fill-rule="evenodd" d="
      M 136 636
      L 136 480
      C 136 440 162 420 202 420
      C 242 420 268 440 268 480
      L 268 605
      L 228 605
      L 228 548
      L 178 548
      L 178 636
      Z
      M 178 514
      L 228 514
      L 228 478
      C 228 456 216 450 202 450
      C 188 450 178 456 178 478
      Z
    " />

    <!-- 2. Letra 'm' (Verde Menta Suave) -->
    <!-- Dos arcos continuos con tres pilares verticales -->
    <path class="amcla-mint" fill-rule="evenodd" d="
      M 286 601
      L 286 470
      C 286 438 306 420 338 420
      C 368 420 388 438 395 464
      C 402 438 422 420 452 420
      C 484 420 504 438 504 470
      L 504 588
      L 466 588
      L 466 476
      C 466 452 456 446 442 446
      C 426 446 414 456 414 478
      L 414 590
      L 376 590
      L 376 476
      C 376 452 366 446 352 446
      C 336 446 324 456 324 478
      L 324 598
      Z
    " />

    <!-- 3. Letra 'c' (Teal) con Punto Central -->
    <path class="amcla-teal" d="
      M 644 422
      L 562 422
      C 538 422 524 436 524 460
      L 524 554
      C 524 576 538 590 562 590
      L 644 590
      L 644 554
      L 566 554
      L 566 458
      L 644 458
      Z
    " />
    <!-- Punto sólido en el centro de la 'c' -->
    <circle class="amcla-teal" cx="612" cy="506" r="27" />

    <!-- 4. Letra 'L' (Teal) -->
    <path class="amcla-teal" d="
      M 658 422
      L 698 422
      L 698 564
      L 746 564
      L 746 602
      C 724 602 696 601 672 598
      C 662 597 658 590 658 578
      Z
    " />

    <!-- 5. Letra 'A' (Teal) -->
    <!-- Arco superior redondeado, simétrico, con pata derecha que baja -->
    <path class="amcla-teal" fill-rule="evenodd" d="
      M 758 608
      L 758 478
      C 758 438 784 420 824 420
      C 864 420 888 438 888 478
      L 888 636
      L 848 636
      L 848 550
      L 798 550
      L 798 605
      Z
      M 798 516
      L 848 516
      L 848 478
      C 848 456 838 450 824 450
      C 810 450 798 456 798 478
      Z
    " />
  </g>

  <!-- SUBTÍTULO: SERVICIO DE CAPACITACIÓN -->
  <text class="amcla-sub" x="506" y="668" font-size="28" letter-spacing="4" text-anchor="middle">
    SERVICIO DE CAPACITACIÓN
  </text>
</svg>"""
    return svg

# Generate original color SVG
with open("/app/applet/public/amcla-logo-original.svg", "w") as f:
    f.write(create_svg(TEAL, MINT, STAR, SUBTITLE))

# Generate logo_amcla.svg (exact replica in public root)
with open("/app/applet/public/logo_amcla.svg", "w") as f:
    f.write(create_svg(TEAL, MINT, STAR, SUBTITLE))

# Generate white adapted version for dark backgrounds
with open("/app/applet/public/amcla-logo-white.svg", "w") as f:
    f.write(create_svg(teal_color="#ffffff", mint_color="#8ed4aa", star_color="#34d399", subtitle_color="#cbd5e1"))

print("SVG files generated successfully")
