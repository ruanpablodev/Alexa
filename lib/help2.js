// NรO REMOVA OS CREDITOS POR FAVOR, LEVOU MUITO TEMPO PRA SE FAZER UM BOT ASSIM!
const config = require('./config/config.json')
const prefix = config.prefix
exports.help = help()
function help() {
	return `
    ๐ฅช Abaixo estรฃo minhas funรงรตes.
   
    
    
โญโโโใ  *โฌ ๐ฐ๐๐๐ก๐ ๐ฑ๐๐ โญ*  ใโโโ
โโน๏ธ Conheรงa a alexa */sobre*
โโน๏ธ Bugs, Erros? */report*
โโน๏ธ Ver as regras */regras*
โฐโโโโโโโโโโโโโโโโโโโ   
    
โญโโโใ๐ โฌ ๐๐๐๐๐๐ โญ ๐ใโโ
โ
โ     โฌโ๏ธโญ _/rpg_
โ     โฌโโญ _/painel_  
โ     โฌ๐งโญ _/stickers_ 
โ     โฌโกโญ _/animes_ 
โ     โฌ๐โญ _/estudos_
โ     โฌ๐จโญ _/logos_
โ     โฌ๐จโญ _/animais_
โ     โฌ๐ฐโญ _/avanรงado_
โ     โฌ๐ฎ๐ปโญ _/admins_ 
โ     โฌ๐โญ _/kill_
โ     โฌ๐โญ _/adulto_
โ     โฌ๐ฅโญ _/down_
โ     โฌ๐โญ _/letras_
โ     โฌโ๏ธโญ _/outros_
โฐโโโโโโโโโโโโโโโโโโโ
_visite nosso Grupo_
https://chat.whatsapp.com/KVYnbSgISihETodPEpHbf5`
}

exports.animesa = animesa()
function animesa() {
	return `
โญโโโใ*[Painel sobre comandos Animes]* 
โ
โ        ๐จ โฌ ANIMES โญ ๐จ
โ
โ *1 - /icon*
โ โ _Icones para perfil._
โ *2 - /holo*
โ โ _Fotos da Personagem Holo._
โ *3 - /yaoi*
โ โ _Sem hentai._
โ *4 - /face>
โ โ _Icon do rosto de garotas de anime._
โ *5 - /truth*
โ โ _Algumas verdades do universo dos animes._
โ *6 - /feed*
โ โ _Eventos que tem haver com comidas em animes._
โ *7 - /yuri*
โ โ _Caso goste de algo lesbico em anime._
โ *8 - /pokemon*
โ โ _Foto de pokemon._
โ *9 - /randomwall*
โ โ _Wallpapers de Anime._
โ *10 - /randomanime*
โ โ _Enviarei fotos de anime aleatorias._
โ *11 - /loli*
โ โ _Fotos de lolis._
โ *12 - /waifu*
โ โ _Fotos de waifus.*
โ *13 - /anime <nome>*
โ โ _Pesquiso um anime._
โ *14 - /neko*
โ โ _Envio fotos de neko._
โ *15 - /husb*
โ โ _Foto de Husbs._
โ *16 - /dva*
โ โ _Obter fotos da DVA do OverWatch._
โ *17 - /search <digite em foto de anime>*
โ โ _Pesquiso o anime por foto._
โ *18 - /nekowall*
โ โ _Wallpapers de mobile._
โ *19 - /hug*
โ โ _ร aqui que eu boto fotos fofinhas que tem um_
โ _abraรงo entre personagens de anime._
โ *20 - /Baguette*
โ โ _Jรก รฉ hora do meu pรฃozinho?!_
โ
โ _Comando sem resposta, servidor offline!_
โฐโโโโโโโโโโโโโโโโโโโ
`
}

exports.rpg = rpg()
function rpg() {
	return `
    ๐ฅช Abaixo estรฃo minhas funรงรตes.
   
    
    
โญโโโใ  *โฌ ๐ฐ๐๐๐ก๐ ๐ฑ๐๐ โญ*  ใโโโ
โโน๏ธ Conheรงa a alexa */sobre*
โโน๏ธ Bugs, Erros? */report*
โโน๏ธ Ver as regras */regras*
โฐโโโโโโโโโโโโโโโโโโโ   
    
โญโโโใ๐ โฌ ๐๐๐๐๐๐ โญ ๐ใโโ
โ
โ     โฌโ๏ธโญ _/rpg_
โ     โฌโโญ _/painel_  
โ     โฌ๐งโญ _/stickers_ 
โ     โฌโกโญ _/animes_ 
โ     โฌ๐โญ _/estudos_
โ     โฌ๐จโญ _/logos_
โ     โฌ๐จโญ _/animais_
โ     โฌ๐ฐโญ _/avanรงado_
โ     โฌ๐ฎ๐ปโญ _/admins_ 
โ     โฌ๐โญ _/kill_
โ     โฌ๐โญ _/adulto_
โ     โฌ๐ฅโญ _/down_
โ     โฌ๐โญ _/letras_
โ     โฌ๐โญ _/humor_
โ     โฌโ๏ธโญ _/outros_
โฐโโโโโโโโโโโโโโโโโโโ
_visite nosso Grupo_
https://chat.whatsapp.com/KVYnbSgISihETodPEpHbf5`
}


exports.down = down()
function down() {
    return `
	โญโโโใ*[Painel de Downloads]*ใโโโ
โ    
โ *Caso algum comando nรฃo funcione, 
โsignifica que o servidor caiu e รฉ 
โnecessario esperar.*
โ    
โโโโใ๐ฅ โฌ Downloads โญ ๐ฅใโโโ
โ    
โ *1 - /happymod <apk>*
โ โ _Info e download de apk._
โฐโโโโโโโโโโโโโโโโโโโ`
}

exports.adult = adult()
function adult() {
    return `
    โญโใ *[Comandos do PV-Grupos NSFW]* ใโ
    โ
    โ๐ โฌ Adulto โญ ๐
    โ *1 - /randomNeko*
    โ โ _Temos hentai de nekos por aqui e.e_
    โ *2 - /ihentai*
    โ โ _Mas se nรต gostar, temos aleatorios_
    โ _tambรฉm!_
    โ *3 - /nh (codigo)*
    โ โ _Seja feliz vendo NHentai comigo e.e_
    โ *4 - /trap*
    โ โ _Se vocรช gosta de traps, isso รฉ pra_
    โ _vocรช e.e_
    โ *5 - /blowjob*
    โ โ _Fotinhas de blowjob em anime._
    โ *6 - /iecchi*
    โ โ _Umas fotos de ecchi que tenho_
    โ _aqui..._
    โ *7 - /feet*
    โ โ _Hentai para os amantes de pezinho._
    โ *8 - /lick*
    โ โ _"Lambidinha..."_
    โ *9 - /femdom*
    โ โ _Meio que um yuri...hentai..._
    โ *10 - /futanari*
    โ โ _Vai uma futanari?_
    โ *11 - /boobs*
    โ โ _Olha a tetinhaaa..._
    โ *12 - /masturb*
    โ โ _Hmmm, garotas solo..._
    โ *13 - /anal*
    โ โ _Hentai "padrรฃo" de anal claro._
    โ *14 - /nsfwicon*
    โ โ _Foto de perfil /18 por aqui..._
    โ *15 - /randomLoli*
    โ โ _Hentai do tipo Lolicon._
    โ *16 - /hard*
    โ โ _Hentai de diciplinaรงรฃo, por exemplo,_
    โ   _hentai de tapas na bunda._
    โ *17 - /pezinho*
    โ โ _Fotos de pezinho._
    โ *18 - /porn*
    โ โ _Pornografia real._
    โ *19 - /lesbica*
    โ โ _Lesbicas reais se pegando._
    โ *20 - /pgay*
    โ โ _Pornografia gay para quem curte._
    โ *21 - /peitos*
    โ โ _Fotos de peitos reais._
    โ *22 - /bdsm*
    โ โ _Fotos BDSM._
    โ *23 - /coroas*
    โ โ _Milfs reais._
    โ *24 - /buceta*
    โ โ _Belas maรงas cortadas pela_
    โ _metade..._
    โ *25 - /bunda*
    โ โ _Bundas..._
    โ *26 - /bblack*
    โ โ _Bundas negras.._
    โ *27 - /traps*
    โ โ _Fotos de traps..._
    โ *28 - /femboy*
    โ โ _Fotos de Female Boys.._
    โ *29 - /penis*
    โ โ _Fotos de pรชnis..._
    โ *30 - /garotas*
    โ โ _nuds de garotas lindas..._
    โ *31 - /sporn <termo>*
    โ โ _Pesquiso vรญdeo relacionado ao_
    โ _termo_
    โ   _descrito._
    โ *32 - /xvideos <link>*
    โ โ _Baixo vรญdeo do XVideos._
    โ
    โ _Comando sem resposta, servidor_
    โ _offline!_
    โฐโโโโโโโโโโโโโโโโโโโ`
}

exports.owner = owner()
function owner() {
    return `
*โ? [Meu dono Apenas] โ?*

*1 - ${prefix}Clearall*
_Com isso todas as mensagens sรฃo limpas mas certifique-se de desativar o Welcome e o Anti-Fakes antes._

*2 - ${prefix}Broad <-all/-gp> (mensagem)*
_Posso enviar uma mensagem para todos ou apenas os grupos usando, mas cuidado com BAN (se for muitos)._

*3 - ${prefix}Leaveall*
_Se desejar saio de todos os grupos._

*4 - ${prefix}Tela*
_Peรงa-me um print da tela._

*5 - ${prefix}Blocklist*
_Saiba quem tentou me ligar, atacar ou floodar._

*6 - ${prefix}mutepv <nรบmero sem + ou ->*
_Mande a Alexa ignorar pessoas no PV._

*7 - ${prefix}encerrar*
_Faz com que eu me desligue._

*8 - ${prefix}Exclusive [on|off]*
_Ativa os comandos exclusivos como bomb, anti links/porno._

*9 - ${prefix}kickall*
_Remova todos os membros._

*10 - ${prefix}cmd <comando>*
_Rode terminal/programaรงรฃo pelo WhatsApp._

*11 - ${prefix}block <numero> ou <marque uma mensagem>*
_Bloqueia pessoas._

*12 - ${prefix}unblock <numero> ou <marque uma mensagem>*
_Desbloqueia pessoas._

*13 - ${prefix}give <@Pessoa> <Quantidade>*
_Adquira ou dรช XP para as pessoas e si mesmo._`
}

exports.admins = admins()
function admins() {
    return `
*โ? [Administradores Apenas] โ?*
_Comandos que apenas os ademiros podem usar!_

*1 - ${prefix}kick @user ou <Marque uma mensagem>*
_Expulse bebados do bar (pode ser mais de 1)._

*2 - ${prefix}promote @user ou <Marque uma mensagem>*
_Faรงa os bebados do bar virarem administradores._

*3 - ${prefix}leave*
_Se quiser eu saio do barzinho._

*4 - ${prefix}demote @user ou <Marque uma mensagem>*
_Isso รฉ pra vocรช demitir administradores do barzinho._

*5 - ${prefix}everyone <assunto>*
_Marque todos os bebados para uma porradaria! ~Brincadeira, ou nรฃo~_

*6 - ${prefix}del [Marque a mensagem do BOT]*
_Se precisar deletar minhas mensagens, use isso._

*7 - ${prefix}onlyadms [on|off]*
_Com isso eu fecho o bar apenas para os administradores, e vice versa._

*8 - ${prefix}setimage*
_Dรช ao seu bar uma cara nova!_

*9 - ${prefix}revoke*
_Se usar isso, eu irei resetar o link._

*10 - ${prefix}Bomb <nรบmero sem espaco, + e - >*
_Ataque com spam SMS quem vier fazer gracinhas em seu grupo._

*11 - ${prefix}blacklist <on/off>*
_Bane quem tiver nela quando entrarem no grupo._

*12 - ${prefix}fake <on/off>*
_Bane nรบmeros de fora do seu paรญs._

*13 - ${prefix}bklist <on/off nรบmero>*
_Adicione ou remova pessoas da blacklist._

*14 - ${prefix}mute <on/off>*
_Faz com que eu pare de fazer comandos no grupo de quem usou._

*15 - ${prefix}unkick <Marque uma mensagem>*
_Desfaz um ban._

*16 - ${prefix}autosticker <on/off>*
_Faz stickers com todas as fotos que mandarem._

*17 - ${prefix}welcome [enable|disable]*
_Me faz dar Boas-Vindas e Good-Bye._

*18 - ${prefix}rank <On/Off>*
_Ativa o sistema de "RPG"._`
}

exports.readme = readme()
function readme() {
    return `
โพ Menu de ajuda โฝ

Caso nรฃo entenda, chame o meu dono, use o comando ${prefix}criador ou pergunte no grupo que alguรฉm com certeza te ajudarรก! XD

Quando eu tiver tempo colocarei tutoriais aqui e.e

Obrigado pelo uso!

Programador oficial desse BOT: wa.me/553196891466`
}

exports.donate = donate()
function donate() {
    return `
_Nรฃo รฉ necessรกrio, mas caso vocรช queira contibuir, =_

_O PIX รฉ =_ 

553196891466

_Se caso precisar, venha falar comigo wa.me/553196891466.
โค๏ธ`
}

exports.lang = lang()
function lang() {
    return `
โพ Linguas do comando de Voz โฝ
       โพ Use sem ' ' โฝ
	
'af' =  'Africano'

'ar' =  'Arabico'

'au' =  'Inglรชs da Australia'

'br' =  'Portuguรชs do Brasil' 

'ca' =  'Catalรฃ (Catalonia)'

'cn' =  'Chinรชs (Mandarin/China)'

'cs' =  'Tcheca'

'cy' =  'Galรชs'

'da' =  'Dinamarquรชs'

'de' =  'Germanico/Alemรฃo'

'el' =  'Grega'

'en' =  'Inglรชs'

'eo' =  'Esperanto'

'es' =  'Espanhol'

'fi' =  'Finlandรชs'

'fr' =  'Francรชs'

'hi' =  'Hindi'

'hr' =  'Croรกcio'

'ht' =  'Haitiano'

'hu' =  'Hรบngaro'

'hy' =  'Armenico'

'id' =  'Indonesio'

'is' =  'islandรชs'

'it' =  'Italiano'

'jp' =  'Japonรชs'

'ko' =  'Coreano'

'la' =  'Latim'

'lv' =  'Letonรชs'

'mk' =  'Macedรณnio'

'nl' =  'Holandรชs'

'no' =  'Norueguรชs'

'pl' =  'Polonรชs'

'pt' =  'Portuguรชs de Portugal'

'ro' =  'Romeno'

'ru' =  'Russo'

'sk' =  'Eslovaco'

'sp' =  'Espanhol da Espanha'

'sq' =  'Albanรชs'

'sr' =  'Servia'

'su' =  'Espanhol dos Estados Unidos'

'sv' =  'Sueco'

'sw' =  'Suaรญli'

'ta' =  'Tamil'

'th' =  'Thailandรชs'

'tr' =  'Turco'

'tw' =  'Chinรชs (Mandarin/Taiwan)'

'uk' =  'Inglรชs do Reino Unido)'

'us' =  'Inglรชs dos Estados Unidos'

'vi' =  'Vietnamita'

'yu' =  'Chinรชs (Cantonesa)'

'zh' =  'Chinรชs'`
}

