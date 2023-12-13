interface IMailConfig {
  driver: 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: 'ses',
  defaults: {
    from: {
      email: 'fretechteam@gmail.com',
      name: 'Fretech',
    },
  },
} as IMailConfig;
