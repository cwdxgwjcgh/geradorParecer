function construirParecer(nome, valor) {
    const opcoes = {
        notas: {
            "1": ["O desempenho ficou abaixo do que esperávamos, não atingindo a média necessária neste trimestre.", "As notas não atingiram o nível que esperávamos, indicando que existem melhorias a serem feitas.", "Os resultados das avaliações foram menores do que a média prevista.", "As pontuações ficaram abaixo do esperado, sinalizando a necessidade de revisão e mais estudos.", "As notas não chegaram na média que esperávamos, o que sugere que são necessários ajustes para melhorar."],
            "2": ["Apresenta notas baixas, que estão acima do índice crítico, mas ainda não atingem a média.", "As notas neste trimestre são baixas, embora estejam acima do nível crítico, mas ainda ficam abaixo da média.", "Demonstrou rendimento abaixo da média nas avaliações, no geral as notas superam o índice crítico, porém, continuam abaixo da média.", "As notas estão inferiores ao esperado, a situação neste trimestre ainda não é crítica, mas ainda não alcançam a média.", "Atualmente está com notas baixas, que, apesar de estarem acima do índice crítico, permanecem abaixo da média."],
            "3": ["Texto da Opção NOTA 1 para valor 3", "Texto da Opção NOTA 2 para valor 3", "Texto da Opção NOTA 3 para valor 3", "Texto da Opção NOTA 4 para valor 3", "Texto da Opção NOTA 5 para valor 3"],
            "4": ["Texto da Opção NOTA 1 para valor 4", "Texto da Opção NOTA 2 para valor 4", "Texto da Opção NOTA 3 para valor 4", "Texto da Opção NOTA 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        rendimento: {
            "1": ["Texto da Opção RENDIMENTO 1 para valor 1", "Texto da Opção RENDIMENTO 2 para valor 1", "Texto da Opção RENDIMENTO 3 para valor 1", "Texto da Opção RENDIMENTO 4 para valor 1", "Texto da Opção RENDIMENTO 5 para valor 1"],
            "2": ["Texto da Opção RENDIMENTO 1 para valor 2", "Texto da Opção RENDIMENTO 2 para valor 2", "Texto da Opção RENDIMENTO 3 para valor 2", "Texto da Opção RENDIMENTO 4 para valor 2", "Texto da Opção RENDIMENTO 5 para valor 2"],
            "3": ["Texto da Opção RENDIMENTO 1 para valor 3", "Texto da Opção RENDIMENTO 2 para valor 3", "Texto da Opção RENDIMENTO 3 para valor 3", "Texto da Opção RENDIMENTO 4 para valor 3", "Texto da Opção RENDIMENTO 5 para valor 3"],
            "4": ["Texto da Opção RENDIMENTO 1 para valor 4", "Texto da Opção RENDIMENTO 2 para valor 4", "Texto da Opção RENDIMENTO 3 para valor 4", "Texto da Opção RENDIMENTO 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        interesse: {
            "1": ["Texto da Opção INTERESSE 1 para valor 1", "Texto da Opção INTERESSE 2 para valor 1", "Texto da Opção INTERESSE 3 para valor 1", "Texto da Opção INTERESSE 4 para valor 1", "Texto da Opção INTERESSE 5 para valor 1"],
            "2": ["Texto da Opção INTERESSE 1 para valor 2", "Texto da Opção INTERESSE 2 para valor 2", "Texto da Opção INTERESSE 3 para valor 2", "Texto da Opção INTERESSE 4 para valor 2", "Texto da Opção INTERESSE 5 para valor 2"],
            "3": ["Texto da Opção INTERESSE 1 para valor 3", "Texto da Opção INTERESSE 2 para valor 3", "Texto da Opção INTERESSE 3 para valor 3", "Texto da Opção INTERESSE 4 para valor 3", "Texto da Opção INTERESSE 5 para valor 3"],
            "4": ["Texto da Opção INTERESSE 1 para valor 4", "Texto da Opção INTERESSE 2 para valor 4", "Texto da Opção INTERESSE 3 para valor 4", "Texto da Opção INTERESSE 4 para valor 4", "Texto da Opção INTERESSE 5 para valor 4"]
        },
        cooperacao: {
            "1": ["Texto da Opção COOPERACAO 1 para valor 1", "Texto da Opção COOPERACAO 2 para valor 1", "Texto da Opção COOPERACAO 3 para valor 1", "Texto da Opção COOPERACAO 4 para valor 1", "Texto da Opção COOPERACAO 5 para valor 1"],
            "2": ["Texto da Opção COOPERACAO 1 para valor 2", "Texto da Opção COOPERACAO 2 para valor 2", "Texto da Opção COOPERACAO 3 para valor 2", "Texto da Opção COOPERACAO 4 para valor 2", "Texto da Opção COOPERACAO 5 para valor 2"],
            "3": ["Texto da Opção COOPERACAO 1 para valor 3", "Texto da Opção COOPERACAO 2 para valor 3", "Texto da Opção COOPERACAO 3 para valor 3", "Texto da Opção COOPERACAO 4 para valor 3", "Texto da Opção COOPERACAO 5 para valor 3"],
            "4": ["Texto da Opção COOPERACAO 1 para valor 4", "Texto da Opção COOPERACAO 2 para valor 4", "Texto da Opção COOPERACAO 3 para valor 4", "Texto da Opção COOPERACAO 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        participacao: {
            "1": ["Texto da Opção PARTICIPACAO 1 para valor 1", "Texto da Opção PARTICIPACAO 2 para valor 1", "Texto da Opção PARTICIPACAO 3 para valor 1", "Texto da Opção PARTICIPACAO 4 para valor 1", "Texto da Opção PARTICIPACAO 5 para valor 1"],
            "2": ["Texto da Opção PARTICIPACAO 1 para valor 2", "Texto da Opção PARTICIPACAO 2 para valor 2", "Texto da Opção PARTICIPACAO 3 para valor 2", "Texto da Opção PARTICIPACAO 4 para valor 2", "Texto da Opção PARTICIPACAO 5 para valor 2"],
            "3": ["Texto da Opção PARTICIPACAO 1 para valor 3", "Texto da Opção PARTICIPACAO 2 para valor 3", "Texto da Opção PARTICIPACAO 3 para valor 3", "Texto da Opção PARTICIPACAO 4 para valor 3", "Texto da Opção PARTICIPACAO 5 para valor 3"],
            "4": ["Texto da Opção PARTICIPACAO 1 para valor 4", "Texto da Opção PARTICIPACAO 2 para valor 4", "Texto da Opção PARTICIPACAO 3 para valor 4", "Texto da Opção PARTICIPACAO 4 para valor 4", "Texto da Opção PARTICIPACAO 5 para valor 4"]
        },
        trabalhogrupo: {
            "1": ["Texto da Opção TRABALHOGRUPO 1 para valor 1", "Texto da Opção TRABALHOGRUPO 2 para valor 1", "Texto da Opção TRABALHOGRUPO 3 para valor 1", "Texto da Opção TRABALHOGRUPO 4 para valor 1", "Texto da Opção TRABALHOGRUPO 5 para valor 1"],
            "2": ["Texto da Opção TRABALHOGRUPO 1 para valor 2", "Texto da Opção TRABALHOGRUPO 2 para valor 2", "Texto da Opção TRABALHOGRUPO 3 para valor 2", "Texto da Opção TRABALHOGRUPO 4 para valor 2", "Texto da Opção TRABALHOGRUPO 5 para valor 2"],
            "3": ["Texto da Opção TRABALHOGRUPO 1 para valor 3", "Texto da Opção TRABALHOGRUPO 2 para valor 3", "Texto da Opção TRABALHOGRUPO 3 para valor 3", "Texto da Opção TRABALHOGRUPO 4 para valor 3", "Texto da Opção TRABALHOGRUPO 5 para valor 3"],
            "4": ["Texto da Opção TRABALHOGRUPO 1 para valor 4", "Texto da Opção TRABALHOGRUPO 2 para valor 4", "Texto da Opção TRABALHOGRUPO 3 para valor 4", "Texto da Opção TRABALHOGRUPO 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        trabalhoindividual: {
            "1": ["Texto da Opção TRABALHO INDIVIDUAL 1 para valor 1", "Texto da Opção TRABALHO INDIVIDUAL 2 para valor 1", "Texto da Opção TRABALHO INDIVIDUAL 3 para valor 1", "Texto da Opção TRABALHO INDIVIDUAL 4 para valor 1", "Texto da Opção TRABALHO INDIVIDUAL 5 para valor 1"],
            "2": ["Texto da Opção TRABALHO INDIVIDUAL 1 para valor 2", "Texto da Opção TRABALHO INDIVIDUAL 2 para valor 2", "Texto da Opção TRABALHO INDIVIDUAL 3 para valor 2", "Texto da Opção TRABALHO INDIVIDUAL 4 para valor 2", "Texto da Opção TRABALHO INDIVIDUAL 5 para valor 2"],
            "3": ["Texto da Opção TRABALHO INDIVIDUAL 1 para valor 3", "Texto da Opção TRABALHO INDIVIDUAL 2 para valor 3", "Texto da Opção TRABALHO INDIVIDUAL 3 para valor 3", "Texto da Opção TRABALHO INDIVIDUAL 4 para valor 3", "Texto da Opção TRABALHO INDIVIDUAL 5 para valor 3"],
            "4": ["Texto da Opção TRABALHO INDIVIDUAL 1 para valor 4", "Texto da Opção TRABALHO INDIVIDUAL 2 para valor 4", "Texto da Opção TRABALHO INDIVIDUAL 3 para valor 4", "Texto da Opção TRABALHO INDIVIDUAL 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        temas: {
            "1": ["Texto da Opção TEMAS 1 para valor 1", "Texto da Opção TEMAS 2 para valor 1", "Texto da Opção TEMAS 3 para valor 1", "Texto da Opção TEMAS 4 para valor 1", "Texto da Opção TEMAS 5 para valor 1"],
            "2": ["Texto da Opção TEMAS 1 para valor 2", "Texto da Opção TEMAS 2 para valor 2", "Texto da Opção TEMAS 3 para valor 2", "Texto da Opção TEMAS 4 para valor 2", "Texto da Opção TEMAS 5 para valor 2"],
            "3": ["Texto da Opção TEMAS 1 para valor 3", "Texto da Opção TEMAS 2 para valor 3", "Texto da Opção TEMAS 3 para valor 3", "Texto da Opção TEMAS 4 para valor 3", "Texto da Opção TEMAS 5 para valor 3"],
            "4": ["Texto da Opção TEMAS 1 para valor 4", "Texto da Opção TEMAS 2 para valor 4", "Texto da Opção TEMAS 3 para valor 4", "Texto da Opção TEMAS 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        exercicios: {
            "1": ["Texto da Opção EXERCICIOS 1 para valor 1", "Texto da Opção EXERCICIOS 2 para valor 1", "Texto da Opção EXERCICIOS 3 para valor 1", "Texto da Opção EXERCICIOS 4 para valor 1", "Texto da Opção EXERCICIOS 5 para valor 1"],
            "2": ["Texto da Opção EXERCICIOS 1 para valor 2", "Texto da Opção EXERCICIOS 2 para valor 2", "Texto da Opção EXERCICIOS 3 para valor 2", "Texto da Opção EXERCICIOS 4 para valor 2", "Texto da Opção EXERCICIOS 5 para valor 2"],
            "3": ["Texto da Opção EXERCICIOS 1 para valor 3", "Texto da Opção EXERCICIOS 2 para valor 3", "Texto da Opção EXERCICIOS 3 para valor 3", "Texto da Opção EXERCICIOS 4 para valor 3", "Texto da Opção EXERCICIOS 5 para valor 3"],
            "4": ["Texto da Opção EXERCICIOS 1 para valor 4", "Texto da Opção EXERCICIOS 2 para valor 4", "Texto da Opção EXERCICIOS 3 para valor 4", "Texto da Opção EXERCICIOS 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        material: {
            "1": ["Texto da Opção MATERIAL 1 para valor 1", "Texto da Opção MATERIAL 2 para valor 1", "Texto da Opção MATERIAL 3 para valor 1", "Texto da Opção MATERIAL 4 para valor 1", "Texto da Opção MATERIAL 5 para valor 1"],
            "2": ["Texto da Opção MATERIAL 1 para valor 2", "Texto da Opção MATERIAL 2 para valor 2", "Texto da Opção MATERIAL 3 para valor 2", "Texto da Opção MATERIAL 4 para valor 2", "Texto da Opção MATERIAL 5 para valor 2"],
            "3": ["Texto da Opção MATERIAL 1 para valor 3", "Texto da Opção MATERIAL 2 para valor 3", "Texto da Opção MATERIAL 3 para valor 3", "Texto da Opção MATERIAL 4 para valor 3", "Texto da Opção MATERIAL 5 para valor 3"],
            "4": ["Texto da Opção MATERIAL 1 para valor 4", "Texto da Opção MATERIAL 2 para valor 4", "Texto da Opção MATERIAL 3 para valor 4", "Texto da Opção MATERIAL 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        oralidade: {
            "1": ["Texto da Opção ORALIDADE 1 para valor 1", "Texto da Opção ORALIDADE 2 para valor 1", "Texto da Opção ORALIDADE 3 para valor 1", "Texto da Opção ORALIDADE 4 para valor 1", "Texto da Opção ORALIDADE 5 para valor 1"],
            "2": ["Texto da Opção ORALIDADE 1 para valor 2", "Texto da Opção ORALIDADE 2 para valor 2", "Texto da Opção ORALIDADE 3 para valor 2", "Texto da Opção ORALIDADE 4 para valor 2", "Texto da Opção ORALIDADE 5 para valor 2"],
            "3": ["Texto da Opção ORALIDADE 1 para valor 3", "Texto da Opção ORALIDADE 2 para valor 3", "Texto da Opção ORALIDADE 3 para valor 3", "Texto da Opção ORALIDADE 4 para valor 3", "Texto da Opção ORALIDADE 5 para valor 3"],
            "4": ["Texto da Opção ORALIDADE 1 para valor 4", "Texto da Opção ORALIDADE 2 para valor 4", "Texto da Opção ORALIDADE 3 para valor 4", "Texto da Opção ORALIDADE 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        progresso: {
            "1": ["Texto da Opção PROGRESSO 1 para valor 1", "Texto da Opção PROGRESSO 2 para valor 1", "Texto da Opção PROGRESSO 3 para valor 1", "Texto da Opção PROGRESSO 4 para valor 1", "Texto da Opção PROGRESSO 5 para valor 1"],
            "2": ["Texto da Opção PROGRESSO 1 para valor 2", "Texto da Opção PROGRESSO 2 para valor 2", "Texto da Opção PROGRESSO 3 para valor 2", "Texto da Opção PROGRESSO 4 para valor 2", "Texto da Opção PROGRESSO 5 para valor 2"],
            "3": ["Texto da Opção PROGRESSO 1 para valor 3", "Texto da Opção PROGRESSO 2 para valor 3", "Texto da Opção PROGRESSO 3 para valor 3", "Texto da Opção PROGRESSO 4 para valor 3", "Texto da Opção PROGRESSO 5 para valor 3"],
            "4": ["Texto da Opção PROGRESSO 1 para valor 4", "Texto da Opção PROGRESSO 2 para valor 4", "Texto da Opção PROGRESSO 3 para valor 4", "Texto da Opção PROGRESSO 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        organizacao: {
            "1": ["Texto da Opção ORGANIZACAO 1 para valor 1", "Texto da Opção ORGANIZACAO 2 para valor 1", "Texto da Opção ORGANIZACAO 3 para valor 1", "Texto da Opção ORGANIZACAO 4 para valor 1", "Texto da Opção ORGANIZACAO 5 para valor 1"],
            "2": ["Texto da Opção ORGANIZACAO 1 para valor 2", "Texto da Opção ORGANIZACAO 2 para valor 2", "Texto da Opção ORGANIZACAO 3 para valor 2", "Texto da Opção ORGANIZACAO 4 para valor 2", "Texto da Opção ORGANIZACAO 5 para valor 2"],
            "3": ["Texto da Opção ORGANIZACAO 1 para valor 3", "Texto da Opção ORGANIZACAO 2 para valor 3", "Texto da Opção ORGANIZACAO 3 para valor 3", "Texto da Opção ORGANIZACAO 4 para valor 3", "Texto da Opção ORGANIZACAO 5 para valor 3"],
            "4": ["Texto da Opção ORGANIZACAO 1 para valor 4", "Texto da Opção ORGANIZACAO 2 para valor 4", "Texto da Opção ORGANIZACAO 3 para valor 4", "Texto da Opção ORGANIZACAO 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        prazos: {
            "1": ["Texto da Opção PRAZOS 1 para valor 1", "Texto da Opção PRAZOS 2 para valor 1", "Texto da Opção PRAZOS 3 para valor 1", "Texto da Opção PRAZOS 4 para valor 1", "Texto da Opção PRAZOS 5 para valor 1"],
            "2": ["Texto da Opção PRAZOS 1 para valor 2", "Texto da Opção PRAZOS 2 para valor 2", "Texto da Opção PRAZOS 3 para valor 2", "Texto da Opção PRAZOS 4 para valor 2", "Texto da Opção PRAZOS 5 para valor 2"],
            "3": ["Texto da Opção PRAZOS 1 para valor 3", "Texto da Opção PRAZOS 2 para valor 3", "Texto da Opção PRAZOS 3 para valor 3", "Texto da Opção PRAZOS 4 para valor 3", "Texto da Opção PRAZOS 5 para valor 3"],
            "4": ["Texto da Opção PRAZOS 1 para valor 4", "Texto da Opção PRAZOS 2 para valor 4", "Texto da Opção PRAZOS 3 para valor 4", "Texto da Opção PRAZOS 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        conversas: {
            "1": ["Texto da Opção CONVERSAS 1 para valor 1", "Texto da Opção CONVERSAS 2 para valor 1", "Texto da Opção CONVERSAS 3 para valor 1", "Texto da Opção CONVERSAS 4 para valor 1", "Texto da Opção CONVERSAS 5 para valor 1"],
            "2": ["Texto da Opção CONVERSAS 1 para valor 2", "Texto da Opção CONVERSAS 2 para valor 2", "Texto da Opção CONVERSAS 3 para valor 2", "Texto da Opção CONVERSAS 4 para valor 2", "Texto da Opção CONVERSAS 5 para valor 2"],
            "3": ["Texto da Opção CONVERSAS 1 para valor 3", "Texto da Opção CONVERSAS 2 para valor 3", "Texto da Opção CONVERSAS 3 para valor 3", "Texto da Opção CONVERSAS 4 para valor 3", "Texto da Opção CONVERSAS 5 para valor 3"],
            "4": ["Texto da Opção CONVERSAS 1 para valor 4", "Texto da Opção CONVERSAS 2 para valor 4", "Texto da Opção CONVERSAS 3 para valor 4", "Texto da Opção CONVERSAS 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        pontualidade: {
            "1": ["Texto da Opção PONTUALIDADE 1 para valor 1", "Texto da Opção PONTUALIDADE 2 para valor 1", "Texto da Opção PONTUALIDADE 3 para valor 1", "Texto da Opção PONTUALIDADE 4 para valor 1", "Texto da Opção PONTUALIDADE 5 para valor 1"],
            "2": ["Texto da Opção PONTUALIDADE 1 para valor 2", "Texto da Opção PONTUALIDADE 2 para valor 2", "Texto da Opção PONTUALIDADE 3 para valor 2", "Texto da Opção PONTUALIDADE 4 para valor 2", "Texto da Opção PONTUALIDADE 5 para valor 2"],
            "3": ["Texto da Opção PONTUALIDADE 1 para valor 3", "Texto da Opção PONTUALIDADE 2 para valor 3", "Texto da Opção PONTUALIDADE 3 para valor 3", "Texto da Opção PONTUALIDADE 4 para valor 3", "Texto da Opção PONTUALIDADE 5 para valor 3"],
            "4": ["Texto da Opção PONTUALIDADE 1 para valor 4", "Texto da Opção PONTUALIDADE 2 para valor 4", "Texto da Opção PONTUALIDADE 3 para valor 4", "Texto da Opção PONTUALIDADE 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        comprometimento: {
            "1": ["Texto da Opção COMPROMETIMENTO 1 para valor 1", "Texto da Opção COMPROMETIMENTO 2 para valor 1", "Texto da Opção COMPROMETIMENTO 3 para valor 1", "Texto da Opção COMPROMETIMENTO 4 para valor 1", "Texto da Opção COMPROMETIMENTO 5 para valor 1"],
            "2": ["Texto da Opção COMPROMETIMENTO 1 para valor 2", "Texto da Opção COMPROMETIMENTO 2 para valor 2", "Texto da Opção COMPROMETIMENTO 3 para valor 2", "Texto da Opção COMPROMETIMENTO 4 para valor 2", "Texto da Opção COMPROMETIMENTO 5 para valor 2"],
            "3": ["Texto da Opção COMPROMETIMENTO 1 para valor 3", "Texto da Opção COMPROMETIMENTO 2 para valor 3", "Texto da Opção COMPROMETIMENTO 3 para valor 3", "Texto da Opção COMPROMETIMENTO 4 para valor 3", "Texto da Opção COMPROMETIMENTO 5 para valor 3"],
            "4": ["Texto da Opção COMPROMETIMENTO 1 para valor 4", "Texto da Opção COMPROMETIMENTO 2 para valor 4", "Texto da Opção COMPROMETIMENTO 3 para valor 4", "Texto da Opção COMPROMETIMENTO 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        atencao: {
            "1": ["Texto da Opção ATENCAO 1 para valor 1", "Texto da Opção ATENCAO 2 para valor 1", "Texto da Opção ATENCAO 3 para valor 1", "Texto da Opção ATENCAO 4 para valor 1", "Texto da Opção ATENCAO 5 para valor 1"],
            "2": ["Texto da Opção ATENCAO 1 para valor 2", "Texto da Opção ATENCAO 2 para valor 2", "Texto da Opção ATENCAO 3 para valor 2", "Texto da Opção ATENCAO 4 para valor 2", "Texto da Opção ATENCAO 5 para valor 2"],
            "3": ["Texto da Opção ATENCAO 1 para valor 3", "Texto da Opção ATENCAO 2 para valor 3", "Texto da Opção ATENCAO 3 para valor 3", "Texto da Opção ATENCAO 4 para valor 3", "Texto da Opção ATENCAO 5 para valor 3"],
            "4": ["Texto da Opção ATENCAO 1 para valor 4", "Texto da Opção ATENCAO 2 para valor 4", "Texto da Opção ATENCAO 3 para valor 4", "Texto da Opção ATENCAO 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        iniciativa: {
            "1": ["Texto da Opção INICIATIVA 1 para valor 1", "Texto da Opção INICIATIVA 2 para valor 1", "Texto da Opção INICIATIVA 3 para valor 1", "Texto da Opção INICIATIVA 4 para valor 1", "Texto da Opção INICIATIVA 5 para valor 1"],
            "2": ["Texto da Opção INICIATIVA 1 para valor 2", "Texto da Opção INICIATIVA 2 para valor 2", "Texto da Opção INICIATIVA 3 para valor 2", "Texto da Opção INICIATIVA 4 para valor 2", "Texto da Opção INICIATIVA 5 para valor 2"],
            "3": ["Texto da Opção INICIATIVA 1 para valor 3", "Texto da Opção INICIATIVA 2 para valor 3", "Texto da Opção INICIATIVA 3 para valor 3", "Texto da Opção INICIATIVA 4 para valor 3", "Texto da Opção INICIATIVA 5 para valor 3"],
            "4": ["Texto da Opção INICIATIVA 1 para valor 4", "Texto da Opção INICIATIVA 2 para valor 4", "Texto da Opção INICIATIVA 3 para valor 4", "Texto da Opção INICIATIVA 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        resiliencia: {
            "1": ["Texto da Opção RESILIENCIA 1 para valor 1", "Texto da Opção RESILIENCIA 2 para valor 1", "Texto da Opção RESILIENCIA 3 para valor 1", "Texto da Opção RESILIENCIA 4 para valor 1", "Texto da Opção RESILIENCIA 5 para valor 1"],
            "2": ["Texto da Opção RESILIENCIA 1 para valor 2", "Texto da Opção RESILIENCIA 2 para valor 2", "Texto da Opção RESILIENCIA 3 para valor 2", "Texto da Opção RESILIENCIA 4 para valor 2", "Texto da Opção RESILIENCIA 5 para valor 2"],
            "3": ["Texto da Opção RESILIENCIA 1 para valor 3", "Texto da Opção RESILIENCIA 2 para valor 3", "Texto da Opção RESILIENCIA 3 para valor 3", "Texto da Opção RESILIENCIA 4 para valor 3", "Texto da Opção RESILIENCIA 5 para valor 3"],
            "4": ["Texto da Opção RESILIENCIA 1 para valor 4", "Texto da Opção RESILIENCIA 2 para valor 4", "Texto da Opção RESILIENCIA 3 para valor 4", "Texto da Opção RESILIENCIA 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        respeitocolegas: {
            "1": ["Texto da Opção RESPEITO COLEGAS 1 para valor 1", "Texto da Opção RESPEITO COLEGAS 2 para valor 1", "Texto da Opção RESPEITO COLEGAS 3 para valor 1", "Texto da Opção RESPEITO COLEGAS 4 para valor 1", "Texto da Opção RESPEITO COLEGAS 5 para valor 1"],
            "2": ["Texto da Opção RESPEITO COLEGAS 1 para valor 2", "Texto da Opção RESPEITO COLEGAS 2 para valor 2", "Texto da Opção RESPEITO COLEGAS 3 para valor 2", "Texto da Opção RESPEITO COLEGAS 4 para valor 2", "Texto da Opção RESPEITO COLEGAS 5 para valor 2"],
            "3": ["Texto da Opção RESPEITO COLEGAS 1 para valor 3", "Texto da Opção RESPEITO COLEGAS 2 para valor 3", "Texto da Opção RESPEITO COLEGAS 3 para valor 3", "Texto da Opção RESPEITO COLEGAS 4 para valor 3", "Texto da Opção RESPEITO COLEGAS 5 para valor 3"],
            "4": ["Texto da Opção RESPEITO COLEGAS 1 para valor 4", "Texto da Opção RESPEITO COLEGAS 2 para valor 4", "Texto da Opção RESPEITO COLEGAS 3 para valor 4", "Texto da Opção RESPEITO COLEGAS 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        },
        respeitodocentes: {
            "1": ["Texto da Opção RESPEITO DOCENTES 1 para valor 1", "Texto da Opção RESPEITO DOCENTES 2 para valor 1", "Texto da Opção RESPEITO DOCENTES 3 para valor 1", "Texto da Opção RESPEITO DOCENTES 4 para valor 1", "Texto da Opção RESPEITO DOCENTES 5 para valor 1"],
            "2": ["Texto da Opção RESPEITO DOCENTES 1 para valor 2", "Texto da Opção RESPEITO DOCENTES 2 para valor 2", "Texto da Opção RESPEITO DOCENTES 3 para valor 2", "Texto da Opção RESPEITO DOCENTES 4 para valor 2", "Texto da Opção RESPEITO DOCENTES 5 para valor 2"],
            "3": ["Texto da Opção RESPEITO DOCENTES 1 para valor 3", "Texto da Opção RESPEITO DOCENTES 2 para valor 3", "Texto da Opção RESPEITO DOCENTES 3 para valor 3", "Texto da Opção RESPEITO DOCENTES 4 para valor 3", "Texto da Opção RESPEITO DOCENTES 5 para valor 3"],
            "4": ["Texto da Opção RESPEITO DOCENTES 1 para valor 4", "Texto da Opção RESPEITO DOCENTES 2 para valor 4", "Texto da Opção RESPEITO DOCENTES 3 para valor 4", "Texto da Opção RESPEITO DOCENTES 4 para valor 4", "Texto da Opção NORA 5 para valor 4"]
        }
    };

    if (opcoes[nome] && valor in opcoes[nome]) {
        const indiceAleatorio = Math.floor(Math.random() * opcoes[nome][valor].length);
        return opcoes[nome][valor][indiceAleatorio];
    }
}


function parecer() {
    const form = document.getElementById('respostas');
    const dados = {};

    for (let i = 0; i < form.elements.length; i++) {
        const camposVerificados = [
            "notas", "rendimento", "interesse", "cooperacao", "participacao",
            "trabalhogrupo", "trabalhoindividual", "temas", "exercicios", "material",
            "oralidade", "progresso", "organizacao", "prazos", "conversas",
            "pontualidade", "comprometimento", "atencao", "iniciativa", "resiliencia",
            "respeitocolegas", "respeitodocentes"
        ];

        for (let i = 0; i < form.elements.length; i++) {
            const elemento = form.elements[i];
            const nome = elemento.name;
            const valor = elemento.value;

            if (camposVerificados.includes(nome) && elemento.checked) {
                dados[nome] = valor;
            } else if (["nome", "turma", "componente", "escola", "ano", "trimestre"].includes(nome)) {
                dados[nome] = valor;
            }
        }
    }


    const parecerDiv = document.getElementById("parecer")

    let parecerString = "<ul>"

    const propriedadesEspecificas = {
        nome: "Nome",
        turma: "Turma",
        disciplina: "Componente Curricular",
        escola: "Escola",
        ano: "Ano",
        trimestre: "Trimestre"
    };

    for (const prop in dados) {
        if (prop in propriedadesEspecificas) {
            parecerString += `<li><b>${propriedadesEspecificas[prop]}:</b> ${dados[prop]}</li>`;
        } else {
            if(dados[prop] > 0){
                parecerString += `<li><b>${prop}:</b> ${construirParecer(prop, dados[prop])}</li>`;    
            }
        }
    }

    parecerString += "</ul>"

    parecerDiv.innerHTML = parecerString

}