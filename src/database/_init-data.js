export const cards = [
  { _id: 'c1', name: 'Card 1', description: 'Card 1 desc.', list_id: 'l2' },
  { _id: 'c2', name: 'Card 2', description: 'Card 2 desc.', list_id: 'l1' },
  { _id: 'c3', name: 'Card 3', description: 'Card 3 desc.', list_id: 'l1' },
  { _id: 'c4', name: 'Card 4', description: 'Card 4 desc.', list_id: 'l1' },
  { _id: 'c5', name: 'Card 5', description: 'Card 5 desc.', list_id: 'l2' },
  { _id: 'c6', name: 'Card 6', description: 'Card 6 desc.', list_id: 'l2' },
  { _id: 'c7', name: 'Card 7', description: 'Card 7 desc.', list_id: 'l2' },
  { _id: 'c8', name: 'Card 8', description: 'Card 8 desc.', list_id: 'l3' },
  { _id: 'c9', name: 'Card 9', description: 'Card 9 desc.', list_id: 'l3' },
  {
    _id: 'c10',
    name: 'Card 10',
    description: 'Card 10 desc.',
    list_id: 'l4',
  },
  {
    _id: 'c11',
    name: 'Card 11',
    description: 'Card 11 desc.',
    list_id: 'l4',
  },
];

export const lists = [
  {
    _id: 'l1',
    name: 'Todo',
    board_id: 'b1',
    cards: cards.filter(c => c.list_id === 'l1'),
  },
  {
    _id: 'l2',
    name: 'In Progress',
    board_id: 'b1',
    cards: cards.filter(c => c.list_id === 'l2'),
  },
  {
    _id: 'l3',
    name: 'Done',
    board_id: 'b1',
    cards: cards.filter(c => c.list_id === 'l3'),
  },
  {
    _id: 'l4',
    name: 'Done',
    board_id: 'b2',
    cards: cards.filter(c => c.list_id === 'l4'),
  },
];

export const boards = [
  { _id: 'b1', name: 'Tech', lists: lists.filter(l => l.board_id === 'b1') },
  {
    _id: 'b2',
    name: 'Personal',
    lists: lists.filter(l => l.board_id === 'b2'),
  },
];
