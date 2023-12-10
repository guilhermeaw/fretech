type UserRole = {
  ADMINISTRATOR: 'administrator';
  DELIVERYMAN: 'deliveryman';
};

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
};
