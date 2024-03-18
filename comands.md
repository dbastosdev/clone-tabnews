Roda o sistema localmente:

```
npm run dev
```

Roda o Jest em modo watch para monitorar efeitos de novas implementações no sistema - testes unitários ou de regressão:

```
npm run test:watch
```

Atualiza os pacotes do linux do codespace:

```
sudo apt update
```

Instala apenas o client do postgres sql:

```
sudo apt install postgresql-client
```

Lista os containers em execução e seu status:

```
docker ps -a
```

Inicia a stack do projeto - arquivo compose na raiz do projeto:

```
docker compose up
```

Inicia a stack do projeto - em pasta específica:

```
docker compose -f infra/compose.yaml up
```

Derrumba a stack em execução:

```
docker compose down
```

Derrumba a stack em execução e reinicia:

```
docker compose up -d --force-recreate
```

Comando para acessar o postgres pela interface terminal - password: local_password:

```
psql host=localhost --username=postgres --port=5432
```

Sair do container do postgres:

```
\q
```
