let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas'
  };
//   console.log('Bem-vinda, ' + info.personagem)

  info['recorrente'] = 'Ambos';
  info2['recorrente'] = 'recorrentes';
//   console.log(info);

for(let index in info) {
    console.log(info[index] + ' e ' + info2[index])
}