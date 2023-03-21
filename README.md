# Rest-server con Typescript y Sequelize

Esta aplicación es un rest-server realizado con Nodejs, expressjs, typescript y sequelize, además utiliza mariadb para almacenar datos. El mismo aplica información de usuarios, para realizar operaciones de mostrar, crear, actualizar y eliminar.

## Instalación

```bash
git clone https://github.com/byZhetta/ts-restserver.git
cd ts-restserver
npm install
tsc # compilar código de typescript
npm start
```

### Configuración de sequelize

Para utilizar los servicios de sequelize, hay que configurar algunos parametros en el siguiente archivo: db>connection.ts

```typescript
const db = new Sequelize('dbnode', 'dbuser', 'dbpass', {
    host: 'dbhost',
    dialect: 'database',
    // logging: false,
});
```

Modificar las variables con los datos del servidor local, Para más información, [leer documentación](https://sequelize.org/docs/v6/getting-started/).

## Tecnologías principales

- nodejs v14.18.1
- express v4.17.1
- typescript v4.1.5
- sequelize v6.5.0
- mariadb v3.0.2