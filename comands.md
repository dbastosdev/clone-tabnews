# Dependências do projeto:

- client do postgres para conexão ao banco de dados via cli

```
sudo apt install postgresql-client
```

- client do postgres para conexão ao banco de dados via node.js

```
npm install pg@8.11.3
```

- cria o arquivo `jsconfig.json` na raiz do repositório. Ele serve justamente para configurar o base url do projeto bem como outras configurações. https://code.visualstudio.com/docs/languages/jsconfig

```
code jsconfig.json
```

- renomeia o arquivo `.env` para `.env.development`

```
git mv .env .env.development
```

# Testes:

Roda o Jest em modo watch para monitorar efeitos de novas implementações no sistema - testes unitários ou de regressão:

```
npm run test:watch
```

Configuração do package.json para habilitar verificar arquivos modificados e arquivos existentes durante watch.

```
jest watchAll
```

Roda o Jest em uma única vez:

```
npm run test
```

# Operação do projeto:

Roda o sistema localmente:

```
npm run dev
```

Faz uma busca fuzzy por arquivos do projeto:

```
Ccommand + p
```

Roda o sistema localmente:

```
command + p seguido de @ e nova busca seleciona exatamente a linha do arquivo buscado.
```

## Scripts:

Para operação do sistema com comandos simples e ágeis.

```
  "scripts": {
    "dev": "npm run services:up && next dev",
    "services:up": "docker compose -f infra/compose.yaml up -d",
    "services:down": "docker compose -f infra/compose.yaml down",
    "services:start": "docker compose -f infra/compose.yaml start",
    "services:stop": "docker compose -f infra/compose.yaml stop",
    "lint:check": "prettier --check .",
    "lint:fix": "prettier --write .",
    "test": "jest",
    "test:watch": "jest --watchAll"
  }
```

## Operação do docker e serviços:

Lista os containers em execução e seu status:

```
docker ps -a
```

Fecha o terminal:

```
control + D
exit
```

Inicia a stack do projeto - arquivo compose na raiz do projeto:

```
docker compose up
```

Inicia a stack do projeto - em pasta específica:

```
docker compose -f infra/compose.yaml up
```

Libera o terminal para ser utilizado. Modo detechad ou deamon. Opera em background.

```
docker compose -f infra/compose.yaml up -d
```

Derrumba a stack em execução:

```
docker compose down
```

Derrumba a stack em execução e reinicia:

```
docker compose up -d --force-recreate
```

# Comandos para gestão da instância do codespace:

Atualiza os pacotes do linux do codespace:

```
sudo apt update
```

Comando para acessar o postgres pela interface terminal - password: local_password:

```
psql host=localhost --username=postgres --port=5432
```

Sair do container do postgres:

```
\q
```
