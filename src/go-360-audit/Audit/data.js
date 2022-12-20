const controls = [
  {
    id: 1,
    title: 'Auditoria - 0001',
    maturityAtual: 2,
    audit: 2,
    maturityExpected: 5,
    subcontrols: [
      {
        id: 2,
        title: 'CIS CONTROLS V7.1- 0001',
        subcontrols: [
          {
            id: 3,
            title: 'Matriz de Maturidade - 0001',
            maturityAtual: 2,
            maturityExpected: 5,
          },
        ],
      },
    ],
  },
];

export default controls;