exports.convh = convh()
function convh() {
	return `_Para usar vocรช deve digitar_ *${prefix}conv [-sigla] [Nรบmero para conversรฃo]* _, confira abaixo as siglas e um exemplo._
	
*-h* _= Esse menu._

*-c* _= Converte de Fahfenheit para Celsius._

*-f* _= Converte Celsius para Fahfenheit._

*-q* _= Converte Milhas para Quilรดmetros._

*-m* _= Converte Quilรดmetros para Milhas._

_Exemplo de uso:_ *${prefix}conv -c 113*
`}

exports.avan = avan()
function avan() {
	return `
    โญโโใ *[COMANDOS AVANรADO]* 
    โ
    โ      ๐ฐ โฌ AVANรADO โญ ๐ฐ
    โ 
    โ *1 - /play <nome>*
    โ _ou_ */play2 <nome>*     
    โ โ _Baixo mรบsica pra vocรช._
    โ *2 - /video <nome>*
    โ โ _Baixo vรญdeo pra vocรช._
    โ *3 - /mp3 <link>*
    โ โ _Baixe mรบsica por link._
    โ *4 - /mp4 <link>*
    โ โ _Baixe vรญdeo por link._
    โ *5 - /placa <AAA1010>*
    โ โ _Informo sobre o veiculo._
    โ *6 - /sip <IP>*
    โ โ _Puxo dados sobre o IP._
    โ *7 - /scep <CEP>*
    โ โ _Puxo dados sobre o CEP._
    โ *8 - /scnpj <CNJP>*
    โ โ _Puxo dados sobre o CNPJ._
    โ *9 - /card*
    โ โ _Envio Cartรตes de Crรฉdito._
    โ *10 - /fb <link>*
    โ โ _Baixo vรญdeo do Facebook._
    โ *11 - /ig <link>*
    โ โ _Baixo vรญdeo do Instagram._
    โ *12 - /twitter <link>*
    โ โ _Baixo vรญdeo do Twitter._
    โ *13 - /letra <nome da mรบsica>*
    โ โ _Busque letras de mรบsica._
    โ *14 - /Encode <frase>*
    โ โ _Converta frases e nรบmeros para Binario._
    โ *15 - /Decode <nome>*
    โ โ _Traduza Binario._
    โ *16 - /Covid <Paรญs em Inglรชs>*
    โ โ _Obtenha o total de casos do Covid-19._
    โ *17 - /Paises*
    โ โ _Obtenha a lista de paรญses para o comando acima._
    โ *18 - /email <email> | <Assunto> | <Texto>*
    โ โ _Mande um email anรดnimo para alguรฉm._
    โ
    โ _Comando sem resposta, servidor offline!_
    โฐโโโโโโโโโโโโโโโโโโโ
`}

exports.animais = animais()
function animais() {
	return `
    โญโโโใ*[Painel de Animal]*   
    โ
    โ   ๐ถ โฌ Animais โญ ๐
    โ
    โ *1 - /dog*
    โ โ _Envio uma imagem de um doguinho._
    โ *2 - /gato*
    โ โ _Envio imagem de um doguinho._
    โ *3 - /fatos*
    โ โ _Digo fatos de animais._
    โ *4 - /lizard*
    โ โ _Envio foto de lagarto._
    โ *5 - /quack*
    โ โ _Envio foto de patos._
    โ *6 - /macaco*
    โ โ _Envio foto de macacos._
    โ *7 - /fox*
    โ โ _Envio foto de raposas._
    โ
    โ _Comando sem resposta, servidor offline!_
    โฐโโโโโโโโโโโโโโโโโโโ
`}

exports.estudo = estudo()
function estudo() {
	return `
    โญโโโใ*[Painel de Estudos]*  
    โ
    โ        ๐ โฌ Estudos โญ ๐
    โ
    โ *1 - /nasa*
    โ โ _Obtenha informaรงรตes da nasa._
    โ *2 - /conv -h*
    โ โ _Converta temperatura ou distรขncia._
    โ *3 - /brainly <termo>*
    โ โ _Pesquise no brainly._
    โ *4 - /google <termo>*
    โ โ _Pesquise coisas no google._
    โ *5 - /math <expressรฃo>*
    โ โ _Realizo calculos de matemรกtica._
    โ 
    โ _Comando sem resposta, servidor offline!_
    โฐโโโโโโโโโโโโโโโโโโโ
`}

exports.logo = logo()
function logo() {
	return `
    โญโโโใ*[Painel de Logo Makers]*  
    โ
    โ         ๐จ โฌ LOGOS โญ ๐จ
    โ
    โ *1 - /luzes*
    โ โ _logo com efeito Luz._
    โ *2 - /water*
    โ โ _logo com efeito tinta d'agua._
    โ *3 - /retro*
    โ โ _logo estilo anos 80's._
    โ *4 - /Light <Frase>*
    โ โ _Uma logo de neon em luz._
    โ *5 - /3D <texto>*
    โ โ _Crie textos em 3D._
    โ *6 - /gaming <nome>*
    โ โ _Crie logos de jogador._
    โ
    โ _Comando sem resposta, servidor offline!_
    โฐโโโโโโโโโโโโโโโโโโโ
`}

exports.painel = painel()
function painel() {
	return `
    โญโโโใ*[Comandos com a Iris]*  
    โ
    โ       ๐ โฌ Painel โญ ๐
    โ
    โ *1 - /tts <br> <frase>*
    โ โ _Converse comigo._
    โ *2 - /speak <frase>*
    โ โ _Converse em aรบdio comigo._
    โ *3 - /ptt <marque um aรบdio>*
    โ โ _Roubo o aรบdio._
    โ *4 - /get <marque um aรบdio>*
    โ โ _Envio o aรบdio._
    โ *5 - /status*
    โ โ _Veja meu status._
    โ *6 - /gadometro <mencione ou nรฃo>*
    โ โ _Irei calcular o seu nivel de gado._
    โ *7 - /resposta <frase>*
    โ โ _Adicione respostas a Iris._
    โ *8 - /slap <mencione>*
    โ โ _Tapa na pessoa._
    โ *9 - /hug <mencione>*
    โ โ _Abraรงa a pessoa._
    โ *10 - /cafune*
    โ โ _Todos nรณs gostamos de cafune._
    โ *11 - /cocegas*
    โ โ _Cocegaaaaas, hahahaaha._
    โ *12 - /ball*
    โ โ _Ball de frases aleatorias._
    โ *13 - /baka*
    โ โ _Bakaa!_
    โ *14 - /inverter <frase>*
    โ โ _Inverta frases._
    โ *15 - /ping*
    โ โ _Veja minha velocidade de resposta._
    โ *16 - /contar <mensagem>*
    โ โ _Quer contas as letras que tem em um texto?_
    โ *17 - /death <nome>*
    โ โ _Digo o tempo de morte de nomes._
    โ *18 - /gender <nome>*
    โ โ _Se quiser saber sobre nome de alguรฉm._
    โ *19 - /kiss <mencione>*
    โ โ _Beija a pessoa._
    โ *20 - /msg <frase>*
    โ โ _Brinca de mimica com a Iris._
    โ *21 - /make <frase>*
    โ โ _Caso queira escrever um diรกrio DeathNote._
    โ *22 - /random <assunto>*
    โ โ _Vou escolher alguรฉm aleatorio do grupo._
    โ *23 - /ID*
    โ โ _Adquira a ID do chat_
    โ *24 - /life*
    โ โ _Stalkear alguรฉm aleatorio do mundo._
    โ *25 - /roll*
    โ โ _Jogo do par ou impar, ou seja dados._
    โ *26 - /flip*
    โ โ _Jogo de cara e coroa._
    โ *27 - /link*
    โ โ _Pego o link do grupo._
    โ *28 - /adms*
    โ โ _Veja lista de admins._
    โ *29 - /donate*
    โ โ _Me ajuda a ficar acordada._
    โ *30 - /iris <frase>*
    โ โ _Converse comigo._
    โ *31 - /dono*
    โ โ _Pegue o contato do meu dono._
    โ *32 - /sobre*
    โ โ _Me conheรงa._
    โ *33 - /poll*
    โ โ _Verifique enquentes ativas._
    โ *34 - /vote (nรบmero)*
    โ โ _Vote numa enquete, se estiver tendo uma..._
    โ *35 - /newpoll (nome)*
    โ โ _Crie uma enquete para os outros votarem._
    โ *36 - /ins (nome)*
    โ โ _Adicione opรงรตes de voto na enquete._
    โ *37 - /curiosidade*
    โ โ _Adquira curiosidades._
    โ *38 - /valor <Quantia/Tipo de Moeda>*
    โ โ _Converta moedas de outros paรญses em real._
    โ *39 - /oculto*
    โ โ _???_
    โ *40 - /detector*
    โ โ _Detecta gostosas no grupo._
    โ *41 - /gamemode <tipo>*
    โ โ _Comando de minecraft sรณ de zoas._
    โ *42 - /rolette*
    โ โ _Jogue roleta russa._
    โ *43 - /chance <Do que>*
    โ โ _Calcule as chances._
    โ *44 - /data*
    โ โ _Data do sistema._
    โ *45 - /trecho*
    โ โ _Frases de pessoas._
    โ *46 - /akinator*
    โ โ _Jogue akinator._
    โ *47 - /ownerGroup*
    โ โ_Quer conhecer o dono do grupo mas tem_
    โ _preguica de anotar os nรบmeros? Use isso!_
    โ
    โ _Comando sem resposta, servidor offline!_
    โฐโโโโโโโโโโโโโโโโโโโ
`}

exports.stickerss = stickerss()
function stickerss() {
	return `
    โญโโโใ*[Painel de Stickers]*  
    โ
    โ       ๐ณ โฌ FIGURINHAS โญ ๐ณ
    โ
    โ *1 - /sticker ou /stiker <apenas foto>*
    โ โ _Faรงo Stickers imagens._
    โ *2 - /gif  / <gif ou vรญdeo>*
    โ โ _Faรงo Sticker animado._
    โ   _sรณ usa com legenda,_
    โ   _nรฃo marca essa porra_
    โ *3 - /nobg <apenas foto>*
    โ โ _Transforme em sticker sem fundo._
    โ *4 - /ttp <frase>*
    โ โ _Transforme frases em stickers._
    โ *5 - /giphy <link do site giphy>*
    โ โ _Faรงa stickers por link usando o giphy._
    โ *6 - /makesticker*
    โ โ _Procura imagem e crio em sticker._
    โ
    โ _Comando sem resposta, servidor offline!_
    โฐโโโโโโโโโโโโโโโโโโโ`
}

exports.outros = outros()
function outros() {
	return `
    โญโโโใ*[Painel de outros comandos]*  
    โ
    โ     โ๏ธ โฌ /COMANDOS โญ โ๏ธ
    โ
    โ *1 - /screenshot <link>*
    โ โ _Tem medo de acessar sites? Use isso e eu mostro o que hรก dentro._
    โ *2 - /clima <cidade>*
    โ โ _Veja o clima atual da cidade._
    โ *3 - /store <nome>*
    โ โ _Obter informaรงรตes de Apps da PlayStore?._
    โ *4 - /upimg <use numa foto>*
    โ โ _Irei fazer Upload de imagens com duraรงรฃo de 1 dia._
    โ *5 - /mac <Nรบmero do MAC>*
    โ โ _Com isso eu irei pesquisar de onde รฉ o MAC._
    โ *6 - /simg <use numa foto>*
    โ โ _Pesquiso imagens na internet usando esse comando._
    โ *7 - /send <link de imagem>*
    โ โ _Caso queira, posso enviar fotos de um link._
    โ *8 - /img <marque um sticker>*
    โ โ _Converto o sticker em imagem._
    โ *9 - /image <nome>*
    โ โ _Sem Internet fora do WhatsApp? Pesquiso imagens do Pinterest._
    โ *10 - /girl*
    โ โ _Fotos de garotas._
    โ *11 - /add <nรบmero>*
    โ โ _Adicione nรบmeros no grupo. Ex: /add 55859.._
    โ *12 - /getmeme*
    โ โ _Envio memes brasileiros._
    โ *13 - /frase*
    โ โ _Envio frases de anime ou inspiradoras._
    โ *14 - /groupinfo*
    โ โ _Envio informaรงรตes de um grupo._
    โ *15 - /idiomas*
    โ โ _Lista de idiomas para o tts._
    โ *16 - /wallmobile*
    โ โ _Envio wallpapers de mobile HD._
    โ *17 - /wa*
    โ โ _Envio o convite de conversa sua._
    โ *18 - /coins*
    โ โ _Veja a lista de moedas pra usar no comando Valor, รฉ uma lista gigante._
    โ *19 - /translate*
    โ โ _Traduza algo._
    โ *20 - /nickff*
    โ โ _Envio nicknames aleatรณrios para o freefire._
    โ *21 - /stickdarcula <Frase>*
    โ โ _Faรงo uma imagem darcula._
    โ *22 - /wasted*
    โ โ _Cria uma imagem no estilo Wasted GTAV_
    โ *23 - /Wallpaper (Nome)*
    โ โ _Quer obter uns wallpapers? Deixe comigo!_
    โ *24 - /wallhaven <tema>*
    โ โ _Outro comando de wallpaper._
    โ *25 - /marcar*
    โ โ _Peรงa para a bot marcar vocรช (serve pra copiar e marcar a si mesmo)._
    โ *26 - /enviar <-gp, -pv, -help> | <mensagem>*
    โ โ _Converse com outros grupos sem precisar entrar neles._
    โ *27 - /allid*
    โ โ _Pega as IDs dos grupos para usar no comando /enviar._
    โ *28 - /reedit <nome>*
    โ โ _Obtenha publicaรงรตes de algum subreedit._
    โ 
    โ _Comando sem resposta, servidor offline!_
    โฐโโโโโโโโโโโโโโโโโโโ`
}

