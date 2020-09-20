module.exports = {
  apps: [
    {
      name: "eureka",
      script: "mvn -f jmo-arch-eureka spring-boot:run",
      cwd: ".",
      error_file: 'logs/eureka-err.log',
      out_file: 'logs/eureka-out.log',
      log_file: 'logs/eureka-combined.log',
    },
    {
      name: "zuul",
      script: "mvn -f jmo-arch-zuul spring-boot:run",
      cwd: ".",
      error_file: 'logs/zuul-err.log',
      out_file: 'logs/zuul-out.log',
      log_file: 'logs/zuul-combined.log',
    },
    {
      name: "hystrix",
      script: "mvn -f jmo-arch-hystrix-turbine spring-boot:run",
      cwd: ".",
      error_file: 'logs/hystrix-err.log',
      out_file: 'logs/hystrix-out.log',
      log_file: 'logs/hystrix-combined.log',
    },
  ]
};
