module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '39f864f69cf202582606cc52a327a9b5'),
  },
});