exports.letras = letras()
function letras() {
	return `
    *TABELA DE LETRAS, CARACTERES BLABLA PARA WHATSAPP.*
    อขอขอข
    อข
    
    ัฆ ๊ณ ฮฬธ ๊ณ แฌ ๊ณ ไน ๊ณ แฎ ๊ณ โจป
    
    ๅค ๊ณ ฦ ๊ณ โฌ ๊ณๅฒ ๊ณ ๊ ๊ณ แธ
    
    โ ๊ณ โก ๊ณ โญ ๊ณ ี ๊ณ แธ ๊ณ แธ
    
    ฤ ๊ณ โ ๊ณ ฦ ๊ณ โ ๊ณ แธ ๊ณ แซ
    
    ฮฃ ๊ณ ็ ๊ณ โฐ ๊ณ ะ ๊ณ แด ๊ณ แฌ
    
    โฑ ๊ณ ฦ ๊ณ โฃ ๊ณ ิฒ ๊ณ า ๊ณ ฯ
    
    เฏน ๊ณ วค ๊ณ แบ ๊ณ แฉ ๊ณ แฎฑ ๊ณ โ
    
    ฤฆ ๊ณ โ ๊ณ ใฟ ๊ณ โ ๊ณ แป ๊ณ ิจ
    
    แพ ๊ณ ล ๊ณ โท ๊ณ แค ๊ณ ะ ๊ณ ฮฏ ๊ณ ฦ
    
    แฅ ๊ณ โ ๊ณ โ ๊ณ ส ๊ณ ษ ๊ณ วฐ ๊ณ ฤด
    
    า ๊ณ ำ ๊ณ แฆ ๊ณ า? ๊ณ วจ ๊ณ ฦ
    
    ล ๊ณ โ ๊ณ ๅปด ๊ณ โฐ ๊ณ ฤป ๊ณ ฤฟ
    
    โณ ๊ณ แท ๊ณ ษฑ ๊ณ เฎฑ ๊ณ แฐ ๊ณ แป
    
    ล ๊ณ โฆ ๊ณ โ ๊ณ แฐ ๊ณ ะ ๊ณ ี
    
    โ ๊ณ ใ ๊ณ โ ๊ณ ิพฬธ ๊ณ ฯด ๊ณ ฮฉ
    
    โ ๊ณ โ ๊ณ โฑ ๊ณ ใ ๊ณ า ๊ณ แฎ
    
    าจ ๊ณ โ ๊ณ ๏ผฑ ๊ณ ฦข ๊ณ แณ ๊ณ ีฆ
    
    โ ๊ณโ ๊ณ โ ๊ณ โน ๊ณ ษ ๊ณ ศ 
    
    โท ๊ณ ไปค ๊ณ ึ ๊ณ ล ๊ณ ล ๊ณ ล?
    
    ไบ ๊ณ โฎ ๊ณ ใ ๊ณ แ ๊ณ ลค ๊ณ ฦฌ
    
    ใณ ๊ณ ฦฒ ๊ณ ๅต ๊ณ แฎ ๊ณ โง ๊ณ ฦฏ
    
    V ๊ณ โฃ ๊ณ โ ๊ณ โ ๊ณ แ? ๊ณ แนผ
    
    โฉ ๊ณ แ ๊ณ แบ ๊ณ เธ ๊ณ โฑฒ ๊ณ โด
    
    ฯ ๊ณ ะ ๊ณ ใก ๊ณ โ ๊ณ โต ๊ณ โ
    
    ยฅ ๊ณ ฯ ๊ณ ฦด ๊ณ โฝ ๊ณ โฒฎ ๊ณ โด
    
    ฦต ๊ณ แ ๊ณ ไน ๊ณ โจ ๊ณ โฑฟ ๊ณ ลน

    
    
    ใInicios para nickใ
    
    ย?ย?เงขอกอ? ๊ณ เน?ฃ?อกเฎเฏออกอโฅ ๊ณ เฆเงฃอกอเฏอโฅอ ๊ณ เฅ แอโฅ ๊ณ เงโฅฬคึูญ?ฃ? ๊ณ โฆ??ฃ?โอกอ???ฃย?ย? ๊ณ เฆเงฃอกอแทึณแทโ ๊ณ เงโฟฬคึูญ ๊ณ โฆาอกอโณ ๊ณ เฆเงฃอกอโณ ๊ณ เน?ฃ?อกเฎเฏออก ๊ณ เฎเฏออก ๊ณ เฎเฏอแอก ย? ๊ณ เฎเฏอ ๊ณ เฑเฐฎเฐพเฑ ๊ณ เณแอกอเน?ฃ?ย? ๊ณ เณ แ ๊ณ เฏอเงกเงขอกอย?ย? ๊ณ เน?ฃ?อกอ?เฏอย? ๊ณ ย?เฆเงฃอกอ ย? ๊ณ ย?เงขอกอ?โฃ ๊ณ เณแอกอๅ ๊ณ ๐ฅแโ ๊ณ ๊ฆฟโ?โฏ ๊ณ โโ?ฃโ ๊ณ เผปโเผ ๊ณ เผโแ? ๊ณ แฝแณโ๊ฆฟ ๊ณ ๐ธโ๊ฆฟโธผ ๊ณ โโ??ฃแญชโฃ ๊ณ โโค๊ฐ 
    
    ใSรญmbolosใ
    
    เฟ ๊ณ เฟ ๊ณ โ ๊ณ โธ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ แชฅ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โฅ ๊ณ ๐ฃ ๊ณ โฎ ๊ณ โฏ ๊ณ โต ๊ณ โi ๊ณ ึ ๊ณ โ ๊ณ ? ๊ณ โฌ ๊ณ ๏ข ๊ณ โฐข ๊ณ แชฃ ๊ณ ใ? ๊ณ ๐? ๊ณ โฐก ๊ณ เผ ๊ณ เผ ๊ณ โธ ๊ณ เฟ ๊ณ แฝแณ ๊ณ เทด ๊ณ ๊ฆฟ ๊ณ โธผ ๊ณ โซ ๊ณ โฌ ๊ณ โญ ๊ณ โฉ ๊ณ โ ๊ณ โค ๊ณ โพโฝ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โก ๊ณ โง ๊ณ โฒ ๊ณ โณ ๊ณ โด ๊ณ โต ๊ณ โถ ๊ณ โท ๊ณ โธ ๊ณ โน ๊ณ โบ ๊ณ โผ ๊ณ โฝ ๊ณ โพ ๊ณ โฑ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โ ๊ณ โค ๊ณ โฅ ๊ณ โง ๊ณ โป ๊ณ โผ ๊ณ โถ ๊ณ โต ๊ณ โฒ ๊ณ โโ ๊ณ โฆ ๊ณ โง ๊ณ ใใ ๊ณ ใใ ๊ณใใ๊ณใใ๊ณใใ๊ณ ใ ๊ณใใ๊ณใใ๊ณใใ๊ณใใ๊ณ ๏ธ๏ธ ๊ณ ๏ธป๏ธผ ๊ณ๏น๏น
    
    ใ Nรบmeros ใ
    
    โถโทโธโนโบโปโผโฝโพโฟโโโโโโโโโโโโโโโโโโโโโตโถโทโธโนโบโปโผโฝโพโฟโชโ?โกโขโฃโคโฅโฆโงโจโฉ
    
    โฌLetras Chinesasโญ
    ใ - ๅข - ใชช - ๆ - ใฏ - ใชช - ๅข - ใฐช - ๅฒ - ๐? - ใฆ - โปค 

    
    TABELA DE LETRAS E SรMBOLOS*
    
    A=ฮ๊ฐ ฮ ฮป ศบ โณ ฤ รฅ เธช เธชเธฑ เธฅ ฮฑ เธ เธจ แฉ ๐ฆเธจ โณ ๏พฮ a ษ ฤ ๅพ ฮป ฮฑ ฮ ษ เธชไธนโ ะ โ เจธ ฮป ฮ ฤ รฅ เธช เธฅ เธ ฮฑ ฤ เจ แบด เธจ ฮฌ ฤฮป ะ ร รค เธฅ แบฒ ฤฆ ยช แบฉ เธช ร ีฑ ฤ เน??ฃฤ ฮฑเธชเธฑ ฮฌ แบท
    เคฎ เคธ ็ฆธ ไธไธธๅก ไธนๅฅ ๏พ ะ ๅผ เป ัฆ ๆไน เจ Aา ๅฒ เน?ฃ?A ๊ฌ๊ฌ ใฉ
    
    B=ๅค ไน เฆเงฃอกอๅฒ ะฒ เธฟ ร ฮฒ แชโ แฎ ษฎ ฮฒ ร เธฟ ะช ุทร ะฒ ฮฒ แฎ เธฟ ะฒ โข เน ะช ั ั ฦ ร เธฟ ร ไน ้ฆ ใถ โ ๅ ะฒ แช ๐ง เน?ฃ?B ๅค เฌท
    ใรัขฦะชะฌฮฒฯะฑะััใใใใญ โญ ษ Bา ใข 
    
    C=ยข โก โข C ฯ โ ๅ ใท ใฉ ใซ ไบ ษe เซฎ Cา เน?ฃ?C ี ๐จ ยข โก แ cฬฬ ษ ฯ C ยข ฯ ฮถ ฦ ฦ ส โก เซฎ ุญยข ฤ ฤ ฤ ยฉ ฤ ฤ เซฎ
    
    D=โ ฤ ษ ฤ ฮด ษ ใ ๅ โฬธ โเป ๐ฉ โ Dา ๅ ฦ
    เน?ฃ?D เฒ ฤ ษ โ โ ีชร โ ฤ ? โซร โ รฐ ฤ เน แ แซ ีช ษ 
    
    E=ษ โฌ โฎ ใซ โ โ ฮ ฮฃ ฮพ ะ เนะ ุน ษ ษ ั แฒ ใ
    ๏พ ๏พ ไธ ๅทจ ็ไน ๏ผฅๅฎ เณฏ เฑฏ ใ? ใข ๐ช Eา ไบฅ เซฏ เน?ฃ?E ใ ฦฦ ฦ ุ แฉ ไน ะ ั ฮฃ ฮต ฮพ โ ็ แฉ โค แฐ แโฎยฃ ะ ฮพ ะเน ั แฑ ลง ฮฃ ฮต ุน ั ฮญ ๏ญ ๏ฌฒ ษ ษ ูค เซฏเซฏ ั แ ฮต ร ุน ๏ป ฤ โฌ ฮพ ฮญ โฎ รซ ะญ ?ผ
    
    F=า ฦ ิฒไธ ๏พ ฯ Fใ ี F ไธ ๐ซ Fา. เน?ฃ?F ๏ฝท โฃ ส า โ f าฦ ิฒ เน??ฃF โฃฦ โฃ ๏ฌ ๏ฌบ ๏ฌณ า เช 
    
    G=โฒ วฅ แบ วค โก แฌ ิ Gา เน?ฃ?G เป เป แ เฏน
    ๐ฌ ฤ ฤข g Gฬฬ โ โฒ เฏน ฤ Gเน เน ฤก ฤฃ ฤเน ุค ู ืคฤข โข ษ? เซฌ วฅ
    
    H=ฤฆ ใ ษง ๅเฏฎ เฎ เฎ าบ าป ะฝ า า าข าฃ าคาฅ ำ ำ ิ ิ ่น แฌ โ?โฃ H ใฟ ั เน?ฃ?H เจฎ ๐ญ ใ ฤง ะฝ ั เฎ แฉ ฤง โ?โฃ ั เชธ ะ เฏฎ ะ ะฝเชธ เฎ ฤง ั ะฝ ะ ะ เคโ?โฃ
    
    I=แค ษจ แ รญ โฃ เฎดใง ใจ ๏ฝช ๏ฝด ๅทฅ่ฎ? ่พถ เน แพ ๐ฎ า Iา 
    เน?ฃ?I โถโท ฮฏ ฮ แ ล ฮนฮ ฮน โรฏ ร เน ฤช ๏ญ แป รฎ ฤฎ ฤฉฯ ฮ ุฐ ๏ป ษฉ ึ ษจ
    
    J=สฤฒ ๏ฝ ๏ผช สฒแฅ แ J โ เน?ฃ?J ๐ฏส แฅ J ษพ แ แฃู ื? เจน ฤดื? ู ลข ฺ เจน ๏ปฎ ส แ
    
    K=า า ำ โญ า า า? าก ำ า ๐ฐ ฦ K เช เน?ฃ?K โญ า ฮบ ฤท ะ ะบ เน??ฃK เช า ฤท ะบ า โญ ะ า า
    
    L=ล ิผ โ โ ๏พ ใ ฬฝลฟ ส เน โฐ ๐ฑใเนใฌ ๅปด Lา ใฅ เน ี โบ ล โฐ โ ิผ โ ฤน ล ิผ ฤฝ ฤป ฤฟ โยฃ เนล โ ฤป เนโิผ
    
    M=โณ เน เฎฑ ะผ แ? แ ษฑ โฅ ำ ใ /V ๆฐด เดฃ ำ Mา ็ช เน?ฃ?M
    ๐ฒ ะผ โณ แ? เฎฑ แ ษฑ เน ส แแะผ เฎฑ /V เน เน??ฃM ะฉเน เฎฑ ะผ โฅ แ? แ ษฑ
    
    N=โฆ ล ล เฎฐละ เธ?ะน ื ล เธซเธ ะธฮทโฉ เฎฒ โช เตฏ ล Nา ใ เน?ฃ?N เธ เธ เตฎ เดตเดถเดทเดธ ะ๐ณะธ โฆ ฮ? โช ฮท เฏ เฎต ะนะธ ฮท ล เธ เฎฐ ะ เธ? ะน ล ล ฮฎ ะฟ เธซ ล เธ? ี เธ ฮท ะธ เฎฐ ฦ เธซ โช ษณ ๏ฌพ ๏ญ โฆ
    
    O=ับ ฮธ ฮ โ โฏ ใิพา ใ โ ร ิพ ี ืก โ โด ฮ ฮฆฯะค ฮฉ ฮธเน เน ฮฟ เน ฯ รธ ัณ ับ ัฒ ำจ เฅฆ
    ใฎ ? O ๅฃ ๆฑฉ เฌ? ๐ดร เน ฯ วฟ โ ฦ? โด ฮิพ รธฮฉ โ แข แ แ โ รธ ฯ ร เซญ วพ รถ โ แปฃ ลฎ ฦ? ล ิพ ฮ ฮด วพ ะค แป ร วฟ ล ฯ ร ัณ รธ เซญ ฯ เน ฦก ฮ ะค เค? โป ฮธ ำจ ษต าจ ยค
    
    P=โ โฑ ไบ ใก ๆท ใ ๅฐธ ๅฉๅซ ฦฟ ฯ ู ีฉ ๏ฝฑ ืง ยถ ใ ใ ใข ใ ใฃ ใค ใน ๏ฝฑ Pา เน?ฃ?P ๅฐน ๐ตฯ ืง ีฉ รพ ฯร โ?โ๏ญ ีฉ ฯ รพ ึืง ร ฯ Pเน โฝ ฯ ฦฟ ึ ีฉ เฅ 
    
    Q=ฯ าจ าฉ. ๐ถ ฯ Qา q เน??ฃQวช วซ ีฃ
    
    R=โ โ ิ เคฐเฅโน ะฏ ๅฐบ ใ ๅฐป ๅฐบ ๅฐผ ๅฐฝ ิป ส ษพ ั ะฏ ๆฐ ๐ท Rา ๅฑ เซจ เน?ฃ?R เธฏ เฆฃ ๅฐบ ั โ ฮ ั ยฎ ะป ะฏ ล ล เชฐ ล ั ื ะณะณ ล ั ะฏ ล
    
    S= เธ เธฃ เบฎ เธ เคฝ โท ึ ู ฺฉ เฆ เฆ ี เชน แ ๐ธ เด
    ไน้ฉฌ ๅ ใ ใใ ไบไปค Sา ๏ผณ เน?ฃ?S เฆ เบฃ เฌ เฆ โท แ ั เธฃ โด เฎู ยง เธฃ ล ุฆ เช ฺฉ ล ลก เชน ล เชฝ ีศ เธฃ ๏ป ยง ล ึ เชน $ ศ ฦง ู ล ี เชก เชฝ เซ 
    
    T=โณ โ ใ ิ ลฆ โฎ เงณ เฅ? ลง แญ โฅ ๅๅ เฅ ไธ ใ ใ ใ ใ ใค ๏ฝฒ ไบป เฆ ใผ แ? 
    ๅนณ ไบ Tา ใ เน?ฃ?T เฆ แ แ ๅผ ๅญ ๐นั โ? ีง ิต ๏ฝฒ ลฆ เงณแฏ โฎ เค ใ ล โผ โ? ั ลฆ ลข ลค ลง ใถใล ลฆ โฐ ฦฌ ฯ โ? 
    
    U=เธ ร เธ เธ เธข เธฉ เธ ฮผ ใ ลณ เธ เธ เธโช ใช ใฉๅตใฒ แกฯส ๐บ าด เช เชฅ แก Uา ใ เชท เน?ฃ?U แฎ เธฉ ใฒ ฯ แก โชเช ยต ร รผ ั ลฏ เธข ร รป ลญ ู เธ เชทเธข ั แ ว ะ ะฆ ลช เฎช ส ฮผ เชฅ เชฏ เชฎ ึ ฯ ั
    
    V=โ ่ฎ? Vา โจ เน?ฃ?V เธ ๐ปฮฝโโ เซชโ ูง แก
    
    W= โฉ เธฌ เธ เธ เธ เธ เฏฐ แ ฯ ๐ผ Wา เช ๅฑฑ เน?ฃ?W เบ ั? ะจ โฉ ฯลด ฯ ลต เช ฯ เธฌ เธ เธ เธ ๏ทฒ เจ
    
    X =ร ๅบรไนๅๅบๅาณฬธาฒฬธาณโโ ฯ ไน Xา. ใก เน?ฃ?X ๐ฝฯ าฒ าณ โฯ ะ แฏ รื ๏ญ าฒ าณ ฯ ร
    
    [ ] Y = ฦด ยฅ ไธซๅ ษ ฮ แธ ์ ฮณ ืฆ แง แธ แท ืข ฮณ ั Y ๏ปป ใ แ ฯ ฮจ Yา. เน?ฃ?Y โผฌ ฦณ๐พั ฮจ แง ฮณฮผยฅ ๏ปป ลท ะ แง ฮณ รฟ รฝ เฅซะฃ แง ๏ปป ๏ญ าฐ ยฅ ะฃ าฑ ืฅ
    
    ฮเธฑ = ส ำ? ำก ใ ใ ไน ไน z ฦถ ศฅ ส ส ส ฦบ ส Zา ๐ฟ z ไน ฮถ ี ลป ลพ ฮถ ลผ ฦต ี ฦถ ฦบ
    
    แต แต แถ แต แต แถ? แต สฐ แถค สฒ แต หก แต แถฐ แต แต ห สณ หข แต แต แต สท หฃ สธ แถป แตหกแถ แถค แถซแตแตแต สธแตแต
    
    แดฌ แดฎ ี แดฐ แดฑ ห แดณ แดด แดต แดถ แดท แดธ แดน แดบ แดผ แดพ แต? แดฟ โต แต แต แต แต แตก แต แถป
    
    โฐ ยน ยฒ ยณ โด โต โถ โท โธ โน
    โถ โท โธ โน โบ โป โผ โฝ โพ โฟ โ โ โ โ โ โ โ โ โ โ 
    โ? โก โข โฃ โค โฅ โฆ โง โจ โฉ โช โซ โฌ โญ โฎ โฏ โ โ โ โ โ
    
    ๐ฆ ๐ง ๐จ ๐ฉ ๐ช ๐ซ ๐ฌ ๐ญ ๐ฎ ๐ฏ ๐ฐ ๐ฑ ๐ฒ ๐ณ ๐ด ๐ต ๐ถ ๐ท ๐ธ ๐น ๐บ ๐ป ๐ผ ๐ฝ ๐พ ๐ฟ
    
    ๅฐฑ ๅ ๆจก ๅ เชพ เชฟ เซ เซ เซ เซ เซ เซ เซ เซ เซ โก โข โค โฅ โฆ โฉ โช โซ โญ โฏ โพ โฝ โป โบ โธ โท โถ โถ โตโด โฒ โฐโฑ โณ โธฟ โธ โธ โถฌ โปโธใในไกค โโโ า า โณ โด โต โฅโค โจ โ โ
    โ โ โ โ โ โ โ โ โข โค โ โ โ โ โฅ
    เน?ฃ?อกเฎเฏออก
    โ? โ โ โ โ โ โโโโโโโโโโโโโโโโโโโซโชโงโฆโฅโคโคโฃโขโ?โโโ โ โ โ โ โ โ โโโโโโ เฆเงฃเฏอเฝพเฝฟเฆเงฃอกอโณ โ?โ๊งแญผโธผโโธผแญผเฆเงฃอกอเฏอโฅอ เฆเงฃ โธ โขเนเธฑ โธ เฆเงฃอกอโณเณแอกอโ เฎเฏอโญเงขอกอ?โ โโ โ โ โ? โ โ โ โข โง โฆ โฎ โญ โฌ โซ โช โฉ โฐ โบ โน โธ โท โ โง โโฆ ?โฏ ?ฃ?เงก โ๊งแญผ โ โธผแญผ๊งเฆเงฃอกอเฏอโฅอ เฆเงฃ โธ เนเธฑโขโธ
    ? ๐ค ๐ฆด ๐ฃ เผ ๐ฃ ๐ง ๐ฅ ๐ฃง ๐ฃ ๐ฅ ๐? ๐?ฆ ๏ฟฝ แฉ โฒ ๊ซ ๐? ๐? ๐? ๐? ๐? ๐? ๐? ๐? ๐? ๐? ๐?ฅ ๐?ง ๐?ฃ ๐?ข ๐?ก ๐?? ๐?จ ๐?ฉ ๐?ช ๐?ซ ๐?ฌ ๐?ญ ๐?ฎ ๐?ฏ ๐?ฒ ๐?ณ ๐?ด ๐?ต ๐?ถ ๐?ท ๐?ฐ ๐? ๐กน ๐กธ ๐ข ๐ข ๐ข ๐ข ๐ข ๐ข ๐กฟ ๐กพ ๐กฝ ๐กผ ๐กป ๐กท ๐กถ ๐กด ๐กณ ๐กฒ ๐กฑ ๐กฐ ๐ข ๐ข ๐ข๐ข? ๐ข ๐ข ๐ข ๐ขซ ๐ฃ ๐ฃ ๐ฃ ๐ฃ ๐ฃ ๐ฃฅ ๐ฃฆ ๐ฃง ๐ฃฒ ๐ฃฑ ๐คผ ๐งฎ ๐ฆบ ๐ฆฒ ๐ฅถ เฎเฏอ ?เฝนเฝทเฝธย?ย? เฏอเฎเฏอาออกโฆ
    
    Aา Bา Cา Dา Eา Fา Gา Hา Iา Jา Kา Lา Mา Nา Oา Pา Qา Rา Sา Tา Uา Vา Wา Xา Yา Zา
    
    Aา Bา Cา Dา Eา Cา Dา Eา Fา GาHา Iา Jา Kา Lา Mา Nา Oา Pา Qา Rา Sา Tา Uา Vา Wา Xา Yา Zา
    
    โฌ โฐ โฏ โฑ โ โ โ โ โ โ โณ โด โ โ 
    โญ โฎ โ โ โ โจ
    
    ไธน ไน ๅ ๅ ใข ไธ ใ? ๅ ๅทฅ ๏ผช ๏ผซ ใฅ ็ช ใ ๅฃ ใ ๏ผฑ ๅฐบ ใก ๅ โช โจ ๅฑฑ ใก ใ ไนv เน?ฃ?ร เน?ฃ?ร เน?ฃ?ร
    
    เน?ฃ?โฌ เน?ฃ?@ Ju
    เน?ฃ?A เน?ฃ?B เน?ฃ?C เน?ฃ?D เน?ฃ?E เน?ฃ?F เน?ฃ?G เน?ฃ?H เน?ฃ?I เน?ฃ?J เน?ฃ?K เน?ฃ?L เน?ฃ?M เน?ฃ?N เน?ฃ?O เน?ฃ?P เน?ฃ?Q เน?ฃ?R เน?ฃ?S เน?ฃ?T เน?ฃ?U เน?ฃ?W เน?ฃ?V เน?ฃ?X เน?ฃ?Y เน?ฃ?Z
    
    A = ะ โ เจธ ฮป ฮ ฤ รฅ เธช เธฅ เธ ฮฑ ฤ เจ แบด เธจ ฮฌ ฤ
    B = ร ะฒ ฮฒ แฎ เธฟ ะฒ โข เน ะช ั ั
    C = ยข ฯ ยฉ ฮถ ฦ ฦ ส โก เซฎ ุญ
    D = ร โ รฐ ฤ เน แ แซ ีช ษ
    E = ยฃ ะ ฮพ ะเน ั แฑ ลง ฮฃ ฮต ุน ั ฮญ ๏ญ ๏ฌฒ ษ ษ ูค เซฏ
    F = ฦ โฃ ๏ฌ ๏ฌบ ๏ฌณ า เช ี
    G = ฤข โข ษ? เซฌ วฅ าจ าฉ
    H = เชธ เฎ ฤง ั ะฝ ะ ะ เคโ?โฃ
    I = ฯ ฮ ุฐ ๏ปย? ษฉ ึ ษจ
    J = ื? ู ลข ฺ เจน ๏ปฎ ส แ a
    K = า ฤท ะบ า โญ ะ า า
    L = ล โ ฤป เนโิผ
    M = เน เฎฑ ะผ โฅ แ? แ ษฑ
    N = ล เธ? ี เธ ฮท ะธ เฎฐ ฦ เธซ โช ษณ ๏ฌพ ๏ญ โฆ
    O = ร ัณ รธ เซญ ฯ เน ฦก ฮ ะค เค? โป๏ฟผ
    P = ืง ร ฯ Pเน โฝ ฯ ฦฟ ึ ีฉ เฅ
    Q = วช วซ ีฃ
    R = ะณ ล ั ยฎ ะฏ ล ษพ
    S = ศ เธฃ ๏ป ยง ล ึ เชน $ ศ ฦง ู ล ี เชก เชฝ เซ
    T = ล ลฆ โฐ ฦฌ ฯ โ?
    U = เธข ั เช ว ะ ะฆ ลช เฎช ส ฮผ เชฅ เชฏ เชฎ ึ ฯ ั
    V = โ ูง แก
    X = ื ๏ญ าฒ าณ ฯ ร
    Z = ฦต ี ฦถ ฦบ .
    Y = ะฃ แง ๏ปป ๏ญ าฐ ยฅ ะฃ าฑ ืฅ
    
    โฌโนโฑ โฐโนเฎ๏ปฌ๏ปฌเฎเนโบ ๏ธพ๐ฃโฐ โฑ๐ฃ
    
    ๊ฃฐ ๊ฃฑ๊ฃข๊ฃฉ ๊ฃจ๊ฃฏ ๊ฅ ๊ฆ๊ฆ ๊ฆ ๊ฆ๊ฆถ๊ฆต ๊ฆด๊ฆณ๊ฆฟ ๊ง ๐จฐ ๐งง ๐ง ๐ฅ ๐ฅธ ๐ฅ ๐ฅ ๐ค ๐ค ๐ค ๐ค ๐ฃด ๐ฃณ ๐ฃ ๐ฃ ๐ฃ ๐กผ ๐ก เฟ เฟ แช แชแฌฝโโโโ โ โ โง โ โฆ โฅ โธ โธ ๊๊ฐ๊ณ๊ฃฆ๊ฃญ๊ฃช
    
    เผ ๊ง๊ง
    
    
    เทด เท เน เน เบ เผเผป เผย?ย? เฝนย?ย?ย?ย?ย? เฝทเฝตเฝด.ย? เฟ เฟ แฉ แฉ แช แชฅ แฌป โธ โก โ โต 
    
    เฌเฑ เฑเณ เณ เณ
    
    ย? า. ย?? ? ?ต ฿ท เคฟ เฅ เคป เงเงฃ 
    
    ๊ผ ๊ถ ๊ต ๊ฅ ๊ ๊ฅ เฅเงเงฃ
    ใ โก โฉ โค โฆ โฑ โฒ โฐ โณ โท โธ โน โ โ โ โ โ โ โใ ใ โผณ ใฒ แป เฆ ึ โ โ โ โ โ โ โฃ โค โฌ โฐ โญ โฑ โณ โ โย? วค ใฉ โ าจ ใ โท โฆ ใฟ โ ุ ไบ ล 
    โ๏ฝท ศบ ๅค ๅ ฮฬธ ๅผย? แฉ เตฌฬธ ๅฒ โฎ แพโ โด 
    
    เน?ฃ?โฌ เน?ฃ?@ 
    เน?ฃ?A เน?ฃ?B เน?ฃ?C เน?ฃ?D เน?ฃ?E เน?ฃ?F เน?ฃ?G เน?ฃ?H เน?ฃ?I เน?ฃ?J เน?ฃ?K เน?ฃ?L เน?ฃ?M เน?ฃ?N เน?ฃ?O เน?ฃ?P เน?ฃ?Q เน?ฃ?R เน?ฃ?S เน?ฃ?T เน?ฃ?U เน?ฃ?W เน?ฃ?V เน?ฃ?X เน?ฃ?Y เน?ฃ?Z
    
    Aา Bา Cา Dา Eา Fา Gา Hา Iา Jา Kา Lา Mา Nา Oา Pา Qา Rา Sาย?ย? าย? Uา Vา Wา Xา Yา Zา
    
    Aา Bา Cา Dา Eา Cา Dา Eา Fา GาHา Iา Jา Kา Lา Mา Nา Oา Pา Qา Rา Sา Tา Uา Vา Wา Xา Yา Zา
    
    ไธน ไน ๅ ๅ ใข ไธ ใ? ๅ ๅทฅ ๏ผช ๏ผซ ใฅ ็ช ใ ๅฃ ใ ๏ผฑ ๅฐบ ใก ๅ โช โจ ๅฑฑ ใก ใ ไนv เน?ฃ?ร เน?ฃ?ร เน?ฃ?ร
    
    1. เน?ฃ?อกอ?เฎเฏอ ?ฃ?ย?ย?ย? แอกเงโฬคึูญย? เงโฅฬคึูญย? เงฬคโึูญย? เฎเฏอ?ฃฬคึูญฬคึ เฆย? แอกเงโฬคึูญย?ย? แอกเงโฬคึูญย? โธโ
    
    โกย? เงโฅฬคึูญ?ฃ? เฎเฏอแอกย?ย? โฆ??ฃ?โอกอ???ฃย?ย? เฆเงฃอกอแทึณแทโ เฑเฐฎเฐพเฑย? เฅ แอโฅ เณแอกอเน?ฃ?ย?ย? เงโฟฬคึูญ เณแ
    
    โฆาอกอโณ เฏอเงกเงขอกอย?ย? เน?ฃ?อกอ?เฏอย?ย? เณแอกอย?ย?ย? เฆเงฃอกอย?ย? เงขอกอ?โ เฆเงฃอกอเฏอโฅอเฆเงฃ
    เธฅัฆเธแฏเธช๏พ๊ๅผเจธ๐ท 
    
    ๐งไนะฒฮฒฦเดฆะรเธฟแชะฌาแชษฎษแฐแโฌแไพ
    
    ๐จๅยขแธโกแโตแ?ฦ๊แฃแโใจอผโญ
    
    ๐ฉๅโรโฦีชโิิ๊ธแฑแดแแชแฌ
    
    ๐ชใขัฮฃุนัใ?แโฎโโฮพฯต๏พเฑฌ๊แแโฐใซ เซฏใ
    
    ๐ซไธfโฃาีเฑฏิฒใีข๊โฑ ิฒ
    
    ๐ฌใ?gโกแบโฒส๏ฝ๊โแถแฉิเฉฒวค
    
    ๐ญๅะฝเฎเคฤฆแ?ใใใฟใแฉโโใถเจฎโโ
    
    ๐ฎๅทฅฮนฮแคแพเนลโฑกแแฃเนแใงใจ๏ผฉเน ษช๊คแโษจ ยก
    
    ๐ฏCDโญาฦำ๊แฆาก 
    
    ๐ฑใฅโ ล๏พโฑ?โฑขโ?โบใเฅฎเนโฐิผๅปด๊โใใ๊ญ
    
    ๐ฒ็ชะผเนเฎฑโณแเฏฑเตฌแเบแฎแขแฐฯปไป
    
    ๐ณใะธเธ?เธเฎฐฦเธซโชโฆแถเฎฒโฉเบเธซโแเฅอทฮท
    
    ๐ดๅฃฯัปรแรธเนฮะคำจใฎับโโฆาฉแงาจแซแคิพ โ
    
    ๐ตใฯใ ฦคPแตแีฉใขโฑใโิน๏ฝฑใฑแแฎ ไผ
    
    ๐ถ๏ผฑqโ 
    
    ๐ทๅฐบัเคฐโเคฐเฅโน ิฦฆส๊ชิปแโโแโๅฐป
    
    ๐ธไธs๐ฒลฺชลฺฉโทแเฆีแฆเธเบฎ๊เคฝเธ
    
    ๐นๅัฯลฆฦฌโ?โฎเงณแตโธใ๏ฝฒ ใคเคิต๊เฝแฎโณโโจแข
    
    ๐บโชฯเธขใฒเธแฎเฆสฦฒโชเธเธเธีถเบเบ๊แแ?เคฅเป
    
    ๐ปโจฮฝฦ?ทษฃแฏแแค
    
    ๐ผๅฑฑฯwเธฌโฉแณเฏฐเบเธั?ะจเธเธเธเบเบแกเจ
    
    ๐ฝใกโโโะร๊ผ่พ 
    
    ๐พใัฮฅ๏ญ๏ญาฐยฅะฃาฑืฅแแงืข๊ฉโแฉฯ
    
    ๐ฟไนzฦตฦถสแบ๊ดแโค
    
    
    A=ฮ๊ฐ ฮ ฮป ศบ โณ ฤ รฅ เธช เธชเธฑ เธฅ ฮฑ เธ เธจ แฉ ๐ฆ ๐ฆเธจ โณ ๏พฮ a ษ ฤ ๅพ ฮป ฮฑ ฮ ษ เธชไธนโ ะ โ เจธ ฮป ฮ ฤ รฅ เธช เธฅ เธ ฮฑ ฤ เจ แบด เธจ ฮฌ ฤฮป ะ ร รค เธฅ แบฒ ฤฆ ยช แบฉ เธช ร ีฑ ฤ เน??ฃฤ ฮฑเธชเธฑ ฮฌ แบท
    เคฎ เคธ ็ฆธ ไธไธธๅก ไธนๅฅ ๏พ ใ? ะ ๅผ เป ัฆ ๆไน เจ Aา ๅฒ เน?ฃ?A ๊ฌ๊ฌ ๅ ใฉ
    
    
    B=ๅค ไน เฆเงฃอกอๅฒ ะฒ เธฟ ร ฮฒ แชโ แฎ ษฎ ฮฒ ร เธฟ ะช ุทร ะฒ ฮฒ แฎ เธฟ ะฒ โข เน ะช ั ั ฦ ร เธฟ ร ไน ้ฆ ใถ โ ๅ ะฒ แช ๐ง เน?ฃ?B ๅค เฌท
    ใรัขฦะชะฌฮฒฯะฑะััใใใใญ โญ ษ Bา ใข 
    
    C=ยข โก โข C ฯ โ ๅ ใท ใฉ ใซ ไบไป ๐จ ษ เซฎ Cา เน?ฃ?C ี ๐จ ยข โก แ cฬฬ ษ ฯ ยฉCยข ฯ ยฉ ฮถ ฦ ฦ ส โก เซฎ ุญยข ฤ ฤ ฤ ยฉ ฤ ฤ เซฎ
    
    D=โ ฤ ษ ฤ ฮด ษ ใ ๅ โฬธ โเป ๐ฉ โ Dา ๅ ฦ
    เน?ฃ?D เฒ ๐ฉฤ ฤ ษ โ โ ีชร โ ฤ ?ร โซร โ รฐ ฤ เน แ แซ ีช ษ 
    
    
    
    E=ษ โฌ โฎ ใซ โ โ ฮ ฮฃ ฮพ ะ เนะ ุน ษ ษ ั แฒ ใ
    ๏พ ๏พ ไธ ๅทจ ็ไน ๏ผฅๅฎ เณฏ เฑฏ ใ? ใข ๐ช Eา ไบฅ เซฏ เน?ฃ?E ใ ฦฦ ฦ ุแฉ ๐ช ไน ะ ั ฮฃ ฮต ฮพ โ ็ แฉ โค แฐ แโฎยฃ ะ ฮพ ะเน ั แฑ ลง ฮฃ ฮต ุน ั ฮญ ๏ญ ๏ฌฒ ษ ษ ูค เซฏเซฏ ั แ ฮต ร ุน ๏ป ฤ โฌ ฮพ ฮญ โฎ รซ ะญ ?ผ
    
    F=า ฦ ิฒไธ ๏พ ฯ Fใ ี F ไธ ๐ซ Fา. เน?ฃ?Fย? ๐ซ ๏ฝท โฃ ส า โ f าฦ ิฒ เน??ฃF โฃฦ โฃ ๏ฌ ๏ฌบ ๏ฌณ า เช 
    
    
    G=โฒ วฅ แบ วค โก แฌ ๐ฌ ิ Gา เน?ฃ?G เป เป แ เฏน
    ๐ฌ ฤ ฤข g Gฬฬ โ โฒ เฏน ฤ Gเน เน ฤ? ฤก ฤฃ ฤเน ุค ู ืคฤข โข ษ? เซฌ วฅ
    
    H=ฤฆ ใ ษง ๅเฏฎ เฎ เฎ าบ าป ะฝ า า าข าฃ าคาฅ ำ ำ ิ ิ ่น แฌ ๐ญ โ?โฃ H ใฟ ั เน?ฃ?H เจฎ ๐ญ ใ ฤง ะฝ ั เฎ แฉ ฤง โ?โฃ ั เชธ ะ เฏฎ ะ ะฝเชธ เฎ ฤง ั ะฝ ะ ะ เคโ?โฃ
    
    I=แค ษจ แ รญ โฃ เฎดใง ใจ ๏ฝช ๏ฝด ๅทฅ่ฎ? ่พถ เน แพ ๐ฎ า Iา 
    เน?ฃ?I โถโท ๐ฎ ฮฏ ฮ แ ล ฮนฮ ฮน โรฏ ร เน ฤช ๏ญ แป รฎ ฤฎ ฤฉฯ ฮ ุฐ ๏ป ษฉ ึ ษจ
    
    J=สฤฒ ๏ฝ ๏ผช สฒแฅ แ ๐ฏ J โ เน?ฃ?J ๐ฏส แฅ J ฤด ษพ แ แฃู ื? เจน ฤดื? ู ลข ฺ เจน ๏ปฎ ส แ
    
    K=า า ำ โญ า ้ฟ า า? าก ำ าย? ๐ฐ ฦ K เช เน?ฃ?K๐ฐ โญ า ฮบ ฤท ะ ะบ เน??ฃK เช า ฤท ะบ า โญ ะ า า
    
    L=ล ิผ โ โ ๏พ ใ ฬฝลฟ ส เน โฐ ๐ฑใเนใฌ ๅปด Lา ใฅ เน?ฃ?L เน ี โบ ๐ฑ ล โฐ โ ิผ ใ โ ฤน ล ิผ ฤฝ ฤป ฤฟ โยฃ เนล โ ฤป เนโิผ
    
    M=โณ โณเน เฎฑ ะผ แ? แ ษฑ โฅ ำ ใ ใ /V ๆฐด เดฃ ำ ๐ฒ Mา ็ช เน?ฃ?M
    ๐ฒ ะผ โณ แ? เฎฑ แ ษฑ เน ส แแะผ เฎฑ /V เน เน??ฃM ะฉเน เฎฑ ะผ โฅ แ? แ ษฑ
    
    N=โฆ ล ล เฎฐละ เธ?ะน ื ล เธซเธ ะธฮทโฉ เฎฒ โช เตฏ ล Nา ใ เน?ฃ?N เธ เธ เตฎ เดตเดถเดทเดธ ะ๐ณะธ โฆ ฮ? โช ฮท เฏ เฎต ะนะธ ฮท ล เธ เฎฐ ะ เธ? ะน ล ล ฮฎ ะฟ เธซ ล เธ? ี เธ ฮท ะธ เฎฐ ฦ เธซ โช ษณ ๏ฌพ ๏ญ โฆ
    
    O=ับ ฮธ ฮ โ โฏ ใิพา ใ โ ร ิพ ี ืก โ โด ฮ ฮฆฯะค ฮฉ ฮธเน เน ฮฟ เน ฯ รธ ัณ ับ ัฒ ำจ เฅฆ
    ใฎ ๐ด ? O ๅฃ เน?ฃ?O ๆฑฉ เฌ? ๐ดรเนฯวฟโฦ?ะคืฅืืฅโดฮิพรธฮฉโแขแแฮธโ รธ ฯ ร เซญ วพ รถ โ แปฃ ลฎ ฦ? ล ิพ ฮ ฮด วพ ะค แป ร วฟ ล ฯ ร ัณ รธ เซญ ฯ เน ฦก ฮ ะค เค? โป๏ฟผ
    
    P=โ โฑ ไบ ใกๆท ใๅฐธ ๅฉๅซ ฦฟ ฯ ู ีฉ ๏ฝฑ ืง ยถ ใ ใ ใข ใ ใฃ ใค ใน ย? ๐ต ไผ า Pา ใ เน?ฃ?P ๅฐน ๐ตฯ ืง ีฉ รพ ฯร โ?โ๏ญ ีฉ ฯ รพ ึืง ร ฯ Pเน โฝ ฯ ฦฟ ึ ีฉ เฅ 
    
    Q=ฯ าจ าฉ. ๐ถ ฯ Qา เน?ฃ?Q๐ถq เน??ฃQวช วซ ีฃ
    
    R=โ ิ เคฐเฅโนะฏ ่จณ ๅฐบ ใๅฐปๅฐบ ๅฐผ ๅฐฝ ิป ส ษพ ั ะฏ ๆฐ ๐ท Rา ๅฑ เซจ เน?ฃ?R เธฏ เฆฃ ๅฐบ ๅฐป ั โ ฮ ั ยฎ ะป ะฏ ล ล เชฐ ล ั ื ะณะณ ล ั ยฎ ะฏ ล
    
    S= เธ เธฃ เบฎ เธ เคฝ โท ึ ู ฺฉ เฆ เฆ ี เชน แ ๐ธ เด
    ไน้ฉฌ ๅ ใ ใใ ไบไปค Sา ๏ผณ เน?ฃ?S เฆ เบฃ เฌ ๐ธเฆ โท แ ั เธฃ โด เฎู ยง เธฃ ล ุฆ เช ฺฉ ล ลก เชน ล เชฝ ีศ เธฃ ๏ป ยง ล ึ เชน $ ศ ฦง ู ล ี เชก เชฝ เซ 
    
    T=โณ ใ ิ ลฆ โฎ เงณ เฅ? ลง แญ โฅ ๅๅ เฅ ไธ ใ ใ ใ ใ ใค ๏ฝฒ ไบป เฆ ใผ แ? ๐น
    ๅนณ ไบ Tา ใ เน?ฃ?T เฆ แ แ ๅผ ๅญ ๐นั โ? ีง ิต ๏ฝฒ ลฆ เงณแฏ โฎ เค ใ ล โผ โ? ั ลฆ ลข ลค ลง ใถใล ลฆ โฐ ฦฌ ฯ โ? 
    
    U=เธ ร เธ เธ เธข เธฉ เธ ฮผ ใ ลณ เธ เธ เธโช ใช ใฉๅตใณใฒ แกฯส ๐บ าด เช เชฅ แก Uา ใ เชท เน?ฃ?U แฎ เธฉ ๐บ ใฒ ฯ แก โชเช ยต ร รผ ั ลฏ เธข ร รป ลญ ู เธ เชทเธข ั เช ว ะ ะฆ ลช เฎช ส ฮผ เชฅ เชฏ เชฎ ึ ฯ ั
    
    V=โ ่ฎ? ๐ป Vา โจ เน?ฃ?V เธ ๐ปฮฝโโ เซชโ ูง แก
    
    W= โฉ เธฌ เธ เธ เธ เธ เฏฐ แ ฯ ๐ผ Wา เช ๅฑฑ เน?ฃ?W เบ ๐ผ ั? ะจ โฉ ฯลด ฯ ลต เช ฯ เธฌ เธ เธ เธ ๏ทฒ เจ
    
    X =ร ๅบรไนๅๅบๅาณฬธาฒฬธาณโโ ฯ ๐ฝ ไน Xา. ใก เน?ฃ?X ๐ฝฯ าฒ าณ โฯ ะ แฏ รื ๏ญ าฒ าณ ฯ ร
    
    โคโฃโขโกโกโ?โโโโโโโโโโโโโโโโโโโ เณแอกอเฟ เฆเงฃอกอโณ โโฆ?โฏ?ฃ?เงกเงก??ฃโฏ?โฆโ๊งแญผโธผโโธผแญผ๊ง เฆเงฃอกอเฏอโฅอเฆเงฃ๐ผ โธโดโขเนเธฑโขโดโธ เฆเงฃอกอโณเณแอกอ hj houve GG tu TRT5 T6 t tv GG te G
    
    ๊งใ.เดฃ.ล๊ง
    
    เฟโญเงขอกอ?โโโโโโ?โNโโโขโฆโง โฆโฎโญโฌโซโชโฉโฏโฐโบโนโธโทโถโตโโงโฆ โโฆ?โฏ?ฃ?เงกเงก??ฃโฏ?โฆโ๊งแญผโธผโโธผแญผ๊งเฆเงฃอกอเฏอโฅอเฆเงฃ๐ผ โธโดโขเนเธฑโขโดโธ๐ดโชโซ
    เน?ฃ?อกอ?เฎเฏอ ?ฃ?ย?ย?ย? แอกเงโฬคึูญย? เงโฅฬคึูญย? เงฬคโึูญย? เฎเฏอ?ฃฬคึูญฬคึ เฆย? แอกเงโฬคึูญย?ย? แอกเงโฬคึูญย? โธโ
    
    โกย? เงโฅฬคึูญ?ฃ? เฎเฏอแอกย?ย? โฆ??ฃ?โอกอ???ฃย?ย? เฆเงฃอกอแทึณแทโ เฑเฐฎเฐพเฑย? เฅ แอโฅ เงโฟฬคึูญ เณแ
    
    โฆาอกอโณ เฏอเงกเงขอกอย?ย? เน?ฃ?อกอ?เฏอย?ย? เณแอกอย?ย?ย? เฆเงฃอกอย?TABELA DE LETRAS E SรMBOLOS*
    
    A=ฮ๊ฐ ฮ ฮป ศบ โณ ฤ รฅ เธช เธชเธฑ เธฅ ฮฑ เธ เธจ แฉ ๐ฆเธจ โณ ๏พฮ a ษ ฤ ๅพ ฮป ฮฑ ฮ ษ เธชไธนโ ะ โ เจธ ฮป ฮ ฤ รฅ เธช เธฅ เธ ฮฑ ฤ เจ แบด เธจ ฮฌ ฤฮป ะ ร รค เธฅ แบฒ ฤฆ ยช แบฉ เธช ร ีฑ ฤ เน??ฃฤ ฮฑเธชเธฑ ฮฌ แบท
    เคฎ เคธ ็ฆธ ไธไธธๅก ไธนๅฅ ๏พ ะ ๅผ เป ัฆ ๆไน เจ Aา ๅฒ เน?ฃ?A ๊ฌ๊ฌ ใฉ
    
    B=ๅค ไน เฆเงฃอกอๅฒ ะฒ เธฟ ร ฮฒ แชโ แฎ ษฎ ฮฒ ร เธฟ ะช ุทร ะฒ ฮฒ แฎ เธฟ ะฒ โข เน ะช ั ั ฦ ร เธฟ ร ไน ้ฆ ใถ โ ๅ ะฒ แช ๐ง เน?ฃ?B ๅค เฌท
    ใรัขฦะชะฌฮฒฯะฑะััใใใใญ โญ ษ Bา ใข 
    
    C=ยข โก โข C ฯ โ ๅ ใท ใฉ ใซ ไบ ษ เซฎ Cา เน?ฃ?C ี ๐จ ยข โก แ cฬฬ ษ ฯ C ยข ฯ ฮถ ฦ ฦ ส โก เซฎ ุญยข ฤ ฤ ฤ ยฉ ฤ ฤ เซฎ
    
    D=โ ฤ ษ ฤ ฮด ษ ใ ๅ โฬธ โเป ๐ฉ โ Dา ๅ ฦ
    เน?ฃ?D เฒ ฤ ษ โ โ ีชร โ ฤ ? โซร โ รฐ ฤ เน แ แซ ีช ษ 
    
    E=ษ โฌ โฎ ใซ โ โ ฮ ฮฃ ฮพ ะ เนะ ุน ษ ษ ั แฒ ใ
    ๏พ ๏พ ไธ ๅทจ ็ไน ๏ผฅๅฎ เณฏ เฑฏ ใ? ใข ๐ช Eา ไบฅ เซฏ เน?ฃ?E ใ ฦฦ ฦ ุ แฉ ไน ะ ั ฮฃ ฮต ฮพ โ ็ แฉ โค แฐ แโฎยฃ ะ ฮพ ะเน ั แฑ ลง ฮฃ ฮต ุน ั ฮญ ๏ญ ๏ฌฒ ษ ษ ูค เซฏเซฏ ั แ ฮต ร ุน ๏ป ฤ โฌ ฮพ ฮญ โฎ รซ ะญ ?ผ
    
    F=า ฦ ิฒไธ ๏พ ฯ Fใ ี F ไธ ๐ซ Fา. เน?ฃ?F ๏ฝท โฃ ส า โ f าฦ ิฒ เน??ฃF โฃฦ โฃ ๏ฌ ๏ฌบ ๏ฌณ า เช 
    
    G=โฒ วฅ แบ วค โก แฌ ิ Gา เน?ฃ?G เป เป แ เฏน
    ๐ฌ ฤ ฤข g Gฬฬ โ โฒ เฏน ฤ Gเน เน ฤก ฤฃ ฤเน ุค ู ืคฤข โข ษ? เซฌ วฅ
    
    H=ฤฆ ใ ษง ๅเฏฎ เฎ เฎ าบ าป ะฝ า า าข าฃ าคาฅ ำ ำ ิ ิ ่น แฌ โ?โฃ H ใฟ ั เน?ฃ?H เจฎ ๐ญ ใ ฤง ะฝ ั เฎ แฉ ฤง โ?โฃ ั เชธ ะ เฏฎ ะ ะฝเชธ เฎ ฤง ั ะฝ ะ ะ เคโ?โฃ
    
    I=แค ษจ แ รญ โฃ เฎดใง ใจ ๏ฝช ๏ฝด ๅทฅ่ฎ? ่พถ เน แพ ๐ฎ า Iา 
    เน?ฃ?I โถโท ฮฏ ฮ แ ล ฮนฮ ฮน โรฏ ร เน ฤช ๏ญ แป รฎ ฤฎ ฤฉฯ ฮ ุฐ ๏ป ษฉ ึ ษจ
    
    J=สฤฒ ๏ฝ ๏ผช สฒแฅ แ J โ เน?ฃ?J ๐ฏส แฅ J ษพ แ แฃู ื? เจน ฤดื? ู ลข ฺ เจน ๏ปฎ ส แ
    
    K=า า ำ โญ า า า? าก ำ า ๐ฐ ฦ K เช เน?ฃ?K โญ า ฮบ ฤท ะ ะบ เน??ฃK เช า ฤท ะบ า โญ ะ า า
    
    L=ล ิผ โ โ ๏พ ใ ฬฝลฟ ส เน โฐ ๐ฑใเนใฌ ๅปด Lา ใฅ เน ี โบ ล โฐ โ ิผ โ ฤน ล ิผ ฤฝ ฤป ฤฟ โยฃ เนล โ ฤป เนโิผ
    
    M=โณ เน เฎฑ ะผ แ? แ ษฑ โฅ ำ ใ /V ๆฐด เดฃ ำ Mา ็ช เน?ฃ?M
    ๐ฒ ะผ โณ แ? เฎฑ แ ษฑ เน ส แแะผ เฎฑ /V เน เน??ฃM ะฉเน เฎฑ ะผ โฅ แ? แ ษฑ
    
    N=โฆ ล ล เฎฐละ เธ?ะน ื ล เธซเธ ะธฮทโฉ เฎฒ โช เตฏ ล Nา ใ เน?ฃ?N เธ เธ เตฎ เดตเดถเดทเดธ ะ๐ณะธ โฆ ฮ? โช ฮท เฏ เฎต ะนะธ ฮท ล เธ เฎฐ ะ เธ? ะน ล ล ฮฎ ะฟ เธซ ล เธ? ี เธ ฮท ะธ เฎฐ ฦ เธซ โช ษณ ๏ฌพ ๏ญ โฆ
    
    O=ับ ฮธ ฮ โ โฏ ใิพา ใ โ ร ิพ ี ืก โ โด ฮ ฮฆฯะค ฮฉ ฮธเน เน ฮฟ เน ฯ รธ ัณ ับ ัฒ ำจ เฅฆ
    ใฎ ? O ๅฃ ๆฑฉ เฌ? ๐ดร เน ฯ วฟ โ ฦ? โด ฮิพ รธฮฉ โ แข แ แ โ รธ ฯ ร เซญ วพ รถ โ แปฃ ลฎ ฦ? ล ิพ ฮ ฮด วพ ะค แป ร วฟ ล ฯ ร ัณ รธ เซญ ฯ เน ฦก ฮ ะค เค? โป ฮธ ำจ ษต าจ ยค
    
    P=โ โฑ ไบ ใก ๆท ใ ๅฐธ ๅฉๅซ ฦฟ ฯ ู ีฉ ๏ฝฑ ืง ยถ ใ ใ ใข ใ ใฃ ใค ใน ๏ฝฑ Pา เน?ฃ?P ๅฐน ๐ตฯ ืง ีฉ รพ ฯร โ?โ๏ญ ีฉ ฯ รพ ึืง ร ฯ Pเน โฝ ฯ ฦฟ ึ ีฉ เฅ 
    
    Q=ฯ าจ าฉ. ๐ถ ฯ Qา q เน??ฃQวช วซ ีฃ
    
    R=โ โ ิ เคฐเฅโน ะฏ ๅฐบ ใ ๅฐป ๅฐบ ๅฐผ ๅฐฝ ิป ส ษพ ั ะฏ ๆฐ ๐ท Rา ๅฑ เซจ เน?ฃ?R เธฏ เฆฃ ๅฐบ ั โ ฮ ั ยฎ ะป ะฏ ล ล เชฐ ล ั ื ะณะณ ล ั ะฏ ล
    
    S= เธ เธฃ เบฎ เธ เคฝ โท ึ ู ฺฉ เฆ เฆ ี เชน แ ๐ธ เด
    ไน้ฉฌ ๅ ใ ใใ ไบไปค Sา ๏ผณ เน?ฃ?S เฆ เบฃ เฌ เฆ โท แ ั เธฃ โด เฎู ยง เธฃ ล ุฆ เช ฺฉ ล ลก เชน ล เชฝ ีศ เธฃ ๏ป ยง ล ึ เชน $ ศ ฦง ู ล ี เชก เชฝ เซ 
    
    T=โณ โ ใ ิ ลฆ โฎ เงณ เฅ? ลง แญ โฅ ๅๅ เฅ ไธ ใ ใ ใ ใ ใค ๏ฝฒ ไบป เฆ ใผ แ? 
    ๅนณ ไบ Tา ใ เน?ฃ?T เฆ แ แ ๅผ ๅญ ๐นั โ? ีง ิต ๏ฝฒ ลฆ เงณแฏ โฎ เค ใ ล โผ โ? ั ลฆ ลข ลค ลง ใถใล ลฆ โฐ ฦฌ ฯ โ? 
    
    U=เธ ร เธ เธ เธข เธฉ เธ ฮผ ใ ลณ เธ เธ เธโช ใช ใฉๅตใฒ แกฯส ๐บ าด เช เชฅ แก Uา ใ เชท เน?ฃ?U แฎ เธฉ ใฒ ฯ แก โชเช ยต ร รผ ั ลฏ เธข ร รป ลญ ู เธ เชทเธข ั แ ว ะ ะฆ ลช เฎช ส ฮผ เชฅ เชฏ เชฎ ึ ฯ ั
    
    V=โ ่ฎ? Vา โจ เน?ฃ?V เธ ๐ปฮฝโโ เซชโ ูง แก
    
    W= โฉ เธฌ เธ เธ เธ เธ เฏฐ แ ฯ ๐ผ Wา เช ๅฑฑ เน?ฃ?W เบ ั? ะจ โฉ ฯลด ฯ ลต เช ฯ เธฌ เธ เธ เธ ๏ทฒ เจ
    
    X =ร ๅบรไนๅๅบๅาณฬธาฒฬธาณโโ ฯ ไน Xา. ใก เน?ฃ?X ๐ฝฯ าฒ าณ โฯ ะ แฏ รื ๏ญ าฒ าณ ฯ ร
    
    Y = ฦด ยฅ ไธซๅ ษ ฮ แธ ์ ฮณ ืฆ แง แธ แท ืข ฮณ ั Y ๏ปป ใ แ ฯ ฮจ Yา. เน?ฃ?Y โผฌ ฦณ๐พั ฮจ แง ฮณฮผยฅ ๏ปป ลท ะ แง ฮณ รฟ รฝ เฅซะฃ แง ๏ปป ๏ญ าฐ ยฅ ะฃ าฑ ืฅ
    
    ฮเธฑ = ส ำ? ำก ใ ใ ไน ไน z ฦถ ศฅ ส ส ส ฦบ ส Zา ๐ฟ z ไน ฮถ ี ลป ลพ ฮถ ลผ ฦต ี ฦถ ฦบ
    
    แต แต แถ แต แต แถ? แต สฐ แถค สฒ แต หก แต แถฐ แต แต ห สณ หข แต แต แต สท หฃ สธ แถป แตหกแถ แถค แถซแตแตแต สธแตแต
    
    แดฌ แดฎ ี แดฐ แดฑ ห แดณ แดด แดต แดถ แดท แดธ แดน แดบ แดผ แดพ แต? แดฟ โต แต แต แต แต แตก แต แถป
    
    โฐ ยน ยฒ ยณ โด โต โถ โท โธ โน
    โถ โท โธ โน โบ โป โผ โฝ โพ โฟ โ โ โ โ โ โ โ โ โ โ 
    โ? โก โข โฃ โค โฅ โฆ โง โจ โฉ โช โซ โฌ โญ โฎ โฏ โ โ โ โ โ
    
    ๐ฆ ๐ง ๐จ ๐ฉ ๐ช ๐ซ ๐ฌ ๐ญ ๐ฎ ๐ฏ ๐ฐ ๐ฑ ๐ฒ ๐ณ ๐ด ๐ต ๐ถ ๐ท ๐ธ ๐น ๐บ ๐ป ๐ผ ๐ฝ ๐พ ๐ฟ
    
    ๅฐฑ ๅ ๆจก ๅ เชพ เชฟ เซ เซ เซ เซ เซ เซ เซ เซ เซ โก โข โค โฅ โฆ โฉ โช โซ โญ โฏ โพ โฝ โป โบ โธ โท โถ โถ โตโด โฒ โฐโฑ โณ โธฟ โธ โธ โถฌ โปโธใในไกค โโโ า า โณ โด โต โฅโค โจ โ โ
    โ โ โ โ โ โ โ โ โข โค โ โ โ โ โฅ
    เน?ฃ?อกเฎเฏออก
    โ? โ โ โ โ โ โโโโโโโโโโโโโโโโโโโซโชโงโฆโฅโคโคโฃโขโ?โโโ โ โ โ โ โ โ โโโโโโ เฆเงฃเฏอเฝพเฝฟเฆเงฃอกอโณ โ?โ๊งแญผโธผโโธผแญผเฆเงฃอกอเฏอโฅอ เฆเงฃ โธ โขเนเธฑ โธ เฆเงฃอกอโณเณแอกอโ เฎเฏอโญเงขอกอ?โ โโ โ โ โ? โ โ โ โข โง โฆ โฎ โญ โฌ โซ โช โฉ โฐ โบ โน โธ โท โ โง โโฆ ?โฏ ?ฃ?เงก โ๊งแญผ โ โธผแญผ๊งเฆเงฃอกอเฏอโฅอ เฆเงฃ โธ เนเธฑโขโธ
    ? ๐ค ๐ฆด ๐ฃ เผ ๐ฃ ๐ง ๐ฅ ๐ฃง ๐ฃ ๐ฅ ๐? ๐?ฆ ๏ฟฝ แฉ โฒ ๊ซ ๐? ๐? ๐? ๐? ๐? ๐? ๐? ๐? ๐? ๐? ๐?ฅ ๐?ง ๐?ฃ ๐?ข ๐?ก ๐?? ๐?จ ๐?ฉ ๐?ช ๐?ซ ๐?ฌ ๐?ญ ๐?ฎ ๐?ฏ ๐?ฒ ๐?ณ ๐?ด ๐?ต ๐?ถ ๐?ท ๐?ฐ ๐? ๐กน ๐กธ ๐ข ๐ข ๐ข ๐ข ๐ข ๐ข ๐กฟ ๐กพ ๐กฝ ๐กผ ๐กป ๐กท ๐กถ ๐กด ๐กณ ๐กฒ ๐กฑ ๐กฐ ๐ข ๐ข ๐ข๐ข? ๐ข ๐ข ๐ข ๐ขซ ๐ฃ ๐ฃ ๐ฃ ๐ฃ ๐ฃ ๐ฃฅ ๐ฃฆ ๐ฃง ๐ฃฒ ๐ฃฑ ๐คผ ๐งฎ ๐ฆบ ๐ฆฒ ๐ฅถ เฎเฏอ ?เฝนเฝทเฝธย?ย? เฏอเฎเฏอาออกโฆ
    W
    Aา Bา Cา Dา Eา Fา Gา Hา Iา Jา Kา Lา Mา Nา Oา Pา Qา Rา Sา Tา Uา Vา Wา Xา Yา Zา
    
    Aา Bา Cา Dา Eา Cา Dา Eา Fา GาHา Iา Jา Kา Lา Mา Nา Oา Pา Qา Rา Sา Tา Uา Vา Wา Xา Yา Zา
    
    โฌ โฐ โฏ โฑ โ โ โ โ โ โ โณ โด โ โ 
    โญ โฎ โ โ โ โจ
    
    ไธน ไน ๅ ๅ ใข ไธ ใ? ๅ ๅทฅ ๏ผช ๏ผซ ใฅ ็ช ใ ๅฃ ใ ๏ผฑ ๅฐบ ใก ๅ โช โจ ๅฑฑ ใก ใ ไนv เน?ฃ?ร เน?ฃ?ร เน?ฃ?ร
    
    เน?ฃ?โฌ เน?ฃ?@ Ju
    เน?ฃ?A เน?ฃ?B เน?ฃ?C เน?ฃ?D เน?ฃ?E เน?ฃ?F เน?ฃ?G เน?ฃ?H เน?ฃ?I เน?ฃ?J เน?ฃ?K เน?ฃ?L เน?ฃ?M เน?ฃ?N เน?ฃ?O เน?ฃ?P เน?ฃ?Q เน?ฃ?R เน?ฃ?S เน?ฃ?T เน?ฃ?U เน?ฃ?W เน?ฃ?V เน?ฃ?X เน?ฃ?Y เน?ฃ?Z
    
    A = ะ โ เจธ ฮป ฮ ฤ รฅ เธช เธฅ เธ ฮฑ ฤ เจ แบด เธจ ฮฌ ฤ
    B = ร ะฒ ฮฒ แฎ เธฟ ะฒ โข เน ะช ั ั
    C = ยข ฯ ยฉ ฮถ ฦ ฦ ส โก เซฎ ุญ
    D = ร โ รฐ ฤ เน แ แซ ีช ษ
    E = ยฃ ะ ฮพ ะเน ั แฑ ลง ฮฃ ฮต ุน ั ฮญ ๏ญ ๏ฌฒ ษ ษ ูค เซฏ
    F = ฦ โฃ ๏ฌ ๏ฌบ ๏ฌณ า เช ี
    G = ฤข โข ษ? เซฌ วฅ าจ าฉ
    H = เชธ เฎ ฤง ั ะฝ ะ ะ เคโ?โฃ
    I = ฯ ฮ ุฐ ๏ปย? ษฉ ึ ษจ
    J = ื? ู ลข ฺ เจน ๏ปฎ ส แ a
    K = า ฤท ะบ า โญ ะ า า
    L = ล โ ฤป เนโิผ
    M = เน เฎฑ ะผ โฅ แ? แ ษฑ
    N = ล เธ? ี เธ ฮท ะธ เฎฐ ฦ เธซ โช ษณ ๏ฌพ ๏ญ โฆ
    O = ร ัณ รธ เซญ ฯ เน ฦก ฮ ะค เค? โป๏ฟผ
    P = ืง ร ฯ Pเน โฝ ฯ ฦฟ ึ ีฉ เฅ
    Q = วช วซ ีฃ
    R = ะณ ล ั ยฎ ะฏ ล ษพ
    S = ศ เธฃ ๏ป ยง ล ึ เชน $ ศ ฦง ู ล ี เชก เชฝ เซ
    T = ล ลฆ โฐ ฦฌ ฯ โ?
    U = เธข ั เช ว ะ ะฆ ลช เฎช ส ฮผ เชฅ เชฏ เชฎ ึ ฯ ั
    V = โ ูง แก
    X = ื ๏ญ าฒ าณ ฯ ร
    Z = ฦต ี ฦถ ฦบ .
    Y = ะฃ แง ๏ปป ๏ญ าฐ ยฅ ะฃ าฑ ืฅ
    
    โฌโนโฑ โฐโนเฎ๏ปฌ๏ปฌเฎเนโบ ๏ธพ๐ฃโฐ โฑ๐ฃ
    
    ๊ฃฐ ๊ฃฑ๊ฃข๊ฃฉ ๊ฃจ๊ฃฏ ๊ฅ ๊ฆ๊ฆ ๊ฆ ๊ฆ๊ฆถ๊ฆต ๊ฆด๊ฆณ๊ฆฟ ๊ง ๐จฐ ๐งง ๐ง ๐ฅ ๐ฅธ ๐ฅ ๐ฅ ๐ค ๐ค ๐ค ๐ค ๐ฃด ๐ฃณ ๐ฃ ๐ฃ ๐ฃ ๐กผ ๐ก เฟ เฟ แช แชแฌฝโโโโ โ โ โง โ โฆ โฅ โธ โธ ๊๊ฐ๊ณ๊ฃฆ๊ฃญ๊ฃช
    
    เผ ๊ง๊ง
    
    
    เทด เท เน เน เบ เผเผป เผย?ย? เฝนย?ย?ย?ย?ย? เฝทเฝตเฝด.ย? เฟ เฟ แฉ แฉ แช แชฅ แฌป โธ โก โ โต 
    
    เฌเฑ เฑเณ เณ เณ
    
    ย? า. ย?? ? ?ต ฿ท เคฟ เฅ เคป เงเงฃ 
    
    ๊ผ ๊ถ ๊ต ๊ฅ ๊ ๊ฅ เฅเงเงฃ
    ใ โก โฉ โค โฆ โฑ โฒ โฐ โณ โท โธ โน โ โ โ โ โ โ โใ ใ โผณ ใฒ แป เฆ ึ โ โ โ โ โ โ โฃ โค โฌ โฐ โญ โฑ โณ โ โย? วค ใฉ โ าจ ใ โท โฆ ใฟ โ ุ ไบ ล 
    โ๏ฝท ศบ ๅค ๅ ฮฬธ ๅผย? แฉ เตฌฬธ ๅฒ โฎ แพโ โด 
    
    เน?ฃ?โฌ เน?ฃ?@ 
    เน?ฃ?A เน?ฃ?B เน?ฃ?C เน?ฃ?D เน?ฃ?E เน?ฃ?F เน?ฃ?G เน?ฃ?H เน?ฃ?I เน?ฃ?J เน?ฃ?K เน?ฃ?L เน?ฃ?M เน?ฃ?N เน?ฃ?O เน?ฃ?P เน?ฃ?Q เน?ฃ?R เน?ฃ?S เน?ฃ?T เน?ฃ?U เน?ฃ?W เน?ฃ?V เน?ฃ?X เน?ฃ?Y เน?ฃ?Z
    
    Aา Bา Cา Dา Eา Fา Gา Hา Iา Jา Kา Lา Mา Nา Oา Pา Qา Rา Sาย?ย? าย? Uา Vา Wา Xา Yา Zา
    
    Aา Bา Cา Dา Eา Cา Dา Eา Fา GาHา Iา Jา Kา Lา Mา Nา Oา Pา Qา Rา Sา Tา Uา Vา Wา Xา Yา Zา
    
    ไธน ไน ๅ ๅ ใข ไธ ใ? ๅ ๅทฅ ๏ผช ๏ผซ ใฅ ็ช ใ ๅฃ ใ ๏ผฑ ๅฐบ ใก ๅ โช โจ ๅฑฑ ใก ใ ไนv เน?ฃ?ร เน?ฃ?ร เน?ฃ?ร
    
    เน?ฃ?อกอ?เฎเฏอ ?ฃ?ย?ย?ย? แอกเงโฬคึูญย? เงโฅฬคึูญย? เงฬคโึูญย? เฎเฏอ?ฃฬคึูญฬคึ เฆย? แอกเงโฬคึูญย?ย? แอกเงโฬคึูญย? โธโ
    
    โกย? เงโฅฬคึูญ?ฃ? เฎเฏอแอกย?ย? โฆ??ฃ?โอกอ???ฃย?ย? เฆเงฃอกอแทึณแทโ เฑเฐฎเฐพเฑย? เฅ แอโฅ เณแอกอเน?ฃ?ย?ย? เงโฟฬคึูญ เณแ
    
    โฆาอกอโณ เฏอเงกเงขอกอย?ย? เน?ฃ?อกอ?เฏอย?ย? เณแอกอย?ย?ย? เฆเงฃอกอย?ย? เงขอกอ?โ เฆเงฃอกอเฏอโฅอเฆเงฃ
    เธฅัฆเธแฏเธช๏พ๊ๅผเจธ๐ท 
    
    ๐งไนะฒฮฒฦเดฆะรเธฟแชะฌาแชษฎษแฐแโฌแไพ
    
    ๐จๅยขแธโกแโตแ?ฦ๊แฃแโใจอผโญ
    
    ๐ฉๅโรโฦีชโิิ๊ธแฑแดแแชแฌ
    
    ๐ชใขัฮฃุนัใ?แโฎโโฮพฯต๏พเฑฌ๊แแโฐใซ เซฏใ
    
    ๐ซไธfโฃาีเฑฏิฒใีข๊โฑ ิฒ
    
    ๐ฌใ?gโกแบโฒส๏ฝ๊โแถแฉิเฉฒวค
    
    ๐ญๅะฝเฎเคฤฆแ?ใใใฟใแฉโโใถเจฎโโ
    
    ๐ฎๅทฅฮนฮแคแพเนลโฑกแแฃเนแใงใจ๏ผฉเน ษช๊คแโษจ ยก
    
    ๐ฏCDโญาฦำ๊แฆาก 
    
    ๐ฑใฅโ ล๏พโฑ?โฑขโ?โบใเฅฎเนโฐิผๅปด๊โใใ๊ญ
    
    ๐ฒ็ชะผเนเฎฑโณแเฏฑเตฌแเบแฎแขแฐฯปไป
    
    ๐ณใะธเธ?เธเฎฐฦเธซโชโฆแถเฎฒโฉเบเธซโแเฅอทฮท
    
    ๐ดๅฃฯัปรแรธเนฮะคำจใฎับโโฆาฉแงาจแซแคิพ โ
    
    ๐ตใฯใ ฦคPแตแีฉใขโฑใโิน๏ฝฑใฑแแฎ ไผ
    
    ๐ถ๏ผฑqโ 
    
    ๐ทๅฐบัเคฐโเคฐเฅโน ิฦฆส๊ชิปแโโแโๅฐป
    
    ๐ธไธs๐ฒลฺชลฺฉโทแเฆีแฆเธเบฎ๊เคฝเธ
    
    ๐นๅัฯลฆฦฌโ?โฎเงณแตโธใ๏ฝฒ ใคเคิต๊เฝแฎโณโโจแข
    
    ๐บโชฯเธขใฒเธแฎเฆสฦฒโชเธเธเธีถเบเบ๊แแ?เคฅเป
    
    ๐ปโจฮฝฦ?ทษฃแฏแแค
    
    ๐ผๅฑฑฯwเธฌโฉแณเฏฐเบเธั?ะจเธเธเธเบเบแกเจ
    
    ๐ฝใกโโโะร๊ผ่พ 
    
    ๐พใัฮฅ๏ญ๏ญาฐยฅะฃาฑืฅแแงืข๊ฉโแฉฯ
    
    ๐ฟไนzฦตฦถสแบ๊ดแโค
    
    
    A=ฮ๊ฐ ฮ ฮป ศบ โณ ฤ รฅ เธช เธชเธฑ เธฅ ฮฑ เธ เธจ แฉ ๐ฆ ๐ฆเธจ โณ ๏พฮ a ษ ฤ ๅพ ฮป ฮฑ ฮ ษ เธชไธนโ ะ โ เจธ ฮป ฮ ฤ รฅ เธช เธฅ เธ ฮฑ ฤ เจ แบด เธจ ฮฌ ฤฮป ะ ร รค เธฅ แบฒ ฤฆ ยช แบฉ เธช ร ีฑ ฤ เน??ฃฤ ฮฑเธชเธฑ ฮฌ แบท
    เคฎ เคธ ็ฆธ ไธไธธๅก ไธนๅฅ ๏พ ใ? ะ ๅผ เป ัฆ ๆไน เจ Aา ๅฒ เน?ฃ?A ๊ฌ๊ฌ ๅ ใฉ
    
    
    B=ๅค ไน เฆเงฃอกอๅฒ ะฒ เธฟ ร ฮฒ แชโ แฎ ษฎ ฮฒ ร เธฟ ะช ุทร ะฒ ฮฒ แฎ เธฟ ะฒ โข เน ะช ั ั ฦ ร เธฟ ร ไน ้ฆ ใถ โ ๅ ะฒ แช ๐ง เน?ฃ?B ๅค เฌท
    ใรัขฦะชะฌฮฒฯะฑะััใใใใญ โญ ษ Bา ใข 
    
    C=ยข โก โข C ฯ โ ๅ ใท ใฉ ใซ ไบไป ๐จ ษ เซฎ Cา เน?ฃ?C ี ๐จ ยข โก แ cฬฬ ษ ฯ ยฉCยข ฯ ยฉ ฮถ ฦ ฦ ส โก เซฎ ุญยข ฤ ฤ ฤ ยฉ ฤ ฤ เซฎ
    
    D=โ ฤ ษ ฤ ฮด ษ ใ ๅ โฬธ โเป ๐ฉ โ Dา ๅ ฦ
    เน?ฃ?D เฒ ๐ฉฤ ฤ ษ โ โ ีชร โ ฤ ?ร โซร โ รฐ ฤ เน แ แซ ีช ษ 
    
    
    
    E=ษ โฌ โฎ ใซ โ โ ฮ ฮฃ ฮพ ะ เนะ ุน ษ ษ ั แฒ ใ
    ๏พ ๏พ ไธ ๅทจ ็ไน ๏ผฅๅฎ เณฏ เฑฏ ใ? ใข ๐ช Eา ไบฅ เซฏ เน?ฃ?E ใ ฦฦ ฦ ุแฉ ๐ช ไน ะ ั ฮฃ ฮต ฮพ โ ็ แฉ โค แฐ แโฎยฃ ะ ฮพ ะเน ั แฑ ลง ฮฃ ฮต ุน ั ฮญ ๏ญ ๏ฌฒ ษ ษ ูค เซฏเซฏ ั แ ฮต ร ุน ๏ป ฤ โฌ ฮพ ฮญ โฎ รซ ะญ ?ผ
    
    F=า ฦ ิฒไธ ๏พ ฯ Fใ ี F ไธ ๐ซ Fา. เน?ฃ?Fย? ๐ซ ๏ฝท โฃ ส า โ f าฦ ิฒ เน??ฃF โฃฦ โฃ ๏ฌ ๏ฌบ ๏ฌณ า เช 
    
    
    G=โฒ วฅ แบ วค โก แฌ ๐ฌ ิ Gา เน?ฃ?G เป เป แ เฏน
    ๐ฌ ฤ ฤข g Gฬฬ โ โฒ เฏน ฤ Gเน เน ฤ? ฤก ฤฃ ฤเน ุค ู ืคฤข โข ษ? เซฌ วฅ
    
    H=ฤฆ ใ ษง ๅเฏฎ เฎ เฎ าบ าป ะฝ า า าข าฃ าคาฅ ำ ำ ิ ิ ่น แฌ ๐ญ โ?โฃ H ใฟ ั เน?ฃ?H เจฎ ๐ญ ใ ฤง ะฝ ั เฎ แฉ ฤง โ?โฃ ั เชธ ะ เฏฎ ะ ะฝเชธ เฎ ฤง ั ะฝ ะ ะ เคโ?โฃ
    
    I=แค ษจ แ รญ โฃ เฎดใง ใจ ๏ฝช ๏ฝด ๅทฅ่ฎ? ่พถ เน แพ ๐ฎ า Iา 
    เน?ฃ?I โถโท ๐ฎ ฮฏ ฮ แ ล ฮนฮ ฮน โรฏ ร เน ฤช ๏ญ แป รฎ ฤฎ ฤฉฯ ฮ ุฐ ๏ป ษฉ ึ ษจ
    
    J=สฤฒ ๏ฝ ๏ผช สฒแฅ แ ๐ฏ J โ เน?ฃ?J ๐ฏส แฅ J ฤด ษพ แ แฃู ื? เจน ฤดื? ู ลข ฺ เจน ๏ปฎ ส แ
    
    K=า า ำ โญ า ้ฟ า า? าก ำ าย? ๐ฐ ฦ K เช เน?ฃ?K๐ฐ โญ า ฮบ ฤท ะ ะบ เน??ฃK เช า ฤท ะบ า โญ ะ า า
    
    L=ล ิผ โ โ ๏พ ใ ฬฝลฟ ส เน โฐ ๐ฑใเนใฌ ๅปด Lา ใฅ เน?ฃ?L เน ี โบ ๐ฑ ล โฐ โ ิผ ใ โ ฤน ล ิผ ฤฝ ฤป ฤฟ โยฃ เนล โ ฤป เนโิผ
    
    M=โณ โณเน เฎฑ ะผ แ? แ ษฑ โฅ ำ ใ ใ /V ๆฐด เดฃ ำ ๐ฒ Mา ็ช เน?ฃ?M
    ๐ฒ ะผ โณ แ? เฎฑ แ ษฑ เน ส แแะผ เฎฑ /V เน เน??ฃM ะฉเน เฎฑ ะผ โฅ แ? แ ษฑ
    yg
    N=โฆ ล ล เฎฐละ เธ?ะน ื ล เธซเธ ะธฮทโฉ เฎฒ โช เตฏ ล Nา ใ เน?ฃ?N เธ เธ เตฎ เดตเดถเดทเดธ ะ๐ณะธ โฆ ฮ? โช ฮท เฏ เฎต ะนะธ ฮท ล เธ เฎฐ ะ เธ? ะน ล ล ฮฎ ะฟ เธซ ล เธ? ี เธ ฮท ะธ เฎฐ ฦ เธซ โช ษณ ๏ฌพ ๏ญ โฆ
    
    O=ับ ฮธ ฮ โ โฏ ใิพา ใ โ ร ิพ ี ืก โ โด ฮ ฮฆฯะค ฮฉ ฮธเน เน ฮฟ เน ฯ รธ ัณ ับ ัฒ ำจ เฅฆ
    ใฎ ๐ด ? O ๅฃ เน?ฃ?O ๆฑฉ เฌ? ๐ดรเนฯวฟโฦ?ะคืฅืืฅโดฮิพรธฮฉโแขแแฮธโ รธ ฯ ร เซญ วพ รถ โ แปฃ ลฎ ฦ? ล ิพ ฮ ฮด วพ ะค แป ร วฟ ล ฯ ร ัณ รธ เซญ ฯ เน ฦก ฮ ะค เค? โป๏ฟผ
    
    P=โ โฑ ไบ ใกๆท ใๅฐธ ๅฉๅซ ฦฟ ฯ ู ีฉ ๏ฝฑ ืง ยถ ใ ใ ใข ใ ใฃ ใค ใน ย? ๐ต ไผ า Pา ใ เน?ฃ?P ๅฐน ๐ตฯ ืง ีฉ รพ ฯร โ?โ๏ญ ีฉ ฯ รพ ึืง ร ฯ Pเน โฝ ฯ ฦฟ ึ ีฉ เฅ 
    
    Q=ฯ าจ าฉ. ๐ถ ฯ Qา เน?ฃ?Q๐ถq เน??ฃQวช วซ ีฃ
    
    R=โ ิ เคฐเฅโนะฏ ่จณ ๅฐบ ใๅฐปๅฐบ ๅฐผ ๅฐฝ ิป ส ษพ ั ะฏ ๆฐ ๐ท Rา ๅฑ เซจ เน?ฃ?R เธฏ เฆฃ ๅฐบ ๅฐป ั โ ฮ ั ยฎ ะป ะฏ ล ล เชฐ ล ั ื ะณะณ ล ั ยฎ ะฏ ล
    
    S= เธ เธฃ เบฎ เธ เคฝ โท ึ ู ฺฉ เฆ เฆ ี เชน แ ๐ธ เด
    ไน้ฉฌ ๅ ใ ใใ ไบไปค Sา ๏ผณ เน?ฃ?S เฆ เบฃ เฌ ๐ธเฆ โท แ ั เธฃ โด เฎู ยง เธฃ ล ุฆ เช ฺฉ ล ลก เชน ล เชฝ ีศ เธฃ ๏ป ยง ล ึ เชน $ ศ ฦง ู ล ี เชก เชฝ เซ 
    
    T=โณ ใ ิ ลฆ โฎ เงณ เฅ? ลง แญ โฅ ๅๅ เฅ ไธ ใ ใ ใ ใ ใค ๏ฝฒ ไบป เฆ ใผ แ? ๐น
    ๅนณ ไบ Tา ใ เน?ฃ?T เฆ แ แ ๅผ ๅญ ๐นั โ? ีง ิต ๏ฝฒ ลฆ เงณแฏ โฎ เค ใ ล โผ โ? ั ลฆ ลข ลค ลง ใถใล ลฆ โฐ ฦฌ ฯ โ? 
    
    U=เธ ร เธ เธ เธข เธฉ เธ ฮผ ใ ลณ เธ เธ เธโช ใช ใฉๅตใณใฒ แกฯส ๐บ าด เช เชฅ แก Uา ใ เชท เน?ฃ?U แฎ เธฉ ๐บ ใฒ ฯ แก โชเช ยต ร รผ ั ลฏ เธข ร รป ลญ ู เธ เชทเธข ั เช ว ะ ะฆ ลช เฎช ส ฮผ เชฅ เชฏ เชฎ ึ ฯ ั
    
    V=โ ่ฎ? ๐ป Vา โจ เน?ฃ?V เธ ๐ปฮฝโโ เซชโ ูง แก
    
    W= โฉ เธฌ เธ เธ เธ เธ เฏฐ แ ฯ ๐ผ Wา เช ๅฑฑ เน?ฃ?W เบ ๐ผ ั? ะจ โฉ ฯลด ฯ ลต เช ฯ เธฌ เธ เธ เธ ๏ทฒ เจ
    
    X =ร ๅบรไนๅๅบๅาณฬธาฒฬธาณโโ ฯ ๐ฝ ไน Xา. ใก เน?ฃ?X ๐ฝฯ าฒ าณ โฯ ะ แฏ รื ๏ญ าฒ าณ ฯ ร
    
    Y = ฦด ยฅ ไธซๅ ษ ฮ แธ ์ ฮณ ืฆ แง แธ แท ืข ฮณ ั Y ๏ปป ใ แ ๐พ ฯ ฮจ Yา. เน?ฃ?Y โผฌ ฦณ๐พั ฮจ แง ฮณฮผยฅ ๏ปป ลท ะ แง ฮณ รฟ รฝ เฅซะฃ แง ๏ปป ๏ญ าฐ ยฅ ะฃ าฑ ืฅ
    
    ฮเธฑ = ส ำ? ำก ใ ใ ไน ไน z ฦถ ศฅ ส ส ส ฦบ ส ๐ฟ Zา ๐ฟ z ไน ฮถ ี ลป ลพ ฮถ ลผ ฦต ี ฦถ ฦบ
    
    แต แต แถ แต แต แถ? แต สฐ แถค สฒ แต หก แต แถฐ แต แต ห สณ หข แต แต แต สท หฃ สธ แถป แตหกแถ แถค แถซแตแตแต สธแตแต
    
    แดฌ แดฎ ี แดฐ แดฑ ห แดณ แดด แดต แดถ แดท แดธ แดน แดบ แดผ แดพ แต? แดฟ โต`
}