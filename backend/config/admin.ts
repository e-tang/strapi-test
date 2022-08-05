export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1540ca929ece3928ed6a1576159d01e2'),
  },
});
