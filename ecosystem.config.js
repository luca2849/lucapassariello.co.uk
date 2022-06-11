module.exports = {
  apps : [{
    name   : "portfolio-4001",
    script : "./server/server.js",
    watch: true,
    instance_var: '3',
    env: {
        "PORT": 4001,
        "NODE_ENV": "production"
    }
  }]
}
