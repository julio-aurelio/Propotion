/* ==========================================================================
   PROPOTION - SCRIPT PRINCIPAL COM ÍCONES VETORIAIS EXCLUSIVOS E DEDICADOS
   Didático e comentado para estudantes de Desenvolvimento de Sistemas.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------------------------------------------------
    // 0. GERADOR DE ÍCONES VETORIAIS SVG EXCLUSIVOS PARA CADA ELEMENTO
    // ----------------------------------------------------------------------
    function getIconHTML(name) {
        const icons = {
            // ── POÇÕES (usadas no cabeçalho/lista — stroke com cor do tema) ──
            "cura": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#70E000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><line x1="8.5" x2="15.5" y1="2" y2="2"/><path d="M8.5 14h7"/></svg>`,
            "vitalidade": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#38B000" fill-opacity="0.25" stroke="#38B000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 9v6" stroke="#fff" stroke-width="1.5"/><path d="M9 12h6" stroke="#fff" stroke-width="1.5"/></svg>`,
            "agilidade": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD166" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
            "mana": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/></svg>`,
            "protecao": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#4895EF" fill-opacity="0.2" stroke="#4895EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4" stroke="#fff" stroke-width="1.5"/></svg>`,
            "invisibilidade": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B5179E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`,
            "forca": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#D90429" fill-opacity="0.3" stroke="#FF4D6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
            "trovao": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FFB703" fill-opacity="0.35" stroke="#FFD166" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
            "regeneracao": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FF70A6" fill-opacity="0.35" stroke="#FF85A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
            "cosmica": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C77DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" fill="#9D4EDD" fill-opacity="0.5"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="m4.93 4.93 2.12 2.12"/><path d="m16.95 16.95 2.12 2.12"/><path d="m4.93 19.07 2.12-2.12"/><path d="m16.95 7.05 2.12-2.12"/></svg>`,
            "suprema": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FFD166" fill-opacity="0.3" stroke="#FFD166" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>`,

            // ── INGREDIENTES — CADA UM COLORIDO E VIBRANTE ──

            // Erva Azul — folha verde-azulada preenchida
            "erva": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#4895EF" fill-opacity="0.4" stroke="#4895EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" stroke-opacity="0.7"/></svg>`,

            // Água Purificada — gota azul-ciano brilhante
            "agua": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#4CC9F0" fill-opacity="0.45" stroke="#00B4D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/><ellipse cx="10" cy="14" rx="1.5" ry="2" fill="white" fill-opacity="0.35"/></svg>`,

            // Cogumelo Verde — chapéu verde vibrante
            "cogumelo": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9z" fill="#52B788" fill-opacity="0.5" stroke="#52B788" stroke-width="2"/><path d="M9 11v8a3 3 0 0 0 6 0v-8" fill="#D4A373" fill-opacity="0.3" stroke="#A68A64" stroke-width="2"/><circle cx="9" cy="6" r="1.2" fill="white" fill-opacity="0.5"/><circle cx="14" cy="7.5" r="0.9" fill="white" fill-opacity="0.4"/></svg>`,

            // Fruta do Sol — sol dourado radiante
            "sol": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" fill="#FFD166" fill-opacity="0.55"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,

            // Orvalho Celestial — nuvem chuva azul-claro
            "orvalho": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#90E0EF" fill-opacity="0.3" stroke="#00B4D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A4.5 4.5 0 0 1 17.5 21h-11A4.5 4.5 0 0 1 4 16.2a8 8 0 0 1 12.5-6.2A6 6 0 0 1 20 16.2z"/><line x1="8" x2="8" y1="19" y2="21" stroke="#4CC9F0" stroke-width="1.5"/><line x1="12" x2="12" y1="19" y2="21" stroke="#4CC9F0" stroke-width="1.5"/><line x1="16" x2="16" y1="19" y2="21" stroke="#4CC9F0" stroke-width="1.5"/></svg>`,

            // Cristal Mágico — diamante azul-gelo brilhante
            "cristal": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#90E0EF" fill-opacity="0.35" stroke="#48BFE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3 8 9l4 12 4-12-3-6" stroke-opacity="0.5"/><path d="M2 9h20"/><polygon points="10 9 12 21 14 9" fill="white" fill-opacity="0.25"/></svg>`,

            // Essência Arcana — estrela mística roxa brilhante
            "essencia": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#7209B7" fill-opacity="0.4" stroke="#C77DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><circle cx="12" cy="12" r="1.5" fill="white" fill-opacity="0.5"/></svg>`,

            // Pó de Ferro — martelo/chave metálico prateado
            "ferro": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ADB5BD" fill-opacity="0.25" stroke="#ADB5BD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,

            // Pena de Fênix — pena laranja-dourada incandescente
            "pena": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FF9F1C" fill-opacity="0.4" stroke="#FF9F1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L3 13v8h8l9.24-8.76z"/><line x1="16" x2="2" y1="8" y2="22" stroke="#FFD166" stroke-width="1.5"/></svg>`,

            // Essência de Sombra — lua crescente sombria azul-escura
            "sombra": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#3A0CA3" fill-opacity="0.5" stroke="#7209B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><circle cx="8" cy="10" r="0.7" fill="#E0AAFF" fill-opacity="0.6"/><circle cx="10" cy="15" r="0.5" fill="#E0AAFF" fill-opacity="0.4"/></svg>`,

            // Raiz Vermelha — raiz marrom-avermelhada
            "raiz": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4A373" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10"/><path d="M12 12 7 22" stroke="#A0522D"/><path d="m12 12 5 10" stroke="#A0522D"/><circle cx="12" cy="5" r="2" fill="#52B788" fill-opacity="0.6" stroke="#52B788" stroke-width="1.5"/></svg>`,

            // Essência de Fogo — chama vermelha viva
            "fogo": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FF4D6D" fill-opacity="0.45" stroke="#FF4D6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/><path d="M12 18v-3" stroke="#FFD166" stroke-width="1.5" stroke-opacity="0.7"/></svg>`,

            // Gota de Trovão — raio amarelo elétrico
            "trovao_ing": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FFD166" fill-opacity="0.5" stroke="#FFB703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,

            // Flor de Lótus — pétala rosada vibrante
            "lotus": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FF85A1" fill-opacity="0.4" stroke="#FF70A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5" fill="white" fill-opacity="0.4" stroke="#FF85A1" stroke-width="1.5"/></svg>`,

            // Flor Lunar — flor lilás mística
            "flor_lunar": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#E0AAFF" fill-opacity="0.35" stroke="#C77DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 0 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 0 6-6Z"/><path d="M12 14v8"/><circle cx="12" cy="8" r="1.2" fill="white" fill-opacity="0.5"/></svg>`,

            // Raiz Sombria — raízes escuras e sinistras
            "raiz_sombria": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6D597A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8"/><path d="m8 10-4 6" stroke="#4A3260"/><path d="m16 10 4 6" stroke="#4A3260"/><path d="m12 10-3 10" stroke="#2B2D42"/><path d="m12 10 3 10" stroke="#2B2D42"/><circle cx="12" cy="4" r="1.5" fill="#9D4EDD" fill-opacity="0.6"/></svg>`,

            // Pó Estelar — estrela dourada cintilante
            "po_estelar": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#FFB703" fill-opacity="0.5" stroke="#FFD166" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"/><circle cx="12" cy="12" r="1.5" fill="white" fill-opacity="0.5"/></svg>`,

            // ── UTILITÁRIOS DA INTERFACE ──
            "trofeu": `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#FFD166" fill-opacity="0.3" stroke="#FFD166" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
            "livro": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
            "pergaminho": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/></svg>`,
            "mago": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.21 1.21 0 0 0 1.72 0L21.64 5.36a1.21 1.21 0 0 0 0-1.72Z"/><path d="m14 7 3 3"/><path d="M5 6v1"/><path d="M19 14v1"/><path d="M10 2v1"/><path d="M7 8H6"/><path d="M21 12h-1"/></svg>`,
            "cadeado": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
            "meta": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
            "mochila": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10Z"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"/><path d="M8 10h8"/></svg>`,
            "ajuda": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
            "estrela": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#C77DFF" fill-opacity="0.3" stroke="#C77DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`
        };

        return icons[name] || icons["estrela"];
    }

    // Injeta ícones estáticos no HTML
    document.querySelectorAll(".svg-icon-sparkle").forEach(el => el.innerHTML = getIconHTML("estrela"));
    document.querySelectorAll(".svg-icon-book").forEach(el => el.innerHTML = getIconHTML("livro"));
    document.querySelectorAll(".svg-icon-scroll").forEach(el => el.innerHTML = getIconHTML("pergaminho"));
    document.querySelectorAll(".svg-icon-target").forEach(el => el.innerHTML = getIconHTML("meta"));
    document.querySelectorAll(".svg-icon-flask").forEach(el => el.innerHTML = getIconHTML("cura"));
    document.querySelectorAll(".svg-icon-wand").forEach(el => el.innerHTML = getIconHTML("mago"));
    document.querySelectorAll(".svg-icon-help").forEach(el => el.innerHTML = getIconHTML("ajuda"));
    document.querySelectorAll(".svg-icon-trophy").forEach(el => el.innerHTML = getIconHTML("trofeu"));
    document.querySelectorAll(".svg-icon-backpack").forEach(el => el.innerHTML = getIconHTML("mochila"));

    // ----------------------------------------------------------------------
    // 1. BANCO DE DADOS DE FASES E POÇÕES (ÍCONES ÚNICOS E EXCLUSIVOS)
    // ----------------------------------------------------------------------
    const phases = [
        // FASES 1 A 3: APRENDIZ DE ALQUIMIA (2 INGREDIENTES)
        {
            phase: 1,
            title: "Fase 1: O Primeiro Elixir de Cura",
            rank: "Aprendiz de Alquimia",
            recipe: {
                name: "Poção de Cura",
                iconKey: "cura",
                color: "#70E000",
                targetQty: 10,
                ingredients: [
                    { name: "Erva Azul", iconKey: "erva", color: "#4895EF", base: 2 },
                    { name: "Água Purificada", iconKey: "agua", color: "#4CC9F0", base: 3 }
                ]
            }
        },
        {
            phase: 2,
            title: "Fase 2: Elixir de Vitalidade",
            rank: "Aprendiz de Alquimia",
            recipe: {
                name: "Poção de Vitalidade",
                iconKey: "vitalidade",
                color: "#38B000",
                targetQty: 12,
                ingredients: [
                    { name: "Cogumelo Verde", iconKey: "cogumelo", color: "#52B788", base: 1 },
                    { name: "Água Purificada", iconKey: "agua", color: "#4CC9F0", base: 3 }
                ]
            }
        },
        {
            phase: 3,
            title: "Fase 3: Elixir de Agilidade",
            rank: "Aprendiz de Alquimia",
            recipe: {
                name: "Poção de Agilidade",
                iconKey: "agilidade",
                color: "#FFD166",
                targetQty: 15,
                ingredients: [
                    { name: "Fruta do Sol", iconKey: "sol", color: "#FFB703", base: 3 },
                    { name: "Orvalho Celestial", iconKey: "orvalho", color: "#00B4D8", base: 2 }
                ]
            }
        },
        // FASES 4 A 6: ALQUIMISTA (3 INGREDIENTES)
        {
            phase: 4,
            title: "Fase 4: Elixir de Mana",
            rank: "Alquimista",
            recipe: {
                name: "Poção de Mana",
                iconKey: "mana",
                color: "#0077B6",
                targetQty: 20,
                ingredients: [
                    { name: "Cristal Mágico", iconKey: "cristal", color: "#90E0EF", base: 1 },
                    { name: "Água Purificada", iconKey: "agua", color: "#4CC9F0", base: 2 },
                    { name: "Essência Arcana", iconKey: "essencia", color: "#7209B7", base: 1 }
                ]
            }
        },
        {
            phase: 5,
            title: "Fase 5: Elixir de Proteção",
            rank: "Alquimista",
            recipe: {
                name: "Poção de Proteção",
                iconKey: "protecao",
                color: "#4895EF",
                targetQty: 18,
                ingredients: [
                    { name: "Pó de Ferro", iconKey: "ferro", color: "#ADB5BD", base: 2 },
                    { name: "Cristal Mágico", iconKey: "cristal", color: "#90E0EF", base: 1 },
                    { name: "Água Purificada", iconKey: "agua", color: "#4CC9F0", base: 3 }
                ]
            }
        },
        {
            phase: 6,
            title: "Fase 6: Elixir de Invisibilidade",
            rank: "Alquimista",
            recipe: {
                name: "Poção de Invisibilidade",
                iconKey: "invisibilidade",
                color: "#B5179E",
                targetQty: 24,
                ingredients: [
                    { name: "Pena de Fênix", iconKey: "pena", color: "#FF9F1C", base: 2 },
                    { name: "Essência de Sombra", iconKey: "sombra", color: "#3A0CA3", base: 3 },
                    { name: "Orvalho Celestial", iconKey: "orvalho", color: "#00B4D8", base: 1 }
                ]
            }
        },
        // FASES 7 A 9: MESTRE ALQUIMISTA (4 INGREDIENTES)
        {
            phase: 7,
            title: "Fase 7: Elixir de Força",
            rank: "Mestre Alquimista",
            recipe: {
                name: "Poção de Força",
                iconKey: "forca",
                color: "#D90429",
                targetQty: 24,
                ingredients: [
                    { name: "Raiz Vermelha", iconKey: "raiz", color: "#D4A373", base: 2 },
                    { name: "Erva Azul", iconKey: "erva", color: "#4895EF", base: 1 },
                    { name: "Água Purificada", iconKey: "agua", color: "#4CC9F0", base: 3 },
                    { name: "Essência de Fogo", iconKey: "fogo", color: "#FF4D6D", base: 2 }
                ]
            }
        },
        {
            phase: 8,
            title: "Fase 8: Elixir do Trovão",
            rank: "Mestre Alquimista",
            recipe: {
                name: "Poção do Trovão",
                iconKey: "trovao",
                color: "#FFB703",
                targetQty: 28,
                ingredients: [
                    { name: "Gota de Trovão", iconKey: "trovao_ing", color: "#FFD166", base: 1 },
                    { name: "Fruta do Sol", iconKey: "sol", color: "#FF9F1C", base: 2 },
                    { name: "Cristal Mágico", iconKey: "cristal", color: "#90E0EF", base: 1 },
                    { name: "Água Purificada", iconKey: "agua", color: "#4CC9F0", base: 3 }
                ]
            }
        },
        {
            phase: 9,
            title: "Fase 9: Elixir de Regeneração",
            rank: "Mestre Alquimista",
            recipe: {
                name: "Poção de Regeneração",
                iconKey: "regeneracao",
                color: "#FF70A6",
                targetQty: 30,
                ingredients: [
                    { name: "Flor de Lótus", iconKey: "lotus", color: "#FF85A1", base: 2 },
                    { name: "Erva Azul", iconKey: "erva", color: "#4895EF", base: 2 },
                    { name: "Orvalho Celestial", iconKey: "orvalho", color: "#00B4D8", base: 3 },
                    { name: "Essência Arcana", iconKey: "essencia", color: "#7209B7", base: 3 }
                ]
            }
        },
        // FASES 10 A 12: GRÃO-MESTRE (5 INGREDIENTES)
        {
            phase: 10,
            title: "Fase 10: Elixir Cósmico",
            rank: "Grão-Mestre Alquimista",
            recipe: {
                name: "Poção Cósmica",
                iconKey: "cosmica",
                color: "#9D4EDD",
                targetQty: 27,
                ingredients: [
                    { name: "Flor Lunar", iconKey: "flor_lunar", color: "#E0AAFF", base: 1 },
                    { name: "Cristal Mágico", iconKey: "cristal", color: "#90E0EF", base: 2 },
                    { name: "Erva Azul", iconKey: "erva", color: "#4895EF", base: 1 },
                    { name: "Água Purificada", iconKey: "agua", color: "#4CC9F0", base: 3 },
                    { name: "Essência de Fogo", iconKey: "fogo", color: "#FF4D6D", base: 2 }
                ]
            }
        },
        // FASES 13 A 15: ARQUIMAGO (6 INGREDIENTES)
        {
            phase: 13,
            title: "Fase 13: O Elixir Supremo",
            rank: "Arquimago da Floresta",
            recipe: {
                name: "Poção Suprema",
                iconKey: "suprema",
                color: "#C77DFF",
                targetQty: 30,
                ingredients: [
                    { name: "Raiz Sombria", iconKey: "raiz_sombria", color: "#2B2D42", base: 1 },
                    { name: "Flor Lunar", iconKey: "flor_lunar", color: "#E0AAFF", base: 2 },
                    { name: "Cristal Mágico", iconKey: "cristal", color: "#90E0EF", base: 1 },
                    { name: "Água Purificada", iconKey: "agua", color: "#4CC9F0", base: 3 },
                    { name: "Essência de Fogo", iconKey: "fogo", color: "#FF4D6D", base: 2 },
                    { name: "Pó Estelar", iconKey: "po_estelar", color: "#FFB703", base: 1 }
                ]
            }
        }
    ];

    // ----------------------------------------------------------------------
    // 2. ESTADO GLOBAL DO JOGO
    // ----------------------------------------------------------------------
    let currentPhaseIndex = 0;
    let maxUnlockedPhaseIndex = 0;
    let targetQuantity = 10;
    let playerInputs = [];
    let playerXp = 0;
    let totalPotionsCreated = 0;
    const inventory = {};

    let currentTutStep = 1;
    let toastTimeout = null;

    // ----------------------------------------------------------------------
    // 3. ELEMENTOS DO DOM
    // ----------------------------------------------------------------------
    const startScreen = document.getElementById("start-screen");
    const gameScreen = document.getElementById("game-screen");
    const btnStart = document.getElementById("btn-start");
    const btnStory = document.getElementById("btn-story");
    const btnBack = document.getElementById("btn-back");
    const btnTutorial = document.getElementById("btn-tutorial");
    const btnRecipeBook = document.getElementById("btn-recipe-book");
    const logoImg = document.getElementById("logo-img");

    const storyModal = document.getElementById("story-modal");
    const btnCloseModal = document.getElementById("btn-close-modal");
    const btnModalStart = document.getElementById("btn-modal-start");

    const tutorialModal = document.getElementById("tutorial-modal");
    const btnCloseTutorial = document.getElementById("btn-close-tutorial");
    const btnTutPrev = document.getElementById("btn-tut-prev");
    const btnTutNext = document.getElementById("btn-tut-next");

    const recipeBookModal = document.getElementById("recipe-book-modal");
    const btnCloseRecipeBook = document.getElementById("btn-close-recipe-book");
    const recipeBookGrid = document.getElementById("recipe-book-grid");

    const rewardModal = document.getElementById("reward-modal");
    const btnClaimReward = document.getElementById("btn-claim-reward");
    const rewardMissionName = document.getElementById("reward-mission-name");
    const rewardTextDesc = document.getElementById("reward-text-desc");

    const phaseTitleEl = document.getElementById("phase-title");
    const playerRankEl = document.getElementById("player-rank");
    const phaseBadgeEl = document.getElementById("phase-badge");
    const missionBadgeEl = document.getElementById("mission-badge");
    const claimLabelEl = document.getElementById("claim-label");
    const missionTitleEl = document.getElementById("mission-title");
    const missionDescEl = document.getElementById("mission-desc");
    const missionRewardTextEl = document.getElementById("mission-reward-text");
    const xpCountEl = document.getElementById("xp-count");
    const potionsCountEl = document.getElementById("potions-count");

    const recipeListEl = document.getElementById("recipe-list");
    const currentPotionNameEl = document.getElementById("current-potion-name");
    const currentPotionIconEl = document.getElementById("current-potion-icon");
    const currentPotionRatioEl = document.getElementById("current-potion-ratio");

    const targetQtyEl = document.getElementById("target-quantity-display");

    const ingredientRowsContainer = document.getElementById("ingredient-rows");
    const totalPartsEl = document.getElementById("total-parts");
    const targetPartsNeededEl = document.getElementById("target-parts-needed");

    const btnBrew = document.getElementById("btn-brew");
    const toastFeedback = document.getElementById("toast-feedback");
    const toastMsg = document.getElementById("toast-message");
    const inventoryGrid = document.getElementById("inventory-grid");

    const potionStage = document.getElementById("potion-stage");
    const potionPngBase = document.getElementById("potion-png-base");
    const potionLiquidFill = document.getElementById("potion-liquid-fill");
    const explosionFlash = document.getElementById("explosion-flash");
    const explosionParticlesContainer = document.getElementById("explosion-particles-container");

    // ----------------------------------------------------------------------
    // 4. ENTRADA DA TELA INICIAL
    // ----------------------------------------------------------------------
    initSparksCanvas();

    const introTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    introTimeline
        .from(logoImg, { duration: 1.3, opacity: 0, scale: 0.85, y: -20 });

    // Inicializa a primeira fase na carga para garantir renderização imediata de todos os painéis
    loadPhase(0);

    function startGame() {
        if (!storyModal.classList.contains("hidden")) closeModal();

        gsap.to(startScreen, {
            duration: 0.6, opacity: 0, y: -20, scale: 0.95, ease: "power2.in",
            onComplete: () => {
                startScreen.classList.add("hidden");
                gameScreen.classList.remove("hidden");

                gsap.fromTo(gameScreen, 
                    { opacity: 0, y: 30, scale: 0.95 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" }
                );

                loadPhase(currentPhaseIndex);
            }
        });
    }

    function openModal() {
        storyModal.classList.remove("hidden");
        gsap.fromTo("#story-modal .modal-card", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4 });
    }

    function closeModal() {
        gsap.to("#story-modal .modal-card", { opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => storyModal.classList.add("hidden") });
    }

    btnStart.addEventListener("click", startGame);
    btnStory.addEventListener("click", openModal);
    btnModalStart.addEventListener("click", startGame);
    btnCloseModal.addEventListener("click", closeModal);

    btnBack.addEventListener("click", () => {
        gsap.to(gameScreen, {
            duration: 0.5, opacity: 0, y: 20, ease: "power2.in",
            onComplete: () => {
                gameScreen.classList.add("hidden");
                startScreen.classList.remove("hidden");
                gsap.fromTo(startScreen, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.7 });
            }
        });
    });

    // ----------------------------------------------------------------------
    // 5. TUTORIAL INTERATIVO & LIVRO DE RECEITAS
    // ----------------------------------------------------------------------
    function openTutorial() {
        currentTutStep = 1;
        updateTutorialSlide();
        tutorialModal.classList.remove("hidden");
        gsap.fromTo(".tutorial-card", { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.4 });
    }
    function closeTutorial() { tutorialModal.classList.add("hidden"); }

    function updateTutorialSlide() {
        document.querySelectorAll(".step-slide").forEach((slide) => {
            slide.classList.toggle("active", parseInt(slide.dataset.step) === currentTutStep);
        });
        document.querySelectorAll("#tutorial-dots .dot").forEach((dot, idx) => {
            dot.classList.toggle("active", idx + 1 === currentTutStep);
        });
        btnTutPrev.disabled = currentTutStep === 1;
        btnTutNext.textContent = currentTutStep === 4 ? "Entendi!" : "Próximo";
    }

    btnTutorial.addEventListener("click", openTutorial);
    btnCloseTutorial.addEventListener("click", closeTutorial);
    btnTutPrev.addEventListener("click", () => { if (currentTutStep > 1) { currentTutStep--; updateTutorialSlide(); } });
    btnTutNext.addEventListener("click", () => {
        if (currentTutStep < 4) { currentTutStep++; updateTutorialSlide(); } else { closeTutorial(); }
    });

    function openRecipeBook() {
        recipeBookGrid.innerHTML = "";
        phases.forEach((p, idx) => {
            const isUnlocked = idx <= maxUnlockedPhaseIndex;
            const ratioStr = p.recipe.ingredients.map(i => i.base).join(" : ");
            const div = document.createElement("div");
            div.className = `recipe-book-item ${isUnlocked ? "unlocked" : "locked"}`;
            div.innerHTML = `
                <div class="recipe-book-header">
                    <span class="recipe-book-icon">${getIconHTML(p.recipe.iconKey)}</span>
                    <div>
                        <h4 class="recipe-book-title">${p.recipe.name}</h4>
                        <span class="recipe-book-unlock">${isUnlocked ? `Fase ${p.phase}` : `Bloqueado (Fase ${p.phase})`}</span>
                    </div>
                </div>
                <p class="recipe-book-ratio">Proporção: ${ratioStr}</p>
                <p class="recipe-book-unlock">${p.recipe.ingredients.length} Ingredientes Exigidos</p>
            `;
            recipeBookGrid.appendChild(div);
        });

        recipeBookModal.classList.remove("hidden");
        gsap.fromTo(".recipe-book-card", { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.4 });
    }
    function closeRecipeBook() { recipeBookModal.classList.add("hidden"); }

    btnRecipeBook.addEventListener("click", openRecipeBook);
    btnCloseRecipeBook.addEventListener("click", closeRecipeBook);

    // ----------------------------------------------------------------------
    // 6. TOAST NOTIFICATION TEMPORÁRIO
    // ----------------------------------------------------------------------
    function showToast(htmlMessage, isSuccess) {
        if (toastTimeout) clearTimeout(toastTimeout);
        gsap.killTweensOf(toastFeedback);
        toastMsg.innerHTML = htmlMessage;
        toastFeedback.className = `toast-feedback ${isSuccess ? "toast-success" : "toast-error"}`;

        gsap.fromTo(toastFeedback,
            { y: -50, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" }
        );

        toastTimeout = setTimeout(() => {
            gsap.to(toastFeedback, {
                y: -30, opacity: 0, scale: 0.9, duration: 0.4, ease: "power2.in",
                onComplete: () => toastFeedback.classList.add("hidden")
            });
        }, 4500);
    }

    // ----------------------------------------------------------------------
    // 7. CARREGAMENTO DAS FASES & COMPONENTES DINÂMICOS
    // ----------------------------------------------------------------------
    function loadPhase(index) {
        currentPhaseIndex = index;
        if (index > maxUnlockedPhaseIndex) maxUnlockedPhaseIndex = index;

        const currentPhaseObj = phases[index];
        const recipe = currentPhaseObj.recipe;

        if (phaseTitleEl) phaseTitleEl.textContent = currentPhaseObj.title;
        if (playerRankEl) playerRankEl.textContent = `${currentPhaseObj.rank} • Nível ${currentPhaseObj.phase}`;
        if (phaseBadgeEl) phaseBadgeEl.textContent = `FASE ${currentPhaseObj.phase}`;
        if (missionBadgeEl) missionBadgeEl.textContent = `FASE ${currentPhaseObj.phase} • ${currentPhaseObj.rank.toUpperCase()}`;
        btnBrew.disabled = false;
        
        const ratioString = recipe.ingredients.map(i => i.base).join(" : ");
        if (missionTitleEl) missionTitleEl.textContent = recipe.name;
        if (missionDescEl) missionDescEl.textContent = `Prepare ${recipe.targetQty} unidades mantendo a proporção ${ratioString}.`;
        if (missionRewardTextEl) missionRewardTextEl.textContent = `${recipe.ingredients.length} Ingredientes (${recipe.ingredients.map(i => i.name).join(", ")})`;

        const missionAvatarWrapper = document.getElementById("mission-avatar-wrapper");
        if (missionAvatarWrapper) {
            missionAvatarWrapper.innerHTML = getIconHTML(recipe.iconKey);
        }

        targetQuantity = recipe.targetQty;
        if (currentPotionNameEl) currentPotionNameEl.textContent = recipe.name.toUpperCase();
        if (currentPotionIconEl) currentPotionIconEl.innerHTML = getIconHTML(recipe.iconKey);
        if (currentPotionRatioEl) currentPotionRatioEl.textContent = ratioString;

        playerInputs = new Array(recipe.ingredients.length).fill(0);

        renderIngredientCards(recipe.ingredients);

        renderRecipeList();
        updateCounters();
    }

    function renderIngredientCards(ingredients) {
        ingredientRowsContainer.innerHTML = "";

        ingredients.forEach((ing, idx) => {
            const card = document.createElement("div");
            card.className = "ingredient-card";
            card.innerHTML = `
                <div class="ing-info">
                    <div class="ing-icon-wrapper">${getIconHTML(ing.iconKey)}</div>
                    <span class="ing-name">${ing.name}</span>
                </div>
                <div class="counter-controls">
                    <button class="btn-counter btn-ing-minus" data-index="${idx}">-</button>
                    <span class="counter-value" id="val-ing-${idx}">0</span>
                    <button class="btn-counter btn-ing-plus" data-index="${idx}">+</button>
                </div>
            `;
            ingredientRowsContainer.appendChild(card);
        });

        document.querySelectorAll(".btn-ing-minus").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = parseInt(e.currentTarget.dataset.index);
                if (playerInputs[idx] > 0) {
                    playerInputs[idx]--;
                    updateCounters();
                }
            });
        });

        document.querySelectorAll(".btn-ing-plus").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = parseInt(e.currentTarget.dataset.index);
                playerInputs[idx]++;
                updateCounters();
            });
        });
    }

    function renderRecipeList() {
        recipeListEl.innerHTML = "";
        phases.forEach((p, index) => {
            const isUnlocked = index <= maxUnlockedPhaseIndex;
            const isCurrent = index === currentPhaseIndex;
            const ratioStr = p.recipe.ingredients.map(i => i.base).join(":");
            const li = document.createElement("li");
            li.className = `recipe-item ${isCurrent ? "active" : ""} ${!isUnlocked ? "locked" : ""}`;
            
            let statusBadge = "";
            if (isCurrent) {
                statusBadge = `<span class="mission-tag tag-active">EM ANDAMENTO</span>`;
            } else if (isUnlocked) {
                statusBadge = `<span class="mission-tag tag-unlocked">CONCLUÍDO</span>`;
            } else {
                statusBadge = `<span class="mission-tag tag-next">PRÓXIMA MISSÃO</span>`;
            }

            li.innerHTML = `
                <span class="recipe-icon">${getIconHTML(p.recipe.iconKey)}</span>
                <div class="recipe-info">
                    <div class="recipe-title-row">
                        <h4>Missão ${p.phase}: ${p.recipe.name}</h4>
                        ${statusBadge}
                    </div>
                    <p>Proporção ${ratioStr} &bull; ${p.recipe.ingredients.length} Ingredientes</p>
                </div>
                ${!isUnlocked ? `<span class="lock-badge">${getIconHTML("cadeado")}</span>` : '<span class="active-diamond">✦</span>'}
            `;

            if (isUnlocked) {
                li.addEventListener("click", () => loadPhase(index));
            }
            recipeListEl.appendChild(li);
        });

        setTimeout(() => {
            const activeItem = recipeListEl.querySelector(".recipe-item.active");
            if (activeItem && activeItem.offsetParent) {
                recipeListEl.scrollTo({ top: activeItem.offsetTop - recipeListEl.offsetTop - 8, behavior: "smooth" });
            }
        }, 150);
    }

    // ----------------------------------------------------------------------
    // 8. ATUALIZAÇÃO DO LÍQUIDO E CONTADORES
    // ----------------------------------------------------------------------
    function updateCounters() {
        targetQtyEl.textContent = targetQuantity;

        playerInputs.forEach((val, idx) => {
            const el = document.getElementById(`val-ing-${idx}`);
            if (el) el.textContent = val;
        });

        const totalMix = playerInputs.reduce((sum, val) => sum + val, 0);
        totalPartsEl.textContent = totalMix;
        targetPartsNeededEl.textContent = targetQuantity;

        const fillPercentage = Math.min(100, Math.max(0, Math.round((totalMix / targetQuantity) * 85)));
        potionLiquidFill.style.height = `${fillPercentage}%`;

        updateCauldronLiquidColor(totalMix);
    }

    function updateCauldronLiquidColor(totalMix) {
        const recipe = phases[currentPhaseIndex].recipe;

        if (totalMix === 0) {
            potionLiquidFill.style.background = `transparent`;
            potionPngBase.style.filter = `drop-shadow(0 0 35px rgba(157, 78, 221, 0.75))`;
            return;
        }

        potionLiquidFill.style.background = `linear-gradient(180deg, ${recipe.color} 0%, #150624 100%)`;
        potionPngBase.style.filter = `drop-shadow(0 0 40px ${recipe.color})`;
    }

    // ----------------------------------------------------------------------
    // 9. FUNÇÃO DO DESAFIO: VERIFICAÇÃO GENÉRICA DE PROPORÇÃO
    // ----------------------------------------------------------------------
    function verificarReceita(inputs) {
        const ingredients = phases[currentPhaseIndex].recipe.ingredients;
        if (inputs.some(val => val <= 0)) return false;

        const base0 = ingredients[0].base;
        const input0 = inputs[0];

        for (let i = 1; i < ingredients.length; i++) {
            const baseI = ingredients[i].base;
            const inputI = inputs[i];

            if ((input0 * baseI) !== (inputI * base0)) {
                return false;
            }
        }

        return true;
    }

    // ----------------------------------------------------------------------
    // 10. EFEITO DRAMÁTICO DE EXPLOSÃO DA POÇÃO NA TELA
    // ----------------------------------------------------------------------
    function triggerExplosion() {
        explosionFlash.classList.remove("hidden");
        gsap.fromTo(explosionFlash, 
            { opacity: 1 },
            { opacity: 0, duration: 0.7, ease: "power2.out", onComplete: () => explosionFlash.classList.add("hidden") }
        );

        gsap.timeline()
            .to(gameScreen, { x: -28, y: 18, duration: 0.04, repeat: 7, yoyo: true })
            .to(gameScreen, { x: 0, y: 0, duration: 0.1 });

        gsap.timeline()
            .to(potionPngBase, { scale: 1.35, filter: "brightness(3) contrast(2) drop-shadow(0 0 50px #FF0000)", duration: 0.08 })
            .to(potionPngBase, { scale: 0.85, filter: "brightness(0.2) grayscale(1)", duration: 0.25 })
            .to(potionPngBase, { scale: 1, filter: "drop-shadow(0 0 35px rgba(157, 78, 221, 0.75))", duration: 0.4 });

        explosionParticlesContainer.innerHTML = "";
        const rect = potionStage.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const colors = ["#FF4D6D", "#FF9F1C", "#FFD166", "#D90429", "#FF70A6", "#FFFFFF", "#3A0CA3"];

        for (let i = 0; i < 60; i++) {
            const p = document.createElement("div");
            p.className = "explosion-particle";
            const size = Math.random() * 22 + 6;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            p.style.boxShadow = `0 0 18px ${p.style.backgroundColor}`;
            p.style.left = `${centerX}px`;
            p.style.top = `${centerY}px`;
            explosionParticlesContainer.appendChild(p);

            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 450 + 120;
            const targetX = Math.cos(angle) * dist;
            const targetY = Math.sin(angle) * dist;

            gsap.to(p, {
                x: targetX, y: targetY, opacity: 0, scale: Math.random() * 2.5 + 0.3,
                duration: Math.random() * 0.9 + 0.4, ease: "power2.out", onComplete: () => p.remove()
            });
        }
    }

    // ----------------------------------------------------------------------
    // 11. PREPARAÇÃO DA POÇÃO & EVENTOS DE FEEDBACK EDUCATIVO
    // ----------------------------------------------------------------------
    btnBrew.addEventListener("click", () => {
        const recipe = phases[currentPhaseIndex].recipe;
        const totalMix = playerInputs.reduce((sum, val) => sum + val, 0);
        const isRatioValid = verificarReceita(playerInputs);
        const isTotalValid = totalMix === targetQuantity;

        if (isRatioValid && isTotalValid) {
            btnBrew.disabled = true;
            const playerRatioStr = playerInputs.join(" : ");
            const baseRatioStr = recipe.ingredients.map(i => i.base).join(" : ");

            showToast(`✨ <strong>POÇÃO CRIADA COM SUCESSO!</strong> A proporção ${playerRatioStr} equivale perfeitamente à receita original (${baseRatioStr})!`, true);

            potionLiquidFill.style.background = `linear-gradient(180deg, #70E000 0%, #38B000 100%)`;
            potionPngBase.style.filter = `drop-shadow(0 0 45px #70E000)`;

            gsap.timeline()
                .to(potionStage, { scale: 1.12, yoyo: true, repeat: 1, duration: 0.3 })
                .to(potionStage, { scale: 1, duration: 0.2 });

            addToInventory(recipe);

            playerXp += 150;
            xpCountEl.textContent = playerXp;

            setTimeout(() => openRewardModal(phases[currentPhaseIndex]), 800);

        } else {
            const playerRatioStr = playerInputs.join(" : ");
            const baseRatioStr = recipe.ingredients.map(i => i.base).join(" : ");

            let explanation = `💥 <strong>RECEITA INCORRETA! A POÇÃO EXPLODIU!</strong><br>`;
            explanation += `A receita de <em>${recipe.name}</em> exige a proporção <strong>${baseRatioStr}</strong> entre os ingredientes. Você colocou <strong>${playerRatioStr}</strong>.`;

            if (!isTotalValid && isRatioValid) {
                explanation = `⚠️ <strong>PROPORÇÃO CERTA, MAS VOLUME ERRADO!</strong><br>A proporção está exata (${playerRatioStr}), mas o total no frasco deu ${totalMix} partes em vez de ${targetQuantity}.`;
            }

            showToast(explanation, false);
            triggerExplosion();
        }
    });

    function addToInventory(recipe) {
        if (!inventory[recipe.name]) {
            inventory[recipe.name] = { count: 0, iconKey: recipe.iconKey };
        }
        inventory[recipe.name].count += targetQuantity;
        totalPotionsCreated += targetQuantity;
        potionsCountEl.textContent = totalPotionsCreated;

        renderInventory();
    }

    function renderInventory() {
        const keys = Object.keys(inventory);
        if (keys.length === 0) {
            inventoryGrid.innerHTML = `<p class="empty-inventory">Nenhuma poção preparada ainda.</p>`;
            return;
        }

        inventoryGrid.innerHTML = "";
        keys.forEach((name) => {
            const item = inventory[name];
            const div = document.createElement("div");
            div.className = "inventory-item";
            div.innerHTML = `
                <span class="inventory-icon">${getIconHTML(item.iconKey)}</span>
                <span class="inventory-name">${name}</span>
                <span class="inventory-badge">${item.count}</span>
            `;
            inventoryGrid.appendChild(div);
            gsap.from(div, { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(1.7)" });
        });
    }

    function openRewardModal(phaseObj) {
        rewardMissionName.textContent = `Você dominou a ${phaseObj.recipe.name}!`;
        const nextPhase = phases[phases.indexOf(phaseObj) + 1];
        rewardTextDesc.textContent = nextPhase
            ? `+150 XP • Fase ${nextPhase.phase} Desbloqueada!`
            : `+150 XP • Você completou todas as fases!`;
        claimLabelEl.textContent = nextPhase ? "AVANÇAR PARA A PRÓXIMA FASE" : "CONTINUAR";
        rewardModal.classList.remove("hidden");
        gsap.fromTo(".reward-card", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" });
    }

    btnClaimReward.addEventListener("click", () => {
        rewardModal.classList.add("hidden");
        loadPhase(Math.min(currentPhaseIndex + 1, phases.length - 1));
    });

});

// FAÍSCAS DE FUNDO
function initSparksCanvas() {
    const canvas = document.getElementById("sparks-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const maxParticles = 45;

    class Spark {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 2 + 0.8;
            this.alpha = Math.random() * 0.8 + 0.2;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.7) * 0.5;
            this.pulseSpeed = Math.random() * 0.02 + 0.005;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.alpha += Math.sin(Date.now() * this.pulseSpeed) * 0.008;
            if (this.y < -10 || this.x < -10 || this.x > width + 10) {
                this.reset();
                this.y = height + 10;
            }
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = Math.max(0.1, Math.min(1, this.alpha));
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "#FFFFFF";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#C77DFF";
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < maxParticles; i++) particles.push(new Spark());

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((spark) => { spark.update(); spark.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}
