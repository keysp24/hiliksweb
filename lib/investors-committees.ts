export type Committee = { name: string; members: { name: string; designation: string }[] };

export const committees: Committee[] = [
  {
    name: 'Audit Committee',
    members: [
      { name: 'Mr. Bhanu Dinesh Alava', designation: 'Chairman' },
      { name: 'Mr. VNP Bhaskar', designation: 'Member' },
      { name: 'Mr. MVV Varma', designation: 'Member' },
    ],
  },
  {
    name: 'Nomination & Remuneration Committee',
    members: [
      { name: 'Mr. VNP Bhaskar', designation: 'Chairman' },
      { name: 'Mr. Bhanu Dinesh Alava', designation: 'Member' },
      { name: 'Mr. T. Srivalli', designation: 'Member' },
    ],
  },
  {
    name: 'Stakeholders Relationship Committee',
    members: [
      { name: 'VNP Bhaskar', designation: 'Chairman' },
      { name: 'MVV Varma', designation: 'Member' },
      { name: 'Sandeep Copparapu', designation: 'Member' },
    ],
  },
];
