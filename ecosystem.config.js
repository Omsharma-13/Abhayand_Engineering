module.exports = {
  apps: [
    {
      name: "abhyanand-web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3050",
      cwd: "/var/www/abhyanand-web",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "600M",
      env: {
        NODE_ENV: "production",
        PORT: 3050,
      },
    },
  ],
};
